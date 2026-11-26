export type Creator = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
  niche: string;
  primaryAudience: string;
  audienceNote: string;
  socials: { label: string; audience?: string; href: string }[];
  topics: string[];
  brandFit: string;
  examples: { title: string; kind: string; href: string; note: string }[];
  experience: string;
  experienceLinks: { label: string; href: string }[];
  rates: { platform: string; format: string; price: string; detail?: string }[];
  rateNote: string;
};

/** Draft profiles. Review public rates, images, and IMPRIO's enquiry role with creators before launch. */
export const creators: Creator[] = [
  {
    slug: 'punit-chawla',
    name: 'Punit Chawla',
    tagline: 'Design tools, explained for people who make digital products.',
    summary: 'Punit is a UX/UI designer and educator sharing practical ideas about Figma, web design, creative AI, and design workflows. His content speaks to designers and people building better digital experiences.',
    image: '/creators/punit-chawla.jpg',
    niche: 'UX/UI · Design tools · Creative AI',
    primaryAudience: '179K YouTube subscribers',
    audienceNote: 'Public channel snapshot · 26 November 2026',
    socials: [
      { label: 'YouTube', audience: '179K subscribers', href: 'https://www.youtube.com/@PunitChawla' },
      { label: 'Instagram', audience: '55K followers', href: 'https://www.instagram.com/punitchawlaofficial/' },
      { label: 'LinkedIn', audience: '73K followers', href: 'https://www.linkedin.com/in/punitweb/' },
    ],
    topics: ['Figma and UI design', 'Web design workflows', 'Creative AI tools', 'Design careers'],
    brandFit: 'A strong fit for design software, plugins, no-code products, creative AI, and tools that help designers work or learn.',
    examples: [
      { title: 'LottieFiles and Figma workflow', kind: 'YouTube tutorial', href: 'https://www.youtube.com/watch?v=9ylE4aabEU4', note: 'A product shown in a practical design workflow.' },
      { title: 'Useful UX/UI tools', kind: 'YouTube video', href: 'https://www.youtube.com/watch?v=TUPmX7t-lME', note: 'An example of how he introduces tools to designers.' },
      { title: 'Webflow and AI', kind: 'YouTube Short', href: 'https://www.youtube.com/shorts/Q8jB7rljogs', note: 'A concise example of his short-form style.' },
    ],
    experience: 'Punit lists design and technology brands including ASUS, LottieFiles, Figma, Framer, Webflow, and UX Pilot AI on his public booking page. These links show selected work, not campaign performance claims.',
    experienceLinks: [
      { label: 'ASUS example', href: 'https://www.youtube.com/watch?v=uRIE6QRo7LI' },
      { label: 'LottieFiles example', href: 'https://www.youtube.com/watch?v=9ylE4aabEU4' },
      { label: 'UX Pilot AI example', href: 'https://www.linkedin.com/posts/punitweb_figma-uxpilot-design-ugcPost-7466350456806502400-RxlF/' },
    ],
    rates: [
      { platform: 'YouTube', format: 'Video integration', price: '$1,000', detail: '60–90 seconds inside a video' },
      { platform: 'YouTube', format: 'Short', price: '$600' },
      { platform: 'Instagram', format: 'Dedicated Reel', price: '$700' },
      { platform: 'Instagram', format: 'Story', price: '$250' },
      { platform: 'Instagram', format: 'Feed post', price: '$500' },
      { platform: 'LinkedIn', format: 'Sponsored post', price: '$800' },
      { platform: 'Article', format: 'Dedicated article', price: '$600' },
    ],
    rateNote: 'Displayed on Punit’s public Passionfroot page on 26 November 2026. Packages and custom scopes are also available there. Confirm current availability and final terms before booking.',
  },
  {
    slug: 'techvishal-vsb',
    name: 'TechVishal VSB',
    tagline: 'Everyday technology and smartphones, explained in Hindi.',
    summary: 'TechVishal creates videos about smartphones, device features, software updates, and useful apps. His hands-on approach gives consumer technology a clear place in content people watch to understand their devices.',
    image: '/creators/techvishal-vsb.jpg',
    niche: 'Smartphones · Android · Consumer tech',
    primaryAudience: '192K YouTube subscribers',
    audienceNote: 'Public channel snapshot · 26 November 2026',
    socials: [
      { label: 'YouTube', audience: '192K subscribers', href: 'https://www.youtube.com/@TechvishalVSB' },
      { label: 'Instagram', href: 'https://www.instagram.com/vishalvsbofficial/' },
      { label: 'Facebook', href: 'https://www.facebook.com/TechvishalVSB/' },
      { label: 'X', href: 'https://twitter.com/TechvishalVSB' },
    ],
    topics: ['Smartphone reviews', 'Phone features and updates', 'Android software', 'Consumer apps'],
    brandFit: 'Relevant to phones, accessories, Android software, useful consumer apps, and products that benefit from a hands-on demonstration in Hindi.',
    examples: [
      { title: 'Vivo software update', kind: 'YouTube video', href: 'https://www.youtube.com/watch?v=WDp2KNzhLuE', note: 'A walkthrough of a phone software update.' },
      { title: 'Samsung phone review', kind: 'YouTube video', href: 'https://www.youtube.com/watch?v=xziK1evqVRo', note: 'Device-focused coverage and practical context.' },
      { title: 'Mivi product Short', kind: 'YouTube Short', href: 'https://www.youtube.com/shorts/NAFp8oZ6r7U', note: 'A short-form example in the consumer tech category.' },
    ],
    experience: 'A DomoAI video includes a product link and creator code. This is a visible example of product promotion; the commercial arrangement and results have not been verified.',
    experienceLinks: [{ label: 'View DomoAI video', href: 'https://www.youtube.com/watch?v=w_Y_z8KrHb4' }],
    rates: [
      { platform: 'YouTube', format: 'Dedicated video', price: '₹25,000' },
      { platform: 'Short form', format: 'Shorts / Reel', price: '₹15,000' },
      { platform: 'Usage', format: 'Content usage for 30 days', price: '₹10,000' },
    ],
    rateNote: 'Rates supplied in a creator message. Platform scope for “Shorts / Reel” and whether usage is additional to the content fee require confirmation in a final quote.',
  },
  {
    slug: 'coding-with-sagar',
    name: 'Coding With Sagar',
    tagline: 'Coding, AI, and career skills taught through practical lessons.',
    summary: 'Sagar Chouksey creates Hindi-language tutorials and guidance around programming, data science, AI, developer tools, and career preparation. His long lessons and shorter explainers reach people learning to build with technology.',
    image: '/creators/coding-with-sagar.jpg',
    niche: 'Coding · AI/ML · Developer education',
    primaryAudience: '517K YouTube subscribers',
    audienceNote: 'Public channel snapshot · 26 November 2026',
    socials: [
      { label: 'YouTube', audience: '517K subscribers', href: 'https://www.youtube.com/@codingwithsagarcw' },
      { label: 'Instagram', audience: '262K followers', href: 'https://www.instagram.com/codingwithsagar/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sagarchouksey4840/' },
      { label: 'Telegram', href: 'https://telegram.me/sagar4840' },
    ],
    topics: ['Coding and software development', 'AI and machine learning', 'Developer tools', 'Career preparation'],
    brandFit: 'Relevant to developer tools, AI products, cloud and hosting, coding education, career tools, and technology that can be demonstrated in a lesson.',
    examples: [
      { title: 'MCP course in Hindi', kind: 'YouTube course', href: 'https://www.youtube.com/watch?v=9hyf4XF25-M', note: 'A deep-dive teaching format.' },
      { title: 'Data analyst roadmap', kind: 'YouTube video', href: 'https://www.youtube.com/watch?v=C70y6FSDb8A', note: 'Career-focused educational content.' },
      { title: 'Python interview tip', kind: 'YouTube Short', href: 'https://www.youtube.com/shorts/6X2rdUi-KSw', note: 'A concise short-form example.' },
    ],
    experience: 'Sagar names NVIDIA, Replit, Hostinger, and Dell in his public channel bio. The NVIDIA example explicitly discloses sponsorship; the Replit and Hostinger videos show product promotion. No campaign outcomes are claimed here.',
    experienceLinks: [
      { label: 'NVIDIA sponsored video', href: 'https://www.youtube.com/watch?v=S3kXgFUGy4w' },
      { label: 'Replit example', href: 'https://www.youtube.com/watch?v=aSQgHDntoig' },
      { label: 'Hostinger example', href: 'https://www.youtube.com/watch?v=vELHrws1JrY' },
    ],
    rates: [
      { platform: 'YouTube', format: 'Dedicated video', price: '₹3,50,000' },
      { platform: 'YouTube', format: 'Integrated video', price: '₹1,75,000' },
      { platform: 'YouTube', format: 'Short', price: '₹1,20,000' },
      { platform: 'Instagram', format: 'Reel', price: '₹1,00,000' },
      { platform: 'Instagram', format: 'Carousel / static post', price: '₹70,000' },
    ],
    rateNote: 'Rates supplied in a creator message. Final deliverables, usage, timing, and other commercial terms should be confirmed against the brief.',
  },
];

export function getCreator(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}
