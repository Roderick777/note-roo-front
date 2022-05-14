export interface INote {
  id: number
  name: string
  description: string
  status: any
  tags: Array<any>
  createdAt?: string
  updatedAt?: string
}
