export const chapterIds = [
  'identity',
  'trajectory',
  'outside-system',
  'interactive-influences',
  'current-direction',
] as const

export type AboutChapterId = (typeof chapterIds)[number]
export type PersonalAxis = 'Engineering' | 'Game Development' | 'Education'

export const chapters: Array<{ id: AboutChapterId; index: string; label: string }> = [
  { id: 'identity', index: '01', label: 'Identity' },
  { id: 'trajectory', index: '02', label: 'Trajectory' },
  { id: 'outside-system', index: '03', label: 'Outside the System' },
  { id: 'interactive-influences', index: '04', label: 'Interactive Influences' },
  { id: 'current-direction', index: '05', label: 'Current Direction' },
]

export type ExperienceRecord = {
  id: string
  organization: string
  role: string
  context: string
  contribution: string
  reflection: string
  axes: PersonalAxis[]
  themes: string[]
}

export const experiences: ExperienceRecord[] = [
  {
    id: 'EXP-001',
    organization: 'New York University',
    role: 'Computer Science + Computer Engineering / Game Engineering study',
    context: 'A technical foundation spanning software, hardware, architecture, embedded systems, graphics, and interaction.',
    contribution: 'Built fluency across layers that are often taught separately.',
    reflection: 'PLACEHOLDER REFLECTION — Working across both disciplines taught me to treat interfaces, systems, and machines as connected design material.',
    axes: ['Engineering', 'Game Development', 'Education'],
    themes: ['Technical foundation', 'Interactive technology'],
  },
  {
    id: 'EXP-002',
    organization: 'New York Mets',
    role: 'Technology Solutions',
    context: 'Technology operating inside physical, employee-facing, operational, and fan-facing environments.',
    contribution: 'Supported the relationship between software, hardware, people, and venue operations.',
    reflection: 'PLACEHOLDER REFLECTION — A system earns trust when it respects the physical context and the people relying on it in real time.',
    axes: ['Engineering'],
    themes: ['Operations', 'Human-centered technology'],
  },
  {
    id: 'EXP-003',
    organization: 'Major League Baseball',
    role: 'Software Engineering',
    context: 'Internal organizational systems, modernization, automation, cloud infrastructure, and time-sensitive workflows.',
    contribution: 'Helped make complex operational software more reliable and maintainable.',
    reflection: 'PLACEHOLDER REFLECTION — Good modernization balances technical ambition with the realities of the teams and workflows already in motion.',
    axes: ['Engineering'],
    themes: ['Reliability', 'Internal systems'],
  },
  {
    id: 'EXP-004',
    organization: 'New York University',
    role: 'Instructional Facilities Manager',
    context: 'The spaces, equipment, documentation, and support behind dependable instructional environments.',
    contribution: 'Coordinated technical infrastructure that lets learning happen without the infrastructure becoming the lesson.',
    reflection: 'PLACEHOLDER REFLECTION — The most effective educational systems often become invisible precisely because they work.',
    axes: ['Engineering', 'Education'],
    themes: ['Infrastructure', 'Leadership'],
  },
  {
    id: 'EXP-005',
    organization: 'New York University',
    role: 'Adjunct Professor',
    context: 'Teaching engineering concepts through explanation, mentorship, and practical implementation.',
    contribution: 'Helped students turn difficult systems into something they could reason about and build with confidence.',
    reflection: 'PLACEHOLDER REFLECTION — Teaching sharpens how I design, document, and evaluate systems; clarity is part of the engineering.',
    axes: ['Engineering', 'Education'],
    themes: ['Mentorship', 'Technical communication'],
  },
]

export type PhotoRecord = {
  id: string
  orientation: 'landscape' | 'portrait'
  location: 'LOCATION'
  year: 'YEAR'
  caption: string
  alt: string
  composition: string
}

export const photos: PhotoRecord[] = [
  { id: 'CAP-001', orientation: 'landscape', location: 'LOCATION', year: 'YEAR', caption: 'PERSONAL CAPTION — replace with the memory attached to this photograph.', alt: 'Placeholder for a wide landscape photograph; final image and alternative text are pending curation.', composition: 'horizon' },
  { id: 'CAP-002', orientation: 'portrait', location: 'LOCATION', year: 'YEAR', caption: 'PERSONAL CAPTION — replace with an observation about this place.', alt: 'Placeholder for a vertical architecture photograph; final image and alternative text are pending curation.', composition: 'structure' },
  { id: 'CAP-003', orientation: 'landscape', location: 'LOCATION', year: 'YEAR', caption: 'PERSONAL CAPTION — replace with a note about movement through the city.', alt: 'Placeholder for a landscape transit photograph; final image and alternative text are pending curation.', composition: 'transit' },
  { id: 'CAP-004', orientation: 'portrait', location: 'LOCATION', year: 'YEAR', caption: 'PERSONAL CAPTION — replace with a quiet personal detail.', alt: 'Placeholder for a portrait-format environmental detail; final image and alternative text are pending curation.', composition: 'light' },
  { id: 'CAP-005', orientation: 'landscape', location: 'LOCATION', year: 'YEAR', caption: 'PERSONAL CAPTION — replace with the atmosphere remembered here.', alt: 'Placeholder for a wide atmospheric photograph; final image and alternative text are pending curation.', composition: 'atmosphere' },
  { id: 'CAP-006', orientation: 'portrait', location: 'LOCATION', year: 'YEAR', caption: 'PERSONAL CAPTION — replace with a note about scale and public space.', alt: 'Placeholder for a vertical public-space photograph; final image and alternative text are pending curation.', composition: 'scale' },
  { id: 'CAP-007', orientation: 'landscape', location: 'LOCATION', year: 'YEAR', caption: 'PERSONAL CAPTION — replace with the story outside the frame.', alt: 'Placeholder for a featured landscape photograph; final image and alternative text are pending curation.', composition: 'distance' },
]

export type InfluenceRecord = {
  id: string
  title: string
  categories: string[]
  reflection: string
}

export const influences: InfluenceRecord[] = [
  { id: 'INF-001', title: 'PLACEHOLDER GAME 01', categories: ['Interface', 'Mechanical expression'], reflection: 'PLACEHOLDER REFLECTION — identify how the interface makes complex systems feel immediate, expressive, and learnable.' },
  { id: 'INF-002', title: 'PLACEHOLDER GAME 02', categories: ['Worldbuilding', 'Atmosphere'], reflection: 'PLACEHOLDER REFLECTION — describe how space, sound, and environmental detail create a world that feels larger than its exposition.' },
  { id: 'INF-003', title: 'PLACEHOLDER GAME 03', categories: ['Systems design', 'Player agency'], reflection: 'PLACEHOLDER REFLECTION — explain how interacting systems create authorship without prescribing a single solution.' },
  { id: 'INF-004', title: 'PLACEHOLDER GAME 04', categories: ['Music and sound', 'Visual direction'], reflection: 'PLACEHOLDER REFLECTION — connect audiovisual identity to pacing, emotion, and the physical feeling of interaction.' },
]

export const explorationAreas = [
  'Interactive Software',
  'Game Systems',
  'Real-Time Graphics',
  '3D Web Experiences',
  'Creative Development',
  'Technical Education',
]
