import type { IdentityContent } from '../types/about'

export const identity = {
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
} satisfies IdentityContent
