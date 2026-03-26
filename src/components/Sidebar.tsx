// import type { ChatSession } from "../types";

import { useDispatch } from "react-redux";
import type { sideBarChat } from "../features/chat/chatTypes";
import { type AppDispatch } from "../app/store";
import { logout } from "../features/auth/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  chats: sideBarChat[];
  isError: boolean;
  isLoading: boolean;
  activeChatId: string | null;
  collapsed: boolean;
  mobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onGoHome: () => void;
}

export function Sidebar({
  chats,
  activeChatId,
  isError,
  collapsed,
  mobileOpen,
  onToggleCollapse,
  onCloseMobile,
  onNewChat,
  onSelectChat,
  onGoHome,
}: SidebarProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  function onLogout() {
    dispatch(logout());
    toast.success("Log out Successfull");
    navigate("/login");
  }

  if (isError) {
    return <div className="p-4 text-red-500">Failed to load chats</div>;
  }
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-900/50 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onCloseMobile}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex border-r border-slate-200 bg-linear-to-b from-white to-slate-50 transition-all duration-300 lg:static lg:translate-x-0 ${
          collapsed ? "w-23" : "w-70"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {collapsed ? (
          <div className="flex h-full w-full flex-col items-center p-2.5">
            <div className="flex w-full flex-col items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-bold tracking-wide text-slate-800 shadow-sm">
                CP
              </div>

              <div className="w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                <button
                  type="button"
                  onClick={onNewChat}
                  className="flex h-10 w-full items-center justify-center rounded-xl bg-slate-900 text-lg font-semibold text-white transition hover:bg-black cursor-pointer"
                  aria-label="Create new chat"
                  title="New chat"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={onToggleCollapse}
                  className="mt-2 hidden h-10 w-full items-center justify-center rounded-xl border border-slate-300 text-base font-semibold text-slate-700 transition hover:bg-slate-100 lg:flex cursor-pointer"
                  aria-label="Expand sidebar"
                  title="Expand"
                >
                  {">"}
                </button>
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="mt-2 flex h-10 w-full items-center justify-center rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 lg:hidden cursor-pointer"
                  aria-label="Close sidebar"
                  title="Close"
                >
                  x
                </button>
              </div>
            </div>

            <div className="mt-auto w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <button
                type="button"
                onClick={() => {
                  onGoHome();
                  onCloseMobile();
                }}
                className="flex h-10 w-full items-center justify-center rounded-xl border border-slate-300 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 cursor-pointer"
                aria-label="Go to homepage"
                title="Home"
              >
                H
              </button>
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onCloseMobile();
                }}
                className="mt-2 flex h-10 w-full items-center justify-center rounded-xl border border-rose-200 bg-rose-50 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 cursor-pointer"
                aria-label="Logout"
                title="Logout"
              >
                L
              </button>

              <div className="mt-3 flex justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full flex-col p-3">
            <div className="mb-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <p className="font-display text-xl text-slate-800">ChatPDF</p>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                  Live
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Your recent PDF conversations
              </p>
            </div>

            <div className="mb-3 flex items-center gap-2">
              <button
                type="button"
                onClick={onNewChat}
                className="flex-1 rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-black cursor-pointer"
                aria-label="Create new chat "
              >
                New Chat
              </button>
              <button
                type="button"
                onClick={onToggleCollapse}
                className="hidden rounded-xl border border-slate-300 px-2 py-2 text-slate-700 transition hover:bg-slate-100 lg:block cursor-pointer"
                aria-label="Toggle sidebar"
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={onCloseMobile}
                className="rounded-xl border border-slate-300 px-2 py-2 text-slate-700 transition hover:bg-slate-100 lg:hidden cursor-pointer"
                aria-label="Close sidebar"
              >
                x
              </button>
            </div>

            <div className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
              Chat History
            </div>

            <div className="scrollbar-thin flex-1 space-y-2 overflow-y-auto pr-1">
              {chats.map((chat) => (
                <button
                  type="button"
                  key={chat._id}
                  onClick={() => {
                    onSelectChat(chat._id);
                    onCloseMobile();
                  }}
                  className={`w-full rounded-2xl border px-3 py-2 text-left text-sm transition cursor-pointer ${
                    activeChatId === chat._id
                      ? "border-slate-900/20 bg-slate-900 text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                  title={chat.title}
                >
                  <p className="truncate font-semibold">{chat.title}</p>
                  <p
                    className={`mt-1 text-xs ${
                      activeChatId === chat._id
                        ? "text-slate-200"
                        : "text-slate-500"
                    }`}
                  >
                    {chat.updatedAt}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-3 space-y-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <button
                type="button"
                onClick={() => {
                  onGoHome();
                  onCloseMobile();
                }}
                className="flex w-full items-center justify-center rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 cursor-pointer"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  onCloseMobile();
                }}
                className="flex w-full items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
