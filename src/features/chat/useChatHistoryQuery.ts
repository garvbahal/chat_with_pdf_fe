import { useMutation, useQuery } from "@tanstack/react-query";
import {
  askQuestionApi,
  fetchChatHistory,
  fetchSideBarHistory,
} from "./chatApi";
import { type AskQuestionResponse } from "./chatTypes";
import { AxiosError } from "axios";
import type { ErrorResponse } from "../auth/authTypes";

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
  return useMutation<
    AskQuestionResponse,
    AxiosError<ErrorResponse>,
    { question: string; pdfId: string }
  >({
    mutationFn: ({ question, pdfId }) => askQuestionApi(question, pdfId),
  });
};
