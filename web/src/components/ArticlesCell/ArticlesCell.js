import { Link, routes } from '@redwoodjs/router'
import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
    posts {
      id
      title
      updatedAt
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts: articles }) => {
  return (
    <>
      {articles.map((article) => {
        return <Article key={article.id} article={article} />
      })}
    </>
  )
}
