import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import About from "../components/About"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <About />
    <Footer />
  </Layout>
)

export default IndexPage
