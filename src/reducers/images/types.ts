export type Image = {
  id: string
  url: string
  likes: number
  tags: string[]
}

export interface ImagesState {
  list: Image[]
}