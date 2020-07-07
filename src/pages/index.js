import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {
    projects: { nodes: projects },
  } = data

  const {
    blogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Layout>
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={projects} title="featured projects" showLink />
        <Blogs blogs={blogs} title="blog" showLink />
      </Layout>
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        featured
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }

    blogs: allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        title
        slug
        content
        description
        date(formatString: "MMMM Do, YYYY")
        id
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
