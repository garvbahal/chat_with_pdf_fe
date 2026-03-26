import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { type RootState } from "../app/store";
import { type AppDispatch } from "../app/store";
import { logout } from "../features/auth/authSlice";
import toast from "react-hot-toast";

export function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => {
    if (state.auth.token) {
      return true;
    }
    return false;
  });

  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-310 items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-slate-900"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-slate-900" />
          AskDocs
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="text-lg font-semibold text-slate-600 transition hover:text-slate-900"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-lg font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Get Started
              </NavLink>
            </>
          ) : (
            <>
              <button
                className="text-lg font-semibold text-slate-600 transition hover:text-slate-900 cursor-pointer"
                onClick={() => {
                  dispatch(logout());
                  toast.success("Logout Successfull");
                  navigate("/login");
                }}
              >
                Logout
              </button>
              <NavLink
                to="/dashboard"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-lg font-bold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Dashboard
              </NavLink>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="text-sm font-semibold text-slate-700 transition hover:text-slate-900"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm"
              >
                Get Started
              </NavLink>
            </>
          ) : (
            <>
              <button
                className="text-sm font-semibold text-slate-700 transition hover:text-slate-900 cursor-pointer"
                onClick={() => {
                  dispatch(logout());
                  toast.success("Logout Successfull");
                  navigate("/login");
                }}
              >
                Logout
              </button>
              <NavLink
                to="/dashboard"
                className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-800  cursor-pointer shadow-sm"
              >
                Dashboard
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
