import "@/styles/globals.css";
import "@/styles/Home.module.css";
import { Provider } from "react-redux";
import store from "../store";

import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: true,
            retry: false,
            refetchOnMount: true,
            refetchOnWindowFocus: false,
            staleTime: 0,
            cacheTime: 0,
          },
        },
      })
  );
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}
