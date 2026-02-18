export interface ResponsiveImage {
	alt: string | null;
	aspectRatio: number;
	base64: string;
	bgColor: string;
	height: number;
	sizes: string;
	src: string;
	srcSet: string;
	title: string | null;
	webpSrcSet: string;
	width: number;
}

export interface CmsLink {
	id: string;
	text: string;
	link: string;
}

export interface LinkGroup {
	id: string;
	title: string;
	links: CmsLink[];
}

export interface DualLinkGroup {
	id: string;
	title1: string;
	linkGroups1: LinkGroup[];
	title2: string;
	linkGroups2: LinkGroup[];
}

export interface Company {
	id: string;
	title: string;
	description: string;
	tag: string;
	image: { responsiveImage: ResponsiveImage };
	links: CmsLink[];
	dualLinkGroup: DualLinkGroup | null;
}

export interface SeoTag {
	tag: string;
	content: string | null;
	attributes: Record<string, string> | null;
}

export interface Homepage {
	seo: SeoTag[];
	title: string;
	subtitle: string;
	companies: Company[];
	companiesTitle: string;
	contactTitle: string;
}
