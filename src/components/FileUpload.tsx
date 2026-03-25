import { useRef } from "react";

interface FileUploadProps {
  title?: string;
  subtitle?: string;
  onUploadClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  compact?: boolean;
  buttonLabel?: string;
  helperText?: string;
  variant?: "default" | "hero";
}

export function FileUpload({
  title = "Drop your PDF here",
  subtitle = "or click to choose a file from your device",
  onUploadClick,
  compact = false,
  buttonLabel = "Upload PDF",
  helperText,
  variant = "default",
}: FileUploadProps) {
  const isHero = variant === "hero";
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
        compact ? "mx-auto w-full max-w-xl" : "w-full max-w-3xl"
      }`}
    >
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        onChange={onUploadClick}
        className="hidden"
      />
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-slate-100 blur-2xl" />
      <div
        className={`relative border border-dashed border-slate-300/90 p-8 text-center ${
          isHero ? "rounded-2xl min-h-[380px]" : "rounded-2xl"
        }`}
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-2xl shadow-sm">
          PDF
        </div>
        <p className="text-3xl font-extrabold text-slate-900">{title}</p>
        <p className="mt-2 text-lg text-slate-600">{subtitle}</p>
        <button
          type="button"
          onClick={handleButtonClick}
          className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-md shadow-indigo-300 transition hover:-translate-y-0.5 hover:bg-indigo-700 cursor-pointer"
        >
          {buttonLabel}
        </button>
        {helperText ? (
          <p className="mt-12 text-base text-slate-500">{helperText}</p>
        ) : null}
      </div>
    </div>
  );
}
