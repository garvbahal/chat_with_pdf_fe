import { useQuery } from "@tanstack/react-query";
import { fetchChatHistory, fetchSideBarHistory } from "./chatApi";

export const useSideBarHistory = () => {
    return useQuery({
        queryKey: ["sidebarHistory"],
        queryFn: fetchSideBarHistory,
    });
};

export const useFetchChatHistory = (pdfId: string | null) => {
    return useQuery({
        queryKey: ["chatHistory", pdfId],
        queryFn: () => fetchChatHistory(pdfId),
        enabled: !!pdfId,
    });
};
