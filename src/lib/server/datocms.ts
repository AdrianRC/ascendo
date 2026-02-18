import { GraphQLClient, gql } from 'graphql-request';
import { env } from '$env/dynamic/private';
import type { Homepage } from '$lib/types.js';

function getClient() {
	return new GraphQLClient('https://graphql.datocms.com/', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${env.DATO_API_KEY}`
		}
	});
}

const HOMEPAGE_QUERY = gql`
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
`;

export async function fetchHomepage(): Promise<Homepage> {
	const client = getClient();
	const { homepage } = await client.request<{ homepage: Homepage }>(HOMEPAGE_QUERY);
	return homepage;
}
