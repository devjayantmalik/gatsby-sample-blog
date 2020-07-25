# Gatsby Experience

Gatsby is a framework based on **react** to build Server side apps, that supports data fetching operations, graphql support, filesystem access and a lot more features.

## Installation

Gatsby has its own cli to generate gatsby projects. To install the cli tool, the requirements are:

- Nodejs
- NPM or Yarn

And installing nodejs and yarn, run the following command:

```sh
yarn global add gatsby-cli
```

or via npm

```sh
npm install -g gatsby-cli
```

## Files and Folder Skeleton

| File or Folder    | Description                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| .cache/           | Cache generated during development of gatsby site                                                            |
| node_modules/     | Folder to hold all node packages required as dependency via npm or yarn                                      |
| public/           | Directory to hold your static generated site by running `yarn build`                                         |
| src/              | Directory to hold your site source code, such as React components, redux logic and all that react cool stuff |
| gatsby-browser.js | Gatsby browser configuration file                                                                            |
| gatsby-config.js  | Main config file for gatsby site, such as title of website, plugins etc.                                     |
| gatsby-node.js    | Gatsby nodejs configuration file                                                                             |
| gatsby-ssr.js     | Gatsby configuration related to server side rendering.                                                       |
| .gitignore        | File to list files or folder that should not be included in git version control                              |
| .prettierignore   | Prettier file formatter plugin file                                                                          |
| .prettierrc       | Prettier file formatter plugin file                                                                          |
| LICENCE           | Gatsby site licence, such as MIT, Apache etc.                                                                |
| package.json      | Keeps track of yarn or npm package dependencies for your project                                             |
| README.md         | Readme file for your project. You can record info about project here                                         |
| yarn.lock         | Yarn packager manager file to keep track of exact version of dependencies.                                   |

## Components

Components in Gatsby are same as React components. Here is the sample code:

```jsx
// Import Required packages
import React from "react"

// Create a component
const Header = ({ title }) => <header>{title}</header>

// Export a component.
export default Header
```

## Pages

Pages in Gatsby are also React Components. Here is the sample code.

```jsx
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
```

## Running Development Server

In short run the following command to start the development server or read the complete text to understand the commands:

```sh
yarn start
```

Our package.json has the following scripts in it:

```json
"scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  }
```

The scripts indicates the following:

| Script  | Description                                                                        |
| ------- | ---------------------------------------------------------------------------------- |
| build   | Generates a deployable static site                                                 |
| develop | Starts the development server at http://localhost:8000                             |
| format  | Runs prettier to format your source code in your project for consistent code style |
| start   | Starts the development server at http://localhost:8000                             |
| serve   | Runs the site in production                                                        |
| clean   | Cleans the .cache and public directories                                           |
| test    | Runs your tests suites or test cases on the project files                          |

The above key of _scripts_ object indicates the command.
``sh
yarn scripts_key_here

````

So to start the development server the key is `develop` so command would be:
```sh
yarn develop
````

## Live Reloading

Gatsby supports live reloading in the development mode. It means if your change content of any file then it will reflect automatically in the web browser.

Example:

Edit your `pages/index.js` file to the following content:

```js
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my site</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
```

And refresh the browser, you will see that we didn't build the entire site again. It was easy to make a change and it reflected in our web browser.

## Adding new webpages

To add a webpage follow the steps:

1. Create a React Component File in `src/pages` directory.
2. Create a Functional or class based component inside the file.
3. Open your web browser and navigate to the `localhost:8000/component_name` url.

And you finally added a new page to your site.

Example, would be to create a about page.

1. Create a file `src/pages/about.js`.
2. Write the component code

```js
import React from "react"

const About = () => <h1>About</h1>

export default About
```

3. Open the url in the browser `http://localhost:8000/about`.

And we created an about page for our site.

> Note that `src/pages/filename.js` are not case sensitive, which means, `about.js` and `About.js` will result in the same url `/about`

## What about components ?

Components are created in the `src/components` directory, same as we just created the about page.

The steps to create components are:

1. Create a React Component file in `src/components` folder.
2. Create a React functional or class based component.
3. Use the component in your pages.

Example would be to create a menu component that displays list of links for navigation.

1. Create a file `src/components/menu.js`
2. Write the code for the react component.

```js
import React from "react"
import { Link } from "gatsby"

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
```

3. Use the _menu_ component in your pages. So, edit the about.js file to the following content.

