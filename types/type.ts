export type postType = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,
    category: string
  }

export type commentType = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export type apiType = {
  id: number,
  title: string,
  content: string,
}

