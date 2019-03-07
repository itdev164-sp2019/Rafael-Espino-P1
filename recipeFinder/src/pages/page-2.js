import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="coming soon" />
    <h1>More recipes coming soon</h1>
    
    <Link to="/">Main</Link>
  </Layout>
)

export default SecondPage