```js
import React from "react"
import Menu from "../components/menu"

const About = () => (
  <div>
    <Menu />
    <h1>About</h1>
  </div>
)

export default About
```

## Can i use typescript for creating pages or components?

Yes sure you can use typescript. Gatsby supports typescript. As an example you will find the `src/pages/using-typescript.tsx` file, with the following contents in it:

```tsx
// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.org/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
```

The typescript file has the graphql code integrated in it. we will discuss it later.
And the typescript files works with gatsby.

## Share components on multiple pages.

A better way to share same components on all pages, such as header, footer etc. would be:

1. Create a `src/pages/layout.js` file
2. Wrap required pages with `layout.js` component.

Create a `layout.js` react component that acts as a wrapper around all your pages, and inside the **layout.js** write the following code.

```jsx
import React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  )
}

export default Layout
```

Next step, would be use this layout, on the about page.

```js
import React from "react"
import Layout from "../components/Layout"

const About = () => {
  return (
    <Layout>
      <h1>Hello, from about!</h1>
    </Layout>
  )
}

export default About
```

## Implementing a blog using Gatsby

Let's follow the below steps to get started at the minimum level:

1. Create a directory and a file at `src/pages/2020-01-22-post-one/index.md`.
2. Write some content in the `index.md` file to display as our post.

```md
---
path: "/post-one"
date: "2020-01-22"
title: "Sample Post"
author: "Jayant Malik"
---

# Index.md File

This is the post content. We are keeping it simple, because we want to learn gatsby, and more important we want to share it on every page we will create for our blog. So, let's get started by following the gatsby guide. Thanks and now we will copy and paste the current text saveral times, so we have few paragraphs.

This is the post content. We are keeping it simple, because we want to learn gatsby, and more important we want to share it on every page we will create for our blog. So, let's get started by following the gatsby guide. Thanks and now we will copy and paste the current text saveral times, so we have few paragraphs.

This is the post content. We are keeping it simple, because we want to learn gatsby, and more important we want to share it on every page we will create for our blog. So, let's get started by following the gatsby guide. Thanks and now we will copy and paste the current text saveral times, so we have few paragraphs.
```

### Front matter

On the top of the markdown content you should have noticed the front matter inside `---` syntax. This content helps the Gatsby to gain information about your post, such as :

- Author of post
- Date published
- title
- URL of the post
- Description about your post
- And a lot more, you can put in it.

The front matter content in the above markdown file is:

```yaml
---
path: "/post-one"
date: "2020-01-22"
title: "Sample Post"
author: "Jayant Malik"
---

```

### Installing Dependencies

The steps we followed till now and our next plan is:

1. We added markdown content files to serve as our blog posts.
2. Read markdown files from filesystem.
3. Transform markdown files to html.
4. Display Transformed HTML on the webpage

To proceed with our plan, we need to install the following dependencies.

```sh
yarn add gatsby-source-filesystem gatsby-transformer-remark gatsby-plugin-catch-links
```

Let's talk a bit about dependencies we just installed.

| Dependency                | Description                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| gatsby-source-filesystem  | Allows us to read filesystem data                                                                                           |
| gatsby-transformer-remark | Converts markdown to HTML                                                                                                   |
| gatsby-plugin-catch-links | Intercept links from markdown content and loads them in user memory to prevent from browser refresh, when user clicks them. |

### Configuring Gatsby to use the plugins we just installed.

To configure the plugins in gatsby we will use `gatsby-config.js` file in root of your project.

The config will look as follows:

```js
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/`,
        name: "pages",
      },
    },
    "gatsby-transformer-remark",
  ],
}
```

## Using Graphql to get list of blog posts with excerpts

1. Navigate to `http://localhost:8000/___graphql`
2. Execute the following graphql query to fetch blog post data

```graphql
{
  allMarkdownRemark {
    edges {
      node {
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
```

You will see the data, we will use this in our post page.

### Creating Pages

Let's create a blog post list webpage to list our posts.

1. Create a file `src/pages/posts.js`, with the following content.

```js
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
```

The above file queries the posts and displays them in li components.

### Creating template to display our post.

Create a file in `src/templates/post.js`. Make sure to create templates directory in source folder, because it is not created for us.

Now, inside the post.js paste the following contents:

```js
import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h4>
        Posted By {post.frontmatter.author} on {post.frontmatter.date}
      </h4>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
```

### Configuring Post Routes to map to template

Edit the `gatsby-node.js` file in your project root.

```js
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/templates/post.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
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
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
```

And now your blog is working.
