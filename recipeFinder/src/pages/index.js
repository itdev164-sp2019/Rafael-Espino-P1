import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Card/>
    <Link id="page2" to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
