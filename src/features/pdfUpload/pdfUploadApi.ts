import axios from "axios";
import type { pdfUploadResponse } from "./pdfUploadTypes";

export const pdfUploadApi = async (file: File): Promise<pdfUploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${import.meta.env.VITE_BACKEND}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  );
  return response.data;
};
