import { useMutation, useQueryClient } from "@tanstack/react-query";
import { pdfUploadApi } from "./pdfUploadApi";

export const useUploadPdf = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: pdfUploadApi,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["sidebarHistory"] });
        },
    });
};
