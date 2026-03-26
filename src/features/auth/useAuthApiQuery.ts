import { useMutation } from "@tanstack/react-query";

import type { ErrorResponse, resendOtpResponse } from "./authTypes";
import type { AxiosError } from "axios";
import { resendOtpApi } from "./authApi";

export const useResendOtpMutation = () => {
  return useMutation<
    resendOtpResponse,
    AxiosError<ErrorResponse>,
    { email: string }
  >({
    mutationFn: ({ email }) => resendOtpApi(email),
  });
};
