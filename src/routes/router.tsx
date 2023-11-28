import { Outlet, createHashRouter } from 'react-router-dom'
import { SignInPage } from '../pages/SignInPage'
import { ajax } from '../utils/ajax'
import { ErrorPage } from '../pages/ErrorPage'
import { ErrorUnauthorized } from '../errors'
import { TagsNewPage } from '../pages/TagsNewPage'

export const router = createHashRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    loader: async () => {
      return await ajax.get('/ping').catch((e) => {
        if (e.response?.status === 401) throw new ErrorUnauthorized()
        throw e
      })
    },
    children: [
      { path: '/tags/new', element: <TagsNewPage /> }
    ]
  },
  { path: '/sign_in', element: <SignInPage /> },
])
