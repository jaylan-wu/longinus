import photo001 from './assets/photography/PHOTO-001-fuji-2025.jpg'
import photo002 from './assets/photography/PHOTO-002-sendai-lilies-2025.jpg'
import photo003 from './assets/photography/PHOTO-003-otaru-2025.jpg'
import photo004 from './assets/photography/PHOTO-004-toyama-ramen-2025.JPG'
import photo005 from './assets/photography/PHOTO-005-hakodate-2025.JPG'
import photo006 from './assets/photography/PHOTO-006-jimbocho-2025.JPG'
import photo007 from './assets/photography/PHOTO-007-chicago-2026.JPG'
import majorLeagueBaseballMark from './assets/organizations/mlb.webp'
import newYorkMetsMark from './assets/organizations/mets.webp'
import newYorkUniversityMark from './assets/organizations/nyu.png'

export const chapterIds = [
  'identity',
  'trajectory',
  'outside-system',
  'interactive-influences',
  'current-direction',
] as const

export type AboutChapterId = (typeof chapterIds)[number]
export type PersonalAxis = 'Engineering' | 'Game development' | 'Education'

export type IdentityAxis = {
  id: `AX-${string}`
  label: PersonalAxis
  shortStatement: readonly [string, string, string]
  supportingStatement: string
}

export const chapters: Array<{ id: AboutChapterId; index: string; label: string }> = [
  { id: 'identity', index: '01', label: 'Identity' },
  { id: 'trajectory', index: '02', label: 'Trajectory' },
  { id: 'outside-system', index: '03', label: 'Outside the System' },
  { id: 'interactive-influences', index: '04', label: 'Interactive Influences' },
  { id: 'current-direction', index: '05', label: 'Current Direction' },
]

export type IdentityContent = {
  name: string
  creativeSignature: string
  location: string
  displayStatement: readonly string[]
  openingStatement: string[]
  axes: IdentityAxis[]
}

export const identity: IdentityContent = {
  name: 'Jaylan Wu',
  creativeSignature: 'alter-egoist',
  location: 'New York City',
  displayStatement: ['Bringing', 'creativity into', 'my technical', 'work.'],
  openingStatement: [
    'Media, places, and people shape the way I connect engineering, game development, and education. I care about how systems work, how interactions feel, and how clearly ideas are shared.',
    'Creativity belongs in technical work. Through teaching, I want others to feel that their perspective belongs in technical spaces too.',
  ],
  axes: [
    {
      id: 'AX-01',
      label: 'Engineering',
      shortStatement: ['Prototype,', 'test, and', 'refine.'],
      supportingStatement: 'I approach engineering through iteration—building early, learning from each version, and improving ideas through testing.',
    },
    {
      id: 'AX-02',
      label: 'Game development',
      shortStatement: ['Create', 'interactions that', 'evoke feeling.'],
      supportingStatement: 'I use systems, atmosphere, and player choice to shape how an experience feels.',
    },
    {
      id: 'AX-03',
      label: 'Education',
      shortStatement: ['Introduce', 'the unknown to', 'those who seek it.'],
      supportingStatement: 'Teaching gives people the tools and confidence to approach unfamiliar ideas for themselves.',
    },
  ],
}

export type TrajectoryOrganizationMarkId = 'nyu' | 'new-york-mets' | 'major-league-baseball'
export type TrajectoryOrganizationMarkPosition = 'center' | 'lower-right' | 'upper-right'

export type TrajectoryOrganizationMark = {
  id: TrajectoryOrganizationMarkId
  imageSrc: string
  position: TrajectoryOrganizationMarkPosition
}

export const trajectoryOrganizationMarks = {
  nyu: {
    id: 'nyu',
    imageSrc: newYorkUniversityMark,
    position: 'lower-right',
  },
  'new-york-mets': {
    id: 'new-york-mets',
    imageSrc: newYorkMetsMark,
    position: 'center',
  },
  'major-league-baseball': {
    id: 'major-league-baseball',
    imageSrc: majorLeagueBaseballMark,
    position: 'upper-right',
  },
} satisfies Record<TrajectoryOrganizationMarkId, TrajectoryOrganizationMark>

export type TrajectorySection = {
  label: string
  body: string
  reflection?: boolean
}

