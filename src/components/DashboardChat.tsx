import type { Message } from "../features/chat/chatTypes";
import { ChatInputBox } from "./ChatInputBox";
import { ChatMessageBubble } from "./ChatMessageBubble";

interface DashboardChatProps {
  messages: Message[];
  isLoadingReply: boolean;
  isFetchingChats: boolean;
  isFetchChatError: boolean;
  handleSend: (question: string) => void;
}

export const DashboardChat = ({
  messages,
  isLoadingReply,
  isFetchingChats,
  isFetchChatError,
  handleSend,
}: DashboardChatProps) => {
  if (isFetchChatError) {
    return <div className="p-4 text-red-500">Failed to load chat</div>;
  }
  return (
    <div className="flex min-h-0 flex-1 flex-col rounded-3xl border border-slate-200 bg-white shadow-sm">
      {isFetchingChats ? (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-sm text-slate-500">Loading chat...</p>
        </div>
      ) : (
        <>
          <div className="scrollbar-thin flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 sm:p-6">
            {messages.map((message, index) => (
              <ChatMessageBubble key={index} message={message} />
            ))}

            {isLoadingReply ? (
              <div className="max-w-62.5 animate-pulse rounded-3xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <div className="h-2 w-32 rounded bg-slate-300" />
              </div>
            ) : null}
          </div>
          <ChatInputBox onSend={handleSend} disabled={isLoadingReply} />
        </>
      )}
    </div>
  );
};
