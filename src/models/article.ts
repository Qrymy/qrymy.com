export type Article = {
  readonly slug: string
  readonly date: number
  readonly title: string
  readonly content: string
  readonly description: string | null
  readonly shouldNotListed: boolean
}