export type TrajectoryRecord = {
  id: `EDU-${string}` | `EXP-${string}`
  organization: string
  officialRole?: string
  title: string
  displayTitle: readonly string[]
  interpretiveStatement?: string
  period: string
  detailMetadata: string[]
  sections: readonly TrajectorySection[]
  axes: PersonalAxis[]
  themes: string[]
  organizationMark: TrajectoryOrganizationMarkId
}

export const trajectory = {
  lead: 'I have learned to move between software, physical systems, organizational workflows, and teaching. Each environment has changed how I think about the people, spaces, and systems that technical work must support.',
  records: [
    {
      id: 'EDU-001',
      organization: 'New York University',
      title: 'Dual-Degree Undergraduate',
      displayTitle: ['Dual-Degree', 'Undergraduate.'],
      period: '2020–2025',
      detailMetadata: [
        'Bachelors of Science in Computer Science',
        'Bachelors of Science in Computer Engineering',
        'Game Engineering',
      ],
      sections: [
        {
          label: 'Context',
          body: 'Studying computer science and computer engineering allowed me to move between algorithms, software design, computer architecture, embedded systems, and the boundary where hardware and software meet.',
        },
        {
          label: 'Foundation',
          body: 'The two degrees taught me to think about systems in layers: how user-facing software depends on architecture, how physical constraints influence implementation, and how decisions at one layer affect everything built above it.',
        },
        {
          label: 'Reflection',
          body: 'Game Engineering gave that technical foundation a creative outlet. Building games made abstract concepts tangible and showed me that rigorous technical work could still carry personality, atmosphere, and play.',
          reflection: true,
        },
      ],
      axes: ['Engineering', 'Game development', 'Education'],
      themes: ['Software and hardware', 'Game Engineering'],
      organizationMark: 'nyu',
    },
    {
      id: 'EXP-001',
      organization: 'New York University',
      officialRole: 'General Engineering EG1004 Teaching Assistant',
      title: 'Teaching Assistant',
      displayTitle: ['Teaching', 'Assistant.'],
      interpretiveStatement: 'Learning through teaching.',
      period: 'August 2022 - 2025',
      detailMetadata: ['General Engineering / EG1004'],
      sections: [
        {
          label: 'Teaching Context',
          body: 'As a Teaching Assistant for NYU’s first-year General Engineering course, I co-instructed weekly labs and supported students learning Figma, C++, Arduino, Autodesk Fusion 360, and Python through semester-long design projects.',
        },
        {
          label: 'Mentorship',
          body: 'I mentored teams of four from problem definition through building, testing, and presenting a working prototype. Alongside technical guidance, I asked questions that helped students understand their decisions and continue independently.',
        },
        {
          label: 'What I Learned',
          body: 'Teaching showed me that understanding a technical concept and explaining it clearly are different skills. Adapting explanations to different experience levels—and contributing to technical and inclusive-leadership training—made education a meaningful part of my engineering practice.',
          reflection: true,
        },
      ],
      axes: ['Engineering', 'Education'],
      themes: ['Mentorship', 'Technical communication', 'Prototyping', 'Inclusive instruction', 'Student confidence'],
      organizationMark: 'nyu',
    },
    {
      id: 'EXP-002',
      organization: 'New York Mets',
      officialRole: 'Technology Solutions Intern',
      title: 'Technology Solutions Intern',
      displayTitle: ['Technology Solutions', 'Intern.'],
      period: 'May 2023 - October 2023',
      detailMetadata: [],
      sections: [
        {
          label: 'Environment',
          body: 'Worked at Citi Field with the Technology Solutions department on the business operations side, learning how technology supports a sports organization and its audience.',
        },
        {
          label: 'Contribution',
          body: 'Served as an ambassador for an opt-in facial-recognition ticketing system, explained its benefits to fans, and analyzed patron data to help shape marketing presentations.',
        },
        {
          label: 'What Changed',
          body: 'Explaining unfamiliar technology to fans taught me to make technical ideas useful in a physical, public setting. It also helped me see entertainment technology as a direction I could choose for myself.',
          reflection: true,
        },
      ],
      axes: ['Engineering'],
      themes: ['Physical technology', 'Technology solutions'],
      organizationMark: 'new-york-mets',
    },
    {
      id: 'EXP-003',
      organization: 'Major League Baseball',
      officialRole: 'Full Stack Software Engineering Intern',
      title: 'Software Engineering Intern',
      displayTitle: ['Software Engineering', 'Intern.'],
      period: 'June 2024 - August 2024',
      detailMetadata: [],
      sections: [
        {
          label: 'Environment',
          body: 'Worked on Baseball Enterprise, developing web applications that support teams throughout Major League Baseball.',
        },
        {
          label: 'Contribution',
          body: 'Built internal administrative and notification tools and helped modernize a legacy marketing application.',
        },
        {
          label: 'What Changed',
          body: 'This experience grounded my understanding of full-stack engineering, hosting, workflows, and engineering stacks. Having room to choose an approach—and ask many questions—helped me learn how an engineering team works in practice.',
          reflection: true,
        },
      ],
      axes: ['Engineering'],
      themes: ['Modernization', 'Automation', 'Reliability', 'Cloud infrastructure', 'Full stack'],
      organizationMark: 'major-league-baseball',
    },
    {
      id: 'EXP-004',
      organization: 'New York University',
      officialRole: 'Instructional Facilities Manager',
      title: 'Instructional Facilities Manager',
      displayTitle: ['Instructional Facilities', 'Manager.'],
      period: 'September 2025 - Present',
      detailMetadata: [],
      sections: [
        {
          label: 'Environment',
          body: 'Manage more than 100 Teaching Assistants and oversee lab operations for a first-year general engineering course built around a semester-long design project.',
        },
        {
          label: 'Contribution',
          body: 'Coordinate lab safety and prototyping operations, guide the course website as a project manager and QA engineer, and develop technical training for Teaching Assistants.',
        },
        {
          label: 'What Changed',
          body: 'The role has shown me how instructional systems improve through repeated trial and error. Guiding students as they learn to think through engineering problems has deepened my passion for teaching.',
          reflection: true,
        },
      ],
      axes: ['Engineering', 'Education'],
      themes: ['Operations', 'Project management', 'Leadership', 'Problem solving'],
      organizationMark: 'nyu',
    },
  ] satisfies TrajectoryRecord[],
}

