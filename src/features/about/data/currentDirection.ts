import type { AboutAction } from '../types/about'

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
