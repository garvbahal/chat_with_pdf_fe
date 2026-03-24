import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatInputBox } from "../components/ChatInputBox";
import { ChatMessageBubble } from "../components/ChatMessageBubble";
import { FileUpload } from "../components/FileUpload";
import { Sidebar } from "../components/Sidebar";

// import type { ChatMessage, ChatSession } from "../types";
import {
    useFetchChatHistory,
    useSideBarHistory,
} from "../features/chat/useChatHistoryQuery";
import { DashboardNewPage } from "../components/DashboardNewPage";
import { useUploadPdf } from "../features/pdfUpload/useUploadPdf";
import toast from "react-hot-toast";
import { DashboardChat } from "../components/DashboardChat";

export function DashboardPage() {
    const navigate = useNavigate();

    const [activeChatId, setActiveChatId] = useState<string | null>(null);
    const [activepdfId, setActivePdfId] = useState<string | null>(null);
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

    const {
        data: chatHistoryData,
        isPending: isFetchingChats,
        isError,
    } = useFetchChatHistory(activepdfId);

    const handleSendMessage = (question: string) => {};

    const activeChat = sideBarData?.allChats.find(
        (chat) => chat._id === activeChatId,
    );

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
                setPdfId={setActivePdfId}
                onGoHome={() => navigate("/")}
                onLogout={() => navigate("/login")}
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
                                {activeChat
                                    ? activeChat.title
                                    : "No active chat selected"}
                            </p>
                        </div>
                    </div>
                </header>
                {!activeChat && <DashboardNewPage addNewChat={addNewChat} />}
                {activeChat && (
                    <DashboardChat
                        messages={chatHistoryData?.chatResponse.messages || []}
                        isLoadingReply={isFetchingChats}
                        handleSend={handleSendMessage}
                    />
                )}
            </section>
        </div>
    );
}
