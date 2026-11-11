import { RouterProvider } from "react-router/dom";
import { appRouter } from "./router/app.router";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'


// Create a client

const queryClient = new QueryClient()

const HeroesApp = () => {
  return (
    // Provide the client to your App

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default HeroesApp
