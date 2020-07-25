import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { graphql } from "gatsby"

const Posts = ({ data }) => {
  return (
    <Layout>
      <h1>All Blog posts</h1>

      <ul>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.id}>
            <Link to={post.node.frontmatter.path}>
              {post.node.frontmatter.title} | By -{" "}
              {post.node.frontmatter.author} | On {post.node.frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            author
            path
            title
          }
          excerpt
        }
      }
    }
  }
`

export default Posts
