import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Post({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted By {post.frontmatter.author} on {post.frontmatter.date}
      </h4>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
