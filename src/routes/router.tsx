import { createHashRouter } from 'react-router-dom'
import { SignInPage } from '../pages/SignInPage'

export const router = createHashRouter([
    {
        path: '/',
        element: <div>HelloWorld</div>
    },
    { path: '/sign_in', element: <SignInPage /> }
])