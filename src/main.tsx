import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { Toaster } from "react-hot-toast";

const queryclient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryclient}>
                <Provider store={store}>
                    <App />
                    <Toaster />
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
);
