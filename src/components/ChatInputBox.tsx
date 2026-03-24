import { useState } from "react";

interface ChatInputBoxProps {
    disabled?: boolean;
    onSend: (message: string) => void;
}

export function ChatInputBox({ disabled, onSend }: ChatInputBoxProps) {
    const [text, setText] = useState("");

    const submit = () => {
        const trimmed = text.trim();
        if (!trimmed || disabled) {
            return;
        }

        onSend(trimmed);
        setText("");
    };

    return (
        <div className="border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:p-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2 shadow-sm">
                <div className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-3 py-2">
                    <input
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" && !event.shiftKey) {
                                event.preventDefault();
                                submit();
                            }
                        }}
                        placeholder="Ask a question about your PDF..."
                        className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                        disabled={disabled}
                    />
                    <button
                        type="button"
                        onClick={submit}
                        disabled={disabled}
                        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        Send
                    </button>
                </div>
                <p className="px-2 pt-2 text-xs text-slate-500">
                    Press Enter to send
                </p>
            </div>
        </div>
    );
}
