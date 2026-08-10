import type { AboutAction } from '../types/about'

export const currentDirection = {
  statement: 'I do not see my future as only conventional software engineering. I want to work where technical systems, game design, interactive experiences, creative technology, and education meet. Over time, I hope to contribute meaningfully to game design and create a game of my own. I also want education to remain part of that future through teaching in technical and design-oriented spaces.',
  explorationAreas: [
    'Interface / menu design',
    'Sound and music for games',
    '3D modeling with Blender',
  ],
  longinusStatement: 'Longinus is a testing ground where I bring the software engineering skills I already have together with disciplines I want to develop further: interaction design, 3D graphics, visual composition, motion, and creative coding. Its game-interface influences and Evangelion-inspired visual direction give that experimentation a coherent frame. Building it lets me explore how technical systems and deliberate art direction can become one interactive experience.',
  closing: 'You are (not) alone.',
  actions: [
    { label: 'View Projects', href: '#projects' },
    { label: 'Contact', href: 'mailto:jaylan.wu@nyu.edu' },
    { label: 'Return Home', href: '#home' },
  ] satisfies AboutAction[],
}
