import { useMutation, useQuery } from "@tanstack/react-query";
import {
  askQuestionApi,
  fetchChatHistory,
  fetchSideBarHistory,
} from "./chatApi";

export const useSideBarHistory = () => {
  return useQuery({
    queryKey: ["sidebarHistory"],
    queryFn: fetchSideBarHistory,
  });
};

export const useFetchChatHistory = (pdfId: string | undefined) => {
  return useQuery({
    queryKey: ["chatHistory", pdfId],
    queryFn: () => fetchChatHistory(pdfId),
    enabled: !!pdfId,
  });
};

export const askQuestionMutation = () => {
  return useMutation({
    mutationFn: ({ question, pdfId }: { question: string; pdfId: string }) =>
      askQuestionApi(question, pdfId),
  });
};
