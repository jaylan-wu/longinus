import type { IdentityContent } from '../types/about'

export const identity = {
  name: 'Jaylan Wu',
  location: 'New York City',
  creativeSignature: 'alter-egoist',
  displayStatement: ['Creativity', 'was always', 'part of', 'the system.'],
  openingStatement: {
    context: 'For a long time, the arts and engineering felt like separate parts of my life.',
    pivot: 'They were never separate.',
    realization: 'I just had not learned how to connect them yet.',
    connection: 'Engineering taught me how to build a system. Games taught me to ask what that system could make someone feel. Teaching taught me how to help someone else understand it.',
  },
  axes: [
    {
      id: 'AX-01',
      axis: 'engineering',
      shortStatement: 'Design, build, test, and refine.',
      shortStatementLines: ['Design, build,', 'test, and refine.'],
      supportingStatement: 'I learn by making something real, then letting each version reveal what the next iteration needs.',
    },
    {
      id: 'AX-02',
      axis: 'game-design',
      shortStatement: 'Create interactions people can feel.',
      shortStatementLines: ['Create interactions', 'people can feel.'],
      supportingStatement: 'I bring systems, story, sounds and dreams together to create an experience that represents what I feel.',
    },
    {
      id: 'AX-03',
      axis: 'education',
      shortStatement: 'Make the unfamiliar approachable.',
      shortStatementLines: ['Make the unfamiliar', 'approachable.'],
      supportingStatement: 'I teach the next set of curious individuals the skills and confidence to continue building on their own.',
    },
  ],
} satisfies IdentityContent
