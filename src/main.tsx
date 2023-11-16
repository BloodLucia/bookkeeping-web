import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.tsx'

// unocss
import 'virtual:uno.css'

// custom vite plugin
import 'virtual:svgsprites'

// styles
import './app.scss'

const div = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(div)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
export { div as rootDiv }