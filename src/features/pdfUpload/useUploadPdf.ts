import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pdfUploadApi } from "./pdfUploadApi";
import type { pdfUploadResponse } from "./pdfUploadTypes";
import type { AxiosError } from "axios";
import type { ErrorResponse } from "../auth/authTypes";

export const useUploadPdf = () => {
  const queryClient = useQueryClient();
  return useMutation<
    pdfUploadResponse,
    AxiosError<ErrorResponse>,
    { file: File }
  >({
    mutationFn: ({ file }) => pdfUploadApi(file),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sidebarHistory"] });
    },
  });
};
