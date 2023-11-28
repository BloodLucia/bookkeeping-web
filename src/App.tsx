import vhCheck from "vh-check"
import styled from 'styled-components'
import { useLoadingStore } from "./stores/useLoadingStore"
import { usePopup } from "./hooks/usePopup"
import { Icon } from "./components/Icon"
import { useEffect } from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"

import 'virtual:uno.css'

import 'virtual:svgsprites'

import './app.scss'
import './global.scss'

vhCheck()

const Spin = styled(Icon)`
  animation: spin 1s linear infinite;
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`
export const App:React.FC = () => {
  const { visible } = useLoadingStore()
  const { popup, hide, show } = usePopup({
    children: <div p-16px>
      <Spin className="w-32px h-32px" name="loading" />
    </div>,
    position: 'center'
  })
  useEffect(() => {
    visible ? show() : hide()
  }, [visible])
  
  return (
    <>
      <RouterProvider router={router} />
      {popup}
    </>
  )
}