export type PhotoRecord = {
  id: `PHOTO-${string}`
  imageSrc: string
  orientation: 'landscape' | 'portrait'
  location: string
  country: string
  year: number
  featured: boolean
  alt: string
  caption: string
  camera: string
  reflection: string
}

export const outsideSystem = {
  travelStatement: 'I fell in love with traveling in high school on my first international trip to Taiwan and Japan, where I explored my own culture alongside one that was unfamiliar. Studying abroad in Paris and later taking a six-week solo trip through Japan strengthened the independence and curiosity I bring to unfamiliar places. I am drawn to nature, historical monuments, and local restaurants because they offer a closer view of how a place feels and lives.',
  photographyStatement: 'When I take my camera out, I usually look for symmetry in nature and build the image around a central subject. Many of these photographs come from solo trips; when I travel with friends, I look for candid moments when they seem most comfortable being themselves.',
  photos: [
    {
      id: 'PHOTO-001',
      imageSrc: photo001,
      orientation: 'landscape',
      location: 'Yamanashi',
      country: 'Japan',
      year: 2025,
      featured: true,
      alt: 'Fisherman in the lake.',
      caption: 'fishing.',
      camera: 'Sony α6000',
      reflection: 'This was one of my favorite photos that I was able to capture in Japan. I was lucky to catch Fuji on a clear day, and the experience felt surreal.',
    },
    {
      id: 'PHOTO-002',
      imageSrc: photo002,
      orientation: 'landscape',
      location: 'Sendai',
      country: 'Japan',
      year: 2025,
      featured: false,
      alt: 'Blooming lily in a sea of lily pads.',
      caption: 'Lilies.',
      camera: 'Sony α6000',
      reflection: 'Floral images are fun to take.',
    },
    {
      id: 'PHOTO-003',
      imageSrc: photo003,
      orientation: 'landscape',
      location: 'Mount Otaru',
      country: 'Japan',
      year: 2025,
      featured: true,
      alt: 'Torii gate at the top of the world.',
      caption: 'sky torii',
      camera: 'Sony α6000',
      reflection: 'This is a surreal image of a torii gate at the top of Mount Otaru.',
    },
    {
      id: 'PHOTO-004',
      imageSrc: photo004,
      orientation: 'landscape',
      location: 'Toyama',
      country: 'Japan',
      year: 2025,
      featured: false,
      alt: 'Ramen in Toyama.',
      caption: 'ramen',
      camera: 'Sony α6000',
      reflection: 'A personal favorite meal from my trip.',
    },
    {
      id: 'PHOTO-005',
      imageSrc: photo005,
      orientation: 'landscape',
      location: 'Hakodate',
      country: 'Japan',
      year: 2025,
      featured: false,
      alt: 'Hakodate port at sunset.',
      caption: 'a port at sunset',
      camera: 'Sony α6000',
      reflection: 'I stayed around this spot for a couple of hours waiting for the right photograph. I was glad to catch the sunset, and the evening has stayed memorable for me.',
    },
    {
      id: 'PHOTO-006',
      imageSrc: photo006,
      orientation: 'landscape',
      location: 'Jimbocho',
      country: 'Japan',
      year: 2025,
      featured: false,
      alt: 'The inside of a bookstore located in bookstore town.',
      caption: 'stories.',
      camera: 'Sony α6000',
      reflection: 'I liked the structure of this photograph: wherever you look, there is another book containing a story that someone put their all into.',
    },
    {
      id: 'PHOTO-007',
      imageSrc: photo007,
      orientation: 'landscape',
      location: 'Chicago',
      country: 'United States of America',
      year: 2026,
      featured: false,
      alt: 'Two friends sitting on a bench in front of a lake.',
      caption: 'a bench at noon',
      camera: 'Sony α6000',
      reflection: 'I like the composition of this photograph and how it shows the intimacy of people\'s relationships with one another.',
    },
  ] satisfies PhotoRecord[],
}

