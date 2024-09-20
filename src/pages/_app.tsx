import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import theme from "../theme/themeConfig";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ConfigProvider theme={theme}>
          <Component {...pageProps} />
        </ConfigProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
