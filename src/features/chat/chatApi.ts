import axios from "axios";
import type {
  ActiveChatResponse,
  AskQuestionResponse,
  sideBarChatResponse,
} from "./chatTypes";

export const fetchSideBarHistory = async (): Promise<sideBarChatResponse> => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND}/getAllChatHistory`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return response.data;
};

export const fetchChatHistory = async (
  pdfId: string | undefined,
): Promise<ActiveChatResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND}/getChatMessages/${pdfId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return response.data;
};

export const askQuestionApi = async (
  question: string,
  pdfId: string,
): Promise<AskQuestionResponse> => {
  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND}/ask`,
    {
      fileId: pdfId,
      question: question,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return response.data;
};
