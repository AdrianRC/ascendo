<template>
  <section class="companies">
    <h2>{{ title }}</h2>
    <div
      v-for="(company, index) in companies"
      :key="company.id"
      :id="company.tag"
      class="company"
      :class="index % 2 === 0 ? 'image-left' : 'image-right'"
    >
      <datocms-image
        :data="company.image.responsiveImage"
        class="company-image"
      />
      <div class="description">
        <h3>{{ company.title }}</h3>
        <div v-html="company.description" class="container" />
        <div v-if="company.dualLinkGroup" class="dual-links">
          <div class="dual-link">
            <h4>{{ company.dualLinkGroup.title1 }}</h4>
            <template v-for="group in company.dualLinkGroup.linkGroups1">
              <h5 :key="group.id">{{ group.title }}</h5>
              <div class="links" :key="group.id">
                <Link
                  v-for="link in group.links"
                  :key="link.id"
                  :text="link.text"
                  :href="link.link"
                  class="link-wrapper"
                />
              </div>
            </template>
          </div>
          <div class="dual-link">
            <h4>{{ company.dualLinkGroup.title2 }}</h4>
            <template v-for="group in company.dualLinkGroup.linkGroups2">
              <h5 :key="group.id">{{ group.title }}</h5>
              <div class="links" :key="group.id">
                <Link
                  :text="link.text"
                  :href="link.link"
                  class="link-wrapper"
                  v-for="link in group.links"
                  :key="link.id"
                />
              </div>
            </template>
          </div>
        </div>
        <div class="links" v-else>
          <Link
            v-for="link in company.links"
            :key="link.id"
            :text="link.text"
            :href="link.link"
            class="link-wrapper"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Image } from 'vue-datocms'

export default {
  components: {
    'datocms-image': Image,
  },
  props: {
    companies: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.companies {
  margin-top: vwS(15);
  padding: vwS(20) vwS(20) vwS(40);

  h2 {
    font-weight: 500;
    font-size: vwS(18);
    line-height: vwS(20);
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #141212;
  }

  .company {
    display: grid;
    grid-template-columns: 100%;

    .company-image {
      width: 100%;
      object-fit: cover;
    }

    .description {
      width: 100%;
      margin-top: vwS(20);

      h3 {
        font-weight: 500;
        font-size: vwS(28);
        line-height: vwS(32);
        letter-spacing: 0.02em;
      }

      .container {
        margin-top: vwS(15);
      }

      p {
        font-size: vwS(18);
        line-height: vwS(22);
        letter-spacing: 0.02em;

        small {
          font-size: vwS(14);
          line-height: vwS(16);
        }
      }

      p + p {
        margin-top: vwS(15);
      }

      .links {
        margin-top: vwS(20);

        .link-wrapper + .link-wrapper {
          margin-top: vwS(12);
        }
      }

      .dual-links {
        margin-top: vwS(30);

        h4,
        h5 {
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        h4 {
          font-size: vwS(20);
          line-height: vwS(24);
        }

        .links {
          margin-top: vwS(15);
        }

        h5 {
          margin-top: vwS(20);
          font-size: vwS(16);
          line-height: vwS(18);
        }

        .dual-link + .dual-link {
          margin-top: vwS(30);
        }
      }
    }

    &.image-left {
      .company-image {
        order: 1;
      }

      .description {
        order: 2;
      }
    }

    &.image-right {
      .company-image {
        order: 1;
      }

      .description {
        order: 1;
      }
    }
  }

  .company:first-of-type {
    margin-top: vwS(30);
  }

  .company + .company {
    margin-top: vwS(50);
  }

  @include above(small) {
    margin-top: vw(126);
    padding: vw(40) vw(40) vw(150);

    h2 {
      font-size: vw(24);
      line-height: vw(26);
    }

    .company {
      grid-template-columns: 1fr 1fr;
      align-items: center;

      .company-image {
        min-height: 100%;
        height: vw(650);
      }

      .description {
        max-width: vw(600);
        margin-top: 0;

        h3 {
          font-size: vw(64);
          line-height: vw(70);
        }

        .container {
          margin-top: vw(60);
        }

        p {
          font-size: vw(24);
          line-height: vw(27);

          small {
            font-size: vw(16);
            line-height: vw(18);
          }
        }

        p + p {
          margin-top: vw(20);
        }

        .links {
          margin-top: vw(40);

          .link-wrapper + .link-wrapper {
            margin-top: vw(15);
          }
        }

        .dual-links {
          margin-top: vw(60);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-direction: row;

          h4 {
            font-size: vw(24);
            line-height: vw(27);
          }

          .links {
            margin-top: vw(25);
          }

          h5 {
            margin-top: vw(30);
            font-size: vw(22);
            line-height: vw(24);
            width: min-content;
          }

          .dual-link + .dual-link {
            margin-top: 0;
          }
        }
      }

      &.image-left {
        .company-image {
          order: 1;
        }

        .description {
          order: 2;
          padding-left: vw(135);
        }
      }

      &.image-right {
        .company-image {
          order: 2;
        }

        .description {
          order: 1;
          padding-right: vw(135);
        }
      }
    }

    .company:first-of-type {
      margin-top: vw(50);
    }

    .company + .company {
      margin-top: vw(150);
    }
  }
}
</style>
