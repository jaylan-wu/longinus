import type { IdentityContent } from '../types/about'

export const identity = {
  name: 'Jaylan Wu',
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
      label: 'Engineering',
      shortStatement: 'Build, test, and refine.',
      supportingStatement: 'I learn by making something real, then letting each version reveal what the system needs.',
    },
    {
      id: 'AX-02',
      label: 'Game Development',
      shortStatement: 'Create interactions people can feel.',
      supportingStatement: 'I bring systems, story, sound, and choice together to turn an idea into an experience.',
    },
    {
      id: 'AX-03',
      label: 'Education',
      shortStatement: 'Make the unfamiliar approachable.',
      supportingStatement: 'I give people the tools and confidence to continue learning on their own.',
    },
  ],
} satisfies IdentityContent
