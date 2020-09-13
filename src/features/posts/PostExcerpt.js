import React from 'react'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

let PostExcerpt = ({ post }) => (
  <article className="post-excerpt" key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content.substring(0, 100)}</p>
    <div>
      <PostAuthor userId={post.user} />
      <TimeAgo timestamp={post.date} />
    </div>
    <Link to={`/posts/${post.id}`} className="button muted-button">
      View Post
    </Link>
    &nbsp;
    <Link to={`/editPost/${post.id}`} className="button">
      Edit Post
    </Link>
    <ReactionButtons post={post} />
  </article>
)

PostExcerpt = React.memo(PostExcerpt)

export { PostExcerpt }
