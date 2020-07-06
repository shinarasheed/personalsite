import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

export const query = graphql`
  {
    HeroImage: file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const heroImage = data.HeroImage.childImageSharp.fluid

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Shina</h1>
            <h4>Freelance web and mobile, UI/UX Designer</h4>
            <Link className="btn" to="/contact">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={heroImage} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
