export type Category =
  | 'leadership'
  | 'tech'
  | 'design'
  | 'events'
  | 'community'
  | 'content'

export type Member = {
  id: string
  name: string
  role: string
  squad: string
  categories: Category[]
  tags: string[]
  personality: string
  bio: string
  contribution: number
  hue: number
  socials: {
    github?: string
    linkedin?: string
    instagram?: string
  }
}

export const members: Member[] = [
  {
    id: 'aarav-mehta',
    name: 'Aarav Mehta',
    role: 'Tech Lead',
    squad: 'Engineering',
    categories: ['leadership', 'tech'],
    tags: ['React', 'TypeScript', 'Open Source'],
    personality: 'Ships on Fridays',
    bio: 'Aarav keeps the engineering squad moving. He loves untangling gnarly problems, mentoring first-time contributors, and turning half-baked ideas into things that actually run in production.',
    contribution: 940,
    hue: 156,
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 'maya-sharma',
    name: 'Maya Sharma',
    role: 'Design Lead',
    squad: 'Design',
    categories: ['leadership', 'design'],
    tags: ['UI/UX', 'Systems', 'Prototyping'],
    personality: 'Pixel whisperer',
    bio: 'Maya makes the things people actually want to use. She obsesses over the small details, builds the design system everyone leans on, and believes good taste is a team sport.',
    contribution: 880,
    hue: 25,
    socials: { instagram: '#', linkedin: '#' },
  },
  {
    id: 'rohan-kapoor',
    name: 'Rohan Kapoor',
    role: 'Events Lead',
    squad: 'Events',
    categories: ['leadership', 'events'],
    tags: ['Logistics', 'Public Speaking', 'Community'],
    personality: 'Never misses a deadline',
    bio: 'Rohan turns empty rooms into nights people talk about for weeks. From welcome nights to demo days, he handles the chaos so everyone else gets to enjoy the moment.',
    contribution: 760,
    hue: 265,
    socials: { instagram: '#', linkedin: '#' },
  },
  {
    id: 'ananya-rao',
    name: 'Ananya Rao',
    role: 'Community Lead',
    squad: 'Community',
    categories: ['leadership', 'community'],
    tags: ['Community', 'Mentoring', 'Onboarding'],
    personality: 'Knows everyone by name',
    bio: 'Ananya is the reason the collective feels like home. She welcomes new members, keeps conversations alive, and makes sure no good idea gets lost in the noise.',
    contribution: 820,
    hue: 200,
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    id: 'kabir-singh',
    name: 'Kabir Singh',
    role: 'Frontend Engineer',
    squad: 'Engineering',
    categories: ['tech'],
    tags: ['React', 'Animation', 'Accessibility'],
    personality: 'Lives for micro-interactions',
    bio: 'Kabir sweats the details in the browser. He cares about the frame after the click as much as the feature itself, and he will happily debate easing curves for an hour.',
    contribution: 610,
    hue: 156,
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 'ishita-patel',
    name: 'Ishita Patel',
    role: 'Content Lead',
    squad: 'Content',
    categories: ['content', 'community'],
    tags: ['Writing', 'Storytelling', 'Social'],
    personality: 'Turns bugs into stories',
    bio: 'Ishita tells the stories behind what the collective builds. She writes the recaps, runs the socials, and makes sure the work reaches the people who would love it.',
    contribution: 690,
    hue: 320,
    socials: { instagram: '#', linkedin: '#' },
  },
  {
    id: 'dev-nair',
    name: 'Dev Nair',
    role: 'Backend Engineer',
    squad: 'Engineering',
    categories: ['tech'],
    tags: ['APIs', 'Databases', 'Infra'],
    personality: 'Caches everything',
    bio: 'Dev builds the quiet parts that never break. He keeps the data flowing, the endpoints fast, and the on-call nights boring — exactly how he likes them.',
    contribution: 570,
    hue: 156,
    socials: { github: '#', linkedin: '#' },
  },
  {
    id: 'sara-khan',
    name: 'Sara Khan',
    role: 'Product Designer',
    squad: 'Design',
    categories: ['design'],
    tags: ['Research', 'Figma', 'Branding'],
    personality: 'Asks the hard why',
    bio: 'Sara starts every project with a question. She talks to people, sketches relentlessly, and shapes rough intentions into experiences that feel obvious in hindsight.',
    contribution: 500,
    hue: 25,
    socials: { instagram: '#', linkedin: '#' },
  },
  {
    id: 'vikram-joshi',
    name: 'Vikram Joshi',
    role: 'Community Organizer',
    squad: 'Community',
    categories: ['community', 'events'],
    tags: ['Partnerships', 'Outreach', 'Hosting'],
    personality: 'Human hype machine',
    bio: 'Vikram connects the collective to the world outside it. He lines up speakers, brings in new faces, and somehow always knows exactly who you should meet.',
    contribution: 540,
    hue: 200,
    socials: { linkedin: '#', instagram: '#' },
  },
]

