import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";

import {
  askQuestionMutation,
  useFetchChatHistory,
  useSideBarHistory,
} from "../features/chat/useChatHistoryQuery";
import { DashboardNewPage } from "../components/DashboardNewPage";
import { useUploadPdf } from "../features/pdfUpload/useUploadPdf";
import toast from "react-hot-toast";
import { DashboardChat } from "../components/DashboardChat";
import type { Message } from "../features/chat/chatTypes";

export function DashboardPage() {
  const navigate = useNavigate();

  const [activeChatId, setActiveChatId] = useState<string | null>(null);

  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { mutate, isPending: isUploading } = useUploadPdf();

  const addNewChat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF allowed");
      return;
    }

    mutate(file);
    event.target.value = "";
  };

  const {
    data: sideBarData,
    isPending: isLoadingChats,
    error,
  } = useSideBarHistory();

  const activeChat = sideBarData?.allChats.find(
    (chat) => chat._id === activeChatId,
  );

  const pdfId = activeChat?.pdfId._id;

  const {
    data: chatHistoryData,
    isPending: isFetchingChats,
    isError,
  } = useFetchChatHistory(pdfId);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (chatHistoryData?.chatResponse.messages) {
      setMessages(chatHistoryData.chatResponse.messages);
    }
  }, [chatHistoryData, activeChat]);

  const { mutate: askQuestion, isPending: isAsking } = askQuestionMutation();

  const handleSendMessage = (question: string) => {
    if (!pdfId) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);

    askQuestion(
      { question, pdfId },
      {
        onSuccess: (data) => {
          const now = new Date().toISOString();

          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              content: data.answer,
              createdAt: now,
              updatedAt: now,
            },
          ]);
        },
        onError: (error) => {
          console.log(error);
        },
      },
    );
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#f6f6f8] text-slate-900">
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-24 h-64 w-64 rounded-full bg-indigo-100/70 blur-3xl" />

      <Sidebar
        chats={sideBarData?.allChats || []}
        isLoading={isLoadingChats}
        activeChatId={activeChatId}
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onToggleCollapse={() => setCollapsed((prev) => !prev)}
        onCloseMobile={() => setMobileOpen(false)}
        onNewChat={() => setActiveChatId(null)}
        onSelectChat={setActiveChatId}
        onGoHome={() => navigate("/")}
      />

      <section className="relative z-10 flex min-h-0 min-w-0 flex-1 flex-col p-3 sm:p-4">
        <header className="mb-3 flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm sm:px-5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-xl border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 lg:hidden"
            >
              Menu
            </button>
            <div>
              <h1 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl">
                Chat Workspace
              </h1>
              <p className="text-sm text-slate-500">
                {activeChat ? activeChat.title : "No active chat selected"}
              </p>
            </div>
          </div>
        </header>
        {!activeChat && <DashboardNewPage addNewChat={addNewChat} />}
        {activeChat && (
          <DashboardChat
            messages={messages}
            isLoadingReply={isFetchingChats}
            handleSend={handleSendMessage}
          />
        )}
      </section>
    </div>
  );
}
