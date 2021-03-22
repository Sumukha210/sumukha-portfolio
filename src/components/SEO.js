import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const { site } = useStaticQuery(query)
  const {
    description,
    image,
    title,
    titleTemplate,
    twitterUsername,
    url,
  } = site.siteMetadata

  return (
    <Helmet title={title} titleTemplate={titleTemplate}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="article" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}
export default SEO
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        description
        image
        title
        titleTemplate
        twitterUsername
        url
      }
    }
  }
`