export type EventStatus = 'completed' | 'current' | 'upcoming'

export type CollectiveEvent = {
  number: string
  name: string
  date: string
  description: string
  location: string
  category: string
  status: EventStatus
}

export const events: CollectiveEvent[] = [
  {
    number: '01',
    name: 'Welcome Night',
    date: 'Sep 12',
    description: 'Meet the people behind the Collective.',
    location: 'Main Hall',
    category: 'Community',
    status: 'completed',
  },
  {
    number: '02',
    name: 'Build Sprint',
    date: 'Oct 04',
    description: '48 hours. New ideas. Real things shipped.',
    location: 'Studio B',
    category: 'Engineering',
    status: 'completed',
  },
  {
    number: '03',
    name: 'Design Jam',
    date: 'Nov 09',
    description: 'Turn rough ideas into thoughtful experiences.',
    location: 'Design Lab',
    category: 'Design',
    status: 'current',
  },
  {
    number: '04',
    name: 'Open Source Day',
    date: 'Dec 07',
    description: 'Build something useful and share it with everyone.',
    location: 'The Commons',
    category: 'Engineering',
    status: 'upcoming',
  },
  {
    number: '05',
    name: 'Demo Day',
    date: 'Jan 18',
    description: 'Show the world what we built together.',
    location: 'Auditorium',
    category: 'Community',
    status: 'upcoming',
  },
]

export type Squad = {
  id: string
  name: string
  description: string
  members: number
  icon: 'code' | 'palette' | 'calendar' | 'users' | 'pen'
}

export const squads: Squad[] = [
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Turns ideas into working things.',
    members: 12,
    icon: 'code',
  },
  {
    id: 'design',
    name: 'Design',
    description: 'Makes the things people want to use.',
    members: 8,
    icon: 'palette',
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Creates moments worth showing up for.',
    members: 6,
    icon: 'calendar',
  },
  {
    id: 'community',
    name: 'Community',
    description: 'Connects people and keeps the collective moving.',
    members: 9,
    icon: 'users',
  },
  {
    id: 'content',
    name: 'Content',
    description: 'Tells the stories behind what we build.',
    members: 7,
    icon: 'pen',
  },
]

export const principles = [
  { number: '01', title: 'Build Together' },
  { number: '02', title: 'Share Knowledge' },
  { number: '03', title: 'Make Things' },
  { number: '04', title: 'Help Others' },
  { number: '05', title: 'Have Fun' },
]

export const stats = [
  { value: '42', label: 'Members' },
  { value: '18', label: 'Events' },
  { value: '6', label: 'Squads' },
  { value: '1', label: 'Collective' },
]

export const filters: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'tech', label: 'Tech' },
  { id: 'design', label: 'Design' },
  { id: 'events', label: 'Events' },
  { id: 'community', label: 'Community' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'members', label: 'Members' },
  { id: 'questline', label: 'Questline' },
  { id: 'squads', label: 'Squads' },
  { id: 'about', label: 'About' },
]
