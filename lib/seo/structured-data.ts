import { Metadata } from 'next'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Reachzy',
    url: 'https://reachzy.space',
    logo: 'https://reachzy.space/icon-light-32x32.png',
    sameAs: [
      'https://www.linkedin.com/company/reachzy/',
      'https://twitter.com/reachzy',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'partnerships@reachzy.space',
      availableLanguage: ['English', 'Hindi'],
    },
    description: 'Reachzy is an influencer marketing agency. We connect brands with relevant creators and run campaigns from brief to delivery.',
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reachzy',
    url: 'https://reachzy.space',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://reachzy.space/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Reachzy',
      url: 'https://reachzy.space',
    },
  }
}

export function generatePersonSchema(name: string, description: string, url: string, image: string, sameAs: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    description,
    url,
    image,
    sameAs,
    worksFor: {
      '@type': 'Organization',
      name: 'Reachzy',
      url: 'https://reachzy.space',
    },
  }
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  authorName: string,
  authorUrl: string,
  datePublished: string,
  dateModified: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Reachzy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reachzy.space/icon-light-32x32.png',
      },
    },
    datePublished,
    dateModified,
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateItemListSchema(items: { name: string; url: string; position: number }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      url: item.url,
      name: item.name,
    })),
  }
}

export function jsonLdScript(schema: object) {
  return {
    __html: JSON.stringify(schema),
  }
}