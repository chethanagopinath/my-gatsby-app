import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const SecondPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>Who am I?</h1>
    <About />
    <Link to="/">Back to my awesome hello page</Link>
  </Layout>
)

export default SecondPage
