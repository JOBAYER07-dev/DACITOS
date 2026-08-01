export type Project = {
  slug: string;
  name: string;
  client: string;
  cat: string;
  desc: string;
  challenge: string;
  solution: string;
  stack: string[];
  days: string;
  devs: string;
};

export const projects: Project[] = [
  {
    slug: 'sion-semiconductors',
    name: 'Sion Semiconductors',
    client: 'Sion Semiconductors',
    cat: 'Web Development',
    desc: 'Corporate platform showcasing expertise in AI, IoT, and semiconductor design.',
    challenge:
      'Sion needed a technical audience — engineers and procurement teams — to understand a deep product catalog quickly, without the site feeling like a wall of spec sheets.',
    solution:
      'We built a structured content system with clear product categories, technical documentation sections, and a design language that felt credible to an engineering audience while staying visually modern.',
    stack: ['Angular', 'Node.js', 'MongoDB'],
    days: '34 days',
    devs: '05 developers',
  },
  {
    slug: 'acmegrade',
    name: 'Acmegrade',
    client: 'Acmegrade',
    cat: 'Web Development',
    desc: 'Modern education and skill-development platform built for scale.',
    challenge:
      'Acmegrade needed to onboard cohorts of students quickly, with course discovery, enrollment, and progress tracking that could scale without breaking under load.',
    solution:
      'We designed a Next.js platform with server-rendered course pages for SEO, a fast enrollment flow, and an Express/Node.js backend built to handle concurrent cohort sign-ups reliably.',
    stack: ['Next.js', 'Node.js', 'Express.js'],
    days: '30 days',
    devs: '03 developers',
  },
  {
    slug: 'infinitix-technologies',
    name: 'Infinitix Technologies',
    client: 'Infinitix Technologies',
    cat: 'Web Development',
    desc: 'Digital experience platform for an IT, cloud, and GIS solutions provider.',
    challenge:
      'Infinitix offers a wide range of services across IT, cloud, and GIS — the existing site buried this breadth behind generic navigation, making it hard for prospects to find what they needed.',
    solution:
      'We restructured the information architecture around clear service pillars, added case-study style project pages, and rebuilt the frontend in Next.js for faster load times.',
    stack: ['Next.js', 'Node.js', 'Express.js'],
    days: '14 days',
    devs: '07 developers',
  },
  {
    slug: 'clouddbtech',
    name: 'CloudDBTech',
    client: 'CloudDBTech',
    cat: 'Cloud Solutions',
    desc: 'Enterprise site for a cloud consulting and data platform company.',
    challenge:
      'CloudDBTech needed an enterprise-credible web presence that could speak to both technical evaluators and business decision-makers evaluating a cloud data platform.',
    solution:
      'We built a two-track content structure — technical deep-dives for engineers, and outcome-focused messaging for decision-makers — on a fast, MongoDB-backed Angular frontend.',
    stack: ['Angular', 'Node.js', 'MongoDB'],
    days: '20 days',
    devs: '03 developers',
  },
];

export function getProject(slug: string) {
  return projects.find(p => p.slug === slug);
}