export type InfluenceRecord = {
  id: `INF-${string}`
  title: string
  releaseYear: number
  categories: string[]
  reflection: string
}

export const interactiveInfluences = {
  lead: 'These records focus on what specific games taught me about the experiences I want to create.',
  records: [
    {
      id: 'INF-001',
      title: 'Metaphor: ReFantazio',
      releaseYear: 2024,
      categories: ['Story', 'Worldbuilding', 'Character development', 'Interface design'],
      reflection: 'Metaphor showed me that a menu can be visually expressive and easy to use, especially when turn-based combat depends on frequent, deliberate choices. As I learn to design game interfaces, it reminds me that checking stats and shaping a build are part of the player experience rather than interruptions to it.',
    },
    {
      id: 'INF-002',
      title: 'Persona 4 Golden',
      releaseYear: 2012,
      categories: ['Social links', 'Character cast', 'Storytelling'],
      reflection: 'Persona 4 Golden showed me how a cast with relationships beyond the protagonist can make a world feel inhabited. Its characters and everyday structure made me think about the stories I want to tell from my own experiences, and about how small responses can carry different meaning within different relationships.',
    },
  ] satisfies InfluenceRecord[],
}

export type AboutAction = {
  label: string
  href: string
}

export const currentDirection = {
  statement: 'I want to keep developing as an engineer while working toward becoming an educator in the design space. I hope to contribute to game design and eventually create a game of my own. Right now, I am exploring expressive menu interfaces, sound design, and Blender so I can better understand what makes an interactive experience feel cohesive.',
  explorationAreas: [
    'Sound design',
    'User interface and user design',
    '3D modeling in Blender',
  ],
  longinusStatement: 'Longinus is a creative starting point and a testing ground for the skills I developed in college and those I want to build next. Its direction is rooted in the lasting effect Evangelion\'s creative choices had on me at a vulnerable time in my life. Building the portfolio as an interactive system lets me bring those influences together in a form that reflects the work I want to pursue.',
  closing: 'You are (not) alone.',
  actions: [
    { label: 'View Projects', href: '#projects' },
    { label: 'Contact', href: 'mailto:jaylan.wu@nyu.edu' },
    { label: 'Return Home', href: '#home' },
  ] satisfies AboutAction[],
}
