type Props = {
  comment: {
    content: string
  }
}
export function Comment({ comment }: Props): JSX.Element {
  return (
    <article>
      <p>{comment.content}</p>
    </article>
  )
}
