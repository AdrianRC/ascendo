<template>
  <main>
    <Intro :title="title" :subtitle="subtitle" :tags="tags" />
    <Companies :companies="companies" :title="companiesTitle" />
    <Contact :title="contactTitle" />
    <Footer />
  </main>
</template>

<script>
import { gql } from 'graphql-request'
import { toHead } from 'vue-datocms'
import client from '../utils/graphqlClient'

const query = gql`
  {
    homepage {
      seo: _seoMetaTags {
        content
        tag
        attributes
      }
      title
      subtitle
      companies {
        id
        title
        description(markdown: true)
        image {
          responsiveImage {
            alt
            aspectRatio
            base64
            bgColor
            height
            sizes
            src
            srcSet
            title
            webpSrcSet
            width
          }
        }
        tag
        links {
          text
          link
          id
        }
        dualLinkGroup {
          title1
          linkGroups1 {
            title
            links {
              text
              link
              id
            }
            id
          }
          id
          linkGroups2 {
            title
            links {
              text
              link
              id
            }
            id
          }
          title2
        }
      }
      companiesTitle
      contactTitle
    }
  }
`

export default {
  async asyncData() {
    const { homepage } = await client.request(query)
    let tags = []
    if (homepage.companies?.length) {
      tags = homepage.companies.map((company) => company.tag)
    }
    return { ...homepage, tags }
  },
  head() {
    return toHead(this.seo)
  },
}
</script>

<style lang="scss">
main {
  background-color: #fbfbfb;
}
</style>
