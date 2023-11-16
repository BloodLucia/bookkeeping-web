import { create } from 'zustand'
import { FormError } from "../utils/validator"

type Data = {
  email: string
  code: string
}

interface SignIn {
  data: Data
  error: FormError<Data>
  setData: (data: Partial<Data>) => void
  setError: (error: Partial<FormError<Data>>) => void
}
export const useSignInStore = create<SignIn>((set, get) => (
  {
    data: {
      // TODO: 删掉这个邮箱地址
      email: 'thecvcoder@foxmail.com',
      code: '123456'
    },
    error: {
      email: [],
      code: []
    },
    setData: (data: Partial<Data>) => {
      set(state => ({
        ...state,
        data: {
          ...state.data,
          ...data
        }
      }))
    },
    setError: (error: Partial<FormError<Data>>) => {
      set(state => ({
        ...state,
        error: {
          ...error
        }
      }))
    }
  }
))