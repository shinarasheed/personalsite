import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Services"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="this is our home page" />
      <Layout>
        <Hero />
        <Services />
      </Layout>
    </Layout>
  )
}
