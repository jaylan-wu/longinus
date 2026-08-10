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
    connection: 'Engineering taught me how to build a system. Game design taught me to ask what that system could make someone feel. Teaching taught me how to help someone else understand it.',
  },
  axes: [
    {
      id: 'AX-01',
      axis: 'engineering',
      shortStatement: 'Design, build, test, and refine.',
      shortStatementLines: ['Design, build,', 'test, and refine.'],
      supportingStatement: 'I learn by building real systems, testing them, and letting each iteration reveal what the next version needs.',
    },
    {
      id: 'AX-02',
      axis: 'game-design',
      shortStatement: 'Create interactions people can feel.',
      shortStatementLines: ['Create interactions', 'people can feel.'],
      supportingStatement: 'I bring systems, story, sound, visual direction, and interaction together to create experiences that communicate a feeling.',
    },
    {
      id: 'AX-03',
      axis: 'education',
      shortStatement: 'Make the unfamiliar approachable.',
      shortStatementLines: ['Make the unfamiliar', 'approachable.'],
      supportingStatement: 'I give people the understanding and confidence to keep learning and building on their own.',
    },
  ],
} satisfies IdentityContent
