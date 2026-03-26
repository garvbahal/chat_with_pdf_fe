import type { Message } from "../features/chat/chatTypes";

interface ChatMessageBubbleProps {
  message: Message;
}

export function ChatMessageBubble({ message }: ChatMessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex items-end gap-2 ${isUser ? "justify-end" : "justify-start"}`}
    >
      {!isUser ? (
        <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
          AI
        </div>
      ) : null}
      <article
        className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm sm:max-w-[70%] ${
          isUser
            ? "bg-slate-900 text-white"
            : "border border-slate-200 bg-white text-slate-800"
        }`}
      >
        <p>{message.content}</p>
        <time className="mt-1 block text-[11px] opacity-70">
          {message.createdAt}
        </time>
      </article>
      {isUser ? (
        <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-700">
          You
        </div>
      ) : null}
    </div>
  );
}
