import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomePage } from './pages/home/index.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MovieDetailsPage from './pages/movie_details/index.tsx'
import { MantineProvider, MantineThemeOverride } from '@mantine/core'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60
    }
  }
})

const theme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    purple: ["#F2EAFF", "#E0CFFF", "#BD9CFF", "#8C52FF", "#7937FE", "#6519FE", "#5C09FF", "#4C00E4", "#4300CC", "#3700B4"],
  },
  primaryColor: 'purple',
  primaryShade: 7
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
)
