import { create } from "zustand"
import { FormError } from "../utils/validator"

type Data = Tag

interface NewTagState {
  data: Partial<Data>
  error: FormError<Data>
  setData: (data: Partial<Data>) => void
  setError: (error: Partial<FormError<Data>>) => void
}

export const useNewTagStore = create<NewTagState>((set) => ({
  data: {
    kind: 'expenses',
    sign: '',
    name: ''
  },
  error: {
    kind: [],
    sign: [],
    name: []
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
}))