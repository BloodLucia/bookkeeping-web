type JSONValue = string | number | boolean | null | { [k: string | number]: JSONValue } | JSONValue[]

type Resource<T> = {
  data: T
}

type Resources<T> = {
  records: T[],
  pager: {
    page: number
    per_page: number
    count: number
  }
}

type Item = {
  kind: 'expenses' | 'income'
}

type Tag = {
  id: number
  kind: Item['kind']
  name: string
  sign: string
  user_id: number
  created_at: string
}