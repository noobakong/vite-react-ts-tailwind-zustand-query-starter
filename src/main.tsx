import { queryClient } from '@/query'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
// type from vite-plugin-pages/client-react
import routes from '~react-pages'
import './index.css'

export function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
)
