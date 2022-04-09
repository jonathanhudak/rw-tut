import { Link, routes } from '@redwoodjs/router'
const Article = ({ article }) => {
  return (
    <div>
      <h2>
        <Link to={routes.article({ id: article.id })}>{article.title}</Link>
      </h2>
      <div>{article.body}</div>
      <div>Updated {article.updatedAt}</div>
    </div>
  )
}

export default Article
