import type { InteractiveInfluenceRecord } from '../types/about'

export const interactiveInfluences = {
  lead: 'These records focus on what specific games taught me about the experiences I want to create.',
  records: [
    {
      id: 'INF-001',
      gameTitle: 'Metaphor: ReFantazio',
      releaseYear: 2024,
      categories: ['Story', 'Worldbuilding', 'Character development', 'Interface design'],
      reflection: 'Metaphor showed me that a menu can be visually expressive and easy to use, especially when turn-based combat depends on frequent, deliberate choices. As I learn to design game interfaces, it reminds me that checking stats and shaping a build are part of the player experience rather than interruptions to it.',
    },
    {
      id: 'INF-002',
      gameTitle: 'Persona 4 Golden',
      releaseYear: 2012,
      categories: ['Social links', 'Character cast', 'Storytelling'],
      reflection: 'Persona 4 Golden showed me how a cast with relationships beyond the protagonist can make a world feel inhabited. Its characters and everyday structure made me think about the stories I want to tell from my own experiences, and about how small responses can carry different meaning within different relationships.',
    },
  ] satisfies InteractiveInfluenceRecord[],
}
