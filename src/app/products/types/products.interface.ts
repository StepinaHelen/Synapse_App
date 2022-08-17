export interface ProductReviewI {
  created_at: string
  created_by: OwnerReviewI
  id?: number
  product?: number
  rate?: number
  text?: string
}

export interface OwnerReviewI {
  id?: number
  username: string
  first_name?: string
  last_name?: string
  email?: string
}

export interface ProductI {
  id: string
  img: string
  text: string
  title: string
}

