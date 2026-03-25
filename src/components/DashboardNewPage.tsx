import { FileUpload } from "./FileUpload";

interface DashboardNewPageProps {
  addNewChat: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

export const DashboardNewPage = ({
  addNewChat,
  isLoading,
}: DashboardNewPageProps) => {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto rounded-3xl border border-slate-200 bg-white/90 shadow-sm">
      {isLoading ? (
        <div className="grid min-h-full place-items-center">
          <p className="text-lg font-medium text-slate-600">
            Uploading & processing your PDF...
          </p>
        </div>
      ) : (
        <>
          <div className="grid min-h-full place-items-center px-4 py-8">
            <div className="mx-auto w-full max-w-3xl text-center">
              <h2 className="font-display mb-4 text-4xl text-slate-900 sm:text-5xl lg:text-6xl">
                Upload a PDF to start chatting
              </h2>
              <p className="mb-8 text-lg text-slate-600 sm:text-xl">
                Add a document and ask questions in plain language.
              </p>
              <div className="mx-auto w-full max-w-xl">
                <FileUpload compact onUploadClick={addNewChat} />
              </div>
              <div className="mx-auto mt-6 grid w-full max-w-3xl gap-3 text-left sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Fast
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Instant answers with context
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Clear
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Summaries that are easy to read
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Private
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    Your files stay protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
