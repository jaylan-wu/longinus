import majorLeagueBaseballMark from '../assets/organizations/mlb.webp'
import newYorkMetsMark from '../assets/organizations/mets.webp'
import newYorkUniversityMark from '../assets/organizations/nyu.png'
import type {
  ExperienceOrganizationMark,
  ExperienceOrganizationMarkId,
  ExperienceRecord,
} from '../types/about'

export const experienceOrganizationMarks = {
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
} satisfies Record<ExperienceOrganizationMarkId, ExperienceOrganizationMark>

export const trajectory = {
  lead: 'I have learned to move between software, physical systems, organizational workflows, and teaching. Each environment has changed how I think about the people, spaces, and systems that technical work must support.',
  records: [
    {
      id: 'EDU-001',
      organization: 'New York University',
      roleOrDegree: 'Dual-Degree Undergraduate',
      displayTitle: ['Dual-Degree', 'Undergraduate.'],
      period: '2020–2025',
      detailMetadata: [
        'Bachelors of Science in Computer Science',
        'Bachelors of Science in Computer Engineering',
        'Game Engineering',
      ],
      context: {
        label: 'Context',
        body: 'Studying computer science and computer engineering allowed me to move between algorithms, software design, computer architecture, embedded systems, and the boundary where hardware and software meet.',
      },
      definingContribution: {
        label: 'Foundation',
        body: 'The two degrees taught me to think about systems in layers: how user-facing software depends on architecture, how physical constraints influence implementation, and how decisions at one layer affect everything built above it.',
      },
      reflection: {
        label: 'Reflection',
        body: 'Game Engineering gave that technical foundation a creative outlet. Building games made abstract concepts tangible and showed me that rigorous technical work could still carry personality, atmosphere, and play.',
      },
      personalAxes: ['Engineering', 'Game development', 'Education'],
      supportingThemes: ['Software and hardware', 'Game Engineering'],
      organizationMark: 'nyu',
    },
    {
      id: 'EXP-001',
      organization: 'New York University',
      roleOrDegree: 'Teaching Assistant',
      officialRole: 'General Engineering EG1004 Teaching Assistant',
      displayTitle: ['Teaching', 'Assistant.'],
      interpretiveStatement: 'Learning through teaching.',
      period: 'August 2022 - 2025',
      detailMetadata: ['General Engineering / EG1004'],
      context: {
        label: 'Teaching Context',
        body: 'As a Teaching Assistant for NYU’s first-year General Engineering course, I co-instructed weekly labs and supported students learning Figma, C++, Arduino, Autodesk Fusion 360, and Python through semester-long design projects.',
      },
      definingContribution: {
        label: 'Mentorship',
        body: 'I mentored teams of four from problem definition through building, testing, and presenting a working prototype. Alongside technical guidance, I asked questions that helped students understand their decisions and continue independently.',
      },
      reflection: {
        label: 'What I Learned',
        body: 'Teaching showed me that understanding a technical concept and explaining it clearly are different skills. Adapting explanations to different experience levels—and contributing to technical and inclusive-leadership training—made education a meaningful part of my engineering practice.',
      },
      personalAxes: ['Engineering', 'Education'],
      supportingThemes: ['Mentorship', 'Technical communication', 'Prototyping', 'Inclusive instruction', 'Student confidence'],
      organizationMark: 'nyu',
    },
    {
      id: 'EXP-002',
      organization: 'New York Mets',
      roleOrDegree: 'Technology Solutions Intern',
      officialRole: 'Technology Solutions Intern',
      displayTitle: ['Technology Solutions', 'Intern.'],
      period: 'May 2023 - October 2023',
      detailMetadata: [],
      context: {
        label: 'Environment',
        body: 'Worked at Citi Field with the Technology Solutions department on the business operations side, learning how technology supports a sports organization and its audience.',
      },
      definingContribution: {
        label: 'Contribution',
        body: 'Served as an ambassador for an opt-in facial-recognition ticketing system, explained its benefits to fans, and analyzed patron data to help shape marketing presentations.',
      },
      reflection: {
        label: 'What Changed',
        body: 'Explaining unfamiliar technology to fans taught me to make technical ideas useful in a physical, public setting. It also helped me see entertainment technology as a direction I could choose for myself.',
      },
      personalAxes: ['Engineering'],
      supportingThemes: ['Physical technology', 'Technology solutions'],
      organizationMark: 'new-york-mets',
    },
    {
      id: 'EXP-003',
      organization: 'Major League Baseball',
      roleOrDegree: 'Software Engineering Intern',
      officialRole: 'Full Stack Software Engineering Intern',
      displayTitle: ['Software Engineering', 'Intern.'],
      period: 'June 2024 - August 2024',
      detailMetadata: [],
      context: {
        label: 'Environment',
        body: 'Worked on Baseball Enterprise, developing web applications that support teams throughout Major League Baseball.',
      },
      definingContribution: {
        label: 'Contribution',
        body: 'Built internal administrative and notification tools and helped modernize a legacy marketing application.',
      },
      reflection: {
        label: 'What Changed',
        body: 'This experience grounded my understanding of full-stack engineering, hosting, workflows, and engineering stacks. Having room to choose an approach—and ask many questions—helped me learn how an engineering team works in practice.',
      },
      personalAxes: ['Engineering'],
      supportingThemes: ['Modernization', 'Automation', 'Reliability', 'Cloud infrastructure', 'Full stack'],
      organizationMark: 'major-league-baseball',
    },
    {
      id: 'EXP-004',
      organization: 'New York University',
      roleOrDegree: 'Instructional Facilities Manager',
      officialRole: 'Instructional Facilities Manager',
      displayTitle: ['Instructional Facilities', 'Manager.'],
      period: 'September 2025 - Present',
      detailMetadata: [],
      context: {
        label: 'Environment',
        body: 'Manage more than 100 Teaching Assistants and oversee lab operations for a first-year general engineering course built around a semester-long design project.',
      },
      definingContribution: {
        label: 'Contribution',
        body: 'Coordinate lab safety and prototyping operations, guide the course website as a project manager and QA engineer, and develop technical training for Teaching Assistants.',
      },
      reflection: {
        label: 'What Changed',
        body: 'The role has shown me how instructional systems improve through repeated trial and error. Guiding students as they learn to think through engineering problems has deepened my passion for teaching.',
      },
      personalAxes: ['Engineering', 'Education'],
      supportingThemes: ['Operations', 'Project management', 'Leadership', 'Problem solving'],
      organizationMark: 'nyu',
    },
  ] satisfies ExperienceRecord[],
}
