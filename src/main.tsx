import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import "./i18n/i18n";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from "./contexts/UserContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
