import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
export default ({ data }) => {
  const {
    projects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Layout>
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={projects} title="featured projects" showLink />
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
  }
`
