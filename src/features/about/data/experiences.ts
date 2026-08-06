import majorLeagueBaseballMark from '../assets/organizations/mlb.png'
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
    position: 'lower-content-center',
    scale: 'portrait',
  },
  'new-york-mets': {
    id: 'new-york-mets',
    imageSrc: newYorkMetsMark,
    position: 'lower-content-center',
    scale: 'large-square',
  },
  'major-league-baseball': {
    id: 'major-league-baseball',
    imageSrc: majorLeagueBaseballMark,
    position: 'lower-content-center',
    scale: 'compact-wide',
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
      titleVariant: 'standard',
      selectorTitleVariant: 'long',
      period: '2020–2025',
      detailMetadata: [
        'Bachelors of Science in Computer Science',
        'Bachelors of Science in Computer Engineering',
        'Game Engineering',
      ],
      context: {
        label: 'Context',
        body: 'Computer science and computer engineering taught me to move between algorithms, software design, computer architecture, embedded systems, and the boundary between hardware and software.',
      },
      definingContribution: {
        label: 'Foundation',
        body: 'The dual degree taught me to think in layers: software depends on architecture, physical constraints shape implementation, and decisions at one layer affect everything built above it.',
      },
      reflection: {
        label: 'Reflection',
        body: 'Game Engineering gave that foundation a creative outlet. Building games made abstract ideas tangible and showed me that rigorous technical work can still carry personality, atmosphere, and play.',
      },
      personalAxes: ['engineering', 'game-design'],
      supportingThemes: ['Software Engineering', 'Embedded Design'],
      organizationMark: 'nyu',
    },
    {
      id: 'EXP-001',
      organization: 'New York University',
      roleOrDegree: 'Teaching Assistant',
      officialRole: 'General Engineering EG1004 Teaching Assistant',
      displayTitle: ['Teaching', 'Assistant.'],
      titleVariant: 'standard',
      period: 'August 2022 - August 2025',
      detailMetadata: [
        'General Engineering / EG1004',
        'Weekly labs / Semester-long design projects',
      ],
      context: {
        label: 'Context',
        body: 'As a Teaching Assistant for NYU’s first-year General Engineering course, I supported weekly labs and helped students use Figma, C++, Arduino, Autodesk Fusion 360, and Python to develop semester-long design projects.',
      },
      definingContribution: {
        label: 'Mentorship',
        body: 'I mentored teams from defining a problem through building, testing, and presenting a working prototype. I also contributed to technical and inclusive-leadership training for the larger Teaching Assistant community.',
      },
      reflection: {
        label: 'Reflection',
        body: 'Teaching showed me that understanding a technical idea and explaining it clearly are different skills. Learning to make unfamiliar ideas approachable made education a meaningful part of my engineering practice.',
      },
      personalAxes: ['engineering', 'education'],
      supportingThemes: ['Mentorship', 'Prototyping', 'Inclusive Instruction'],
      organizationMark: 'nyu',
    },
    {
      id: 'EXP-002',
      organization: 'New York Mets',
      roleOrDegree: 'Technology Solutions Intern',
      officialRole: 'Technology Solutions Intern',
      displayTitle: ['Technology', 'Solutions Intern.'],
      titleVariant: 'long',
      period: 'May 2023 - October 2023',
      detailMetadata: [
        'Technology Solutions / Business Operations',
        'Citi Field',
      ],
      context: {
        label: 'Context',
        body: 'I worked with the Technology Solutions department on the business-operations side at Citi Field, learning how technology supports a sports organization and its audience.',
      },
      definingContribution: {
        label: 'Application',
        body: 'I supported adoption of an opt-in facial-recognition ticketing system by speaking directly with fans, explaining its benefits, analyzing patron data, and creating presentations about how to market the technology.',
      },
      reflection: {
        label: 'Reflection',
        body: 'Explaining unfamiliar technology to a broad audience taught me to make technical ideas approachable in a physical, public setting. It also helped me see entertainment technology as a meaningful professional direction.',
      },
      personalAxes: ['engineering'],
      supportingThemes: ['Physical Technology', 'Technology Solutions'],
      organizationMark: 'new-york-mets',
    },
    {
      id: 'EXP-003',
      organization: 'Major League Baseball',
      roleOrDegree: 'Software Engineering Intern',
      officialRole: 'Full Stack Software Engineering Intern',
      displayTitle: ['Software', 'Engineering Intern.'],
      titleVariant: 'long',
      period: 'June 2024 - August 2024',
      detailMetadata: [
        'Baseball Enterprise / Full-stack Engineering',
        'Internal web applications',
      ],
      context: {
        label: 'Context',
        body: 'As a full-stack software engineering intern on Baseball Enterprise, I developed web applications that supported internal teams across Major League Baseball.',
      },
      definingContribution: {
        label: 'Systems',
        body: 'I built administrative controls for scheduled jobs, created Slack notifications for game-start information, and helped modernize a legacy marketing-email application.',
      },
      reflection: {
        label: 'Reflection',
        body: 'The work grounded my understanding of hosting, workflows, engineering stacks, and organizational systems. Taking ownership of open-ended problems—and asking questions as I chose an approach—helped me develop confidence in how engineering teams work in practice.',
      },
      personalAxes: ['engineering'],
      supportingThemes: ['Modernization', 'Automation', 'Full-stack Systems'],
      organizationMark: 'major-league-baseball',
    },
    {
      id: 'EXP-004',
      organization: 'New York University',
      roleOrDegree: 'Lab Facilities Manager',
      officialRole: 'Instructional Facilities Manager',
      displayTitle: ['Instructional Facilities', 'Manager.'],
      titleVariant: 'extra-long',
      selectorTitleVariant: 'standard',
      period: 'September 2025 - Present',
      detailMetadata: [
        'First-year General Engineering',
        'Lab Operations / Course Infrastructure',
      ],
      context: {
        label: 'Context',
        body: 'I manage more than 100 Teaching Assistants and oversee lab operations and safety for a first-year General Engineering course centered on semester-long design projects.',
      },
      definingContribution: {
        label: 'Infrastructure',
        body: 'I coordinate the engineering infrastructure behind student prototyping: lab spaces and safety, course tooling and website quality assurance, and technical training for Teaching Assistants.',
      },
      reflection: {
        label: 'Reflection',
        body: 'The role has shown me that teaching systems improve through iteration. Connecting technical leadership with education has deepened my commitment to helping students learn how to approach engineering problems and build ideas of their own.',
      },
      personalAxes: ['engineering', 'education'],
      supportingThemes: ['Operations', 'Technical Leadership', 'Student Prototyping'],
      organizationMark: 'nyu',
    },
  ] satisfies ExperienceRecord[],
}
