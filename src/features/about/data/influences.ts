import type { InfluenceRecord } from '../types/about'
import evangelionImage from '../assets/influences/evangelion.webp'
import kafkaImage from '../assets/influences/kafka.webp'
import metaphorImage from '../assets/influences/metaphor.webp'
import persona4GoldenImage from '../assets/influences/persona4golden.webp'

export const creativeInfluencesIntroduction = 'These works have shaped how I think about identity, atmosphere, relationships, and interactive systems. Each one left me with something I want to carry into what I create.'

const influenceRecords = [
  {
    id: 'INF-004',
    directoryOrder: 4,
    directoryTitleParts: [
      { text: 'Metaphor', prominence: 'primary' },
      { text: 'ReFantazio', prominence: 'supporting' },
    ],
    title: 'Metaphor: ReFantazio',
    medium: 'Video game',
    releaseYear: '2024',
    image: {
      src: metaphorImage,
      alt: 'Illustrated profile of the Metaphor: ReFantazio protagonist against an abstract blue-and-red background.',
      width: 1024,
      height: 576,
    },
    featuredQuote: '“It is okay to dream of a fantasy.”',
    quoteVerificationNote: 'Confirm the exact wording, capitalization, and punctuation from the game before final publication.',
    categories: [
      'Interface design',
      'Visual direction',
      'Systems design',
      'Worldbuilding',
      'Social themes',
    ],
    specificElement: [
      'The skills menu immediately stood out to me. The artwork of Will lying across the screen makes the interface feel connected to his perspective rather than like a separate layer placed over the game. Instead of replacing the experience with text and statistics, the menu uses illustration and composition to make navigating the character’s abilities enjoyable in its own right.',
    ],
    displayReflection: [
      '*Metaphor: ReFantazio* showed me how every part of a game can contribute to one cohesive experience. Its interface, strategic combat, music, and worldbuilding all feel connected to the same creative direction, while its fantasy setting still makes room for direct conversations about racism, class, and the kind of future people are allowed to imagine.',
      'That balance stayed with me personally. As I learn to follow a creative direction that feels meaningful to me, the game reminds me that fantasy does not have to be an escape from the world. It can also be a way of questioning what surrounds us and imagining something different.',
    ],
    designTakeaway: 'Treat menus and supporting systems as part of the experience rather than as spaces the player must pass through to return to it.',
  },
  {
    id: 'INF-003',
    directoryOrder: 3,
    directoryTitleParts: [
      { text: 'Persona 4', prominence: 'primary' },
      { text: 'Golden', prominence: 'supporting' },
    ],
    title: 'Persona 4 Golden',
    medium: 'Video game',
    releaseYear: '2012',
    image: {
      src: persona4GoldenImage,
      alt: 'The Persona 4 Golden cast lying in a circle and looking upward toward the viewer.',
      width: 1024,
      height: 576,
    },
    featuredQuote: '“Next year and the year after that... No matter what happens, I’m sure we’ll be okay.”',
    quoteAttribution: 'Yukiko Amagi',
    quoteVerificationNote: 'Confirm the exact wording, capitalization, punctuation, speaker, and scene before final publication.',
    categories: [
      'Character relationships',
      'Everyday life',
      'Storytelling',
      'Atmosphere',
      'Visual identity',
    ],
    specificElement: [
      'The moments that stayed with me most were the times when the characters chose to include one another in their daily lives. Group activities rarely felt isolated to Yu, and the way the cast welcomed Nanako made them feel like a real friend group rather than characters waiting for the protagonist.',
      'Yu’s quieter moments with Nanako and Dojima also made returning home feel as meaningful as progressing through the larger story. As Yu became familiar with Inaba, I felt myself settling into the town alongside him. Even the older polygonal models added to that sense of charm and identity rather than taking away from it.',
    ],
    displayReflection: [
      '*Persona 4 Golden* showed me that relationships feel strongest when characters have lives beyond the protagonist. The invitations, group activities, and quiet family scenes made the cast feel like people who would continue caring for one another even when the player was not present.',
      'As I have gotten older, I have become more deliberate about making time for my friends and family rather than assuming those relationships will maintain themselves. The game made me want to create characters whose connections are built through ordinary, intentional moments—not only through the dramatic events of the story.',
    ],
    designTakeaway: 'Build relationships across the entire cast, not only between each character and the protagonist. Give every character a meaningful place within the group, the story, and the gameplay.',
  },
  {
    id: 'INF-002',
    directoryOrder: 2,
    directoryTitleParts: [
      { text: 'Kafka', prominence: 'primary' },
      { text: 'on the', prominence: 'supporting' },
      { text: 'Shore', prominence: 'primary' },
    ],
    title: 'Kafka on the Shore',
    medium: 'Novel',
    creator: 'Haruki Murakami',
    releaseYear: '2002',
    image: {
      src: kafkaImage,
      alt: 'Gold-toned folding-screen painting of black crows in flight and perched among bare branches.',
      width: 1024,
      height: 602,
    },
    featuredQuote: '“Silence, I discover, is something you can actually hear.”',
    quoteVerificationNote: 'Confirm the exact wording and punctuation against the edition used before final publication.',
    categories: [
      'Atmosphere',
      'Alternating narratives',
      'Surrealism',
      'Symbolism',
      'Ambiguity',
      'Environmental storytelling',
    ],
    specificElement: [
      'The forest and the dreamlike town within it stayed with me most. The setting felt suspended between reality, memory, and something more symbolic. Even when I could not fully explain what was happening, the atmosphere made the emotions of the scene feel understandable.',
      'The alternating narratives created a similar sense of uncertainty. Each storyline revealed only part of the larger picture, which kept me searching for connections while leaving room for my interpretation to change.',
    ],
    displayReflection: [
      'I finished *Kafka on the Shore* shortly after spending six weeks traveling alone through Japan. That trip taught me to value solitude as a space where I could think about who I was and what I wanted without constantly measuring myself against the expectations surrounding me.',
      'The novel helped me see uncertainty in a similar way. A story does not always need to resolve every mystery for it to feel meaningful, just as I do not need to know exactly where my path will lead before choosing a direction. That uncertainty has gradually become less of a source of anxiety and more of something that pushes me to imagine what my life and creative work could become.',
    ],
    designTakeaway: 'Use atmosphere, symbolism, and ambiguity to create spaces that audiences can interpret for themselves. An environment can communicate a feeling before its meaning is fully understood.',
  },
  {
    id: 'INF-001',
    directoryOrder: 1,
    directoryTitleParts: [
      { text: 'Neon Genesis', prominence: 'supporting' },
      { text: 'Evangelion', prominence: 'primary' },
    ],
    directoryTitleVariant: 'compact',
    title: 'Neon Genesis Evangelion',
    medium: 'Anime television series and film',
    displayMedium: 'Anime',
    releaseYear: '1995–1997',
    image: {
      src: evangelionImage,
      alt: 'Illustrated Evangelion scene with Shinji and Asuka facing a monumental image of Rei beneath a starry sky.',
      width: 1024,
      height: 683,
    },
    includedWorks: [
      'Neon Genesis Evangelion, Episodes 1–26',
      'The End of Evangelion',
    ],
    featuredQuote: '“You are the only person who can take care of yourself.”',
    quoteVerificationNote: 'Confirm the exact wording, punctuation, translation, speaker, and source scene before final publication.',
    categories: [
      'Visual direction',
      'Composition',
      'Identity',
      'Emotional storytelling',
      'Interface design',
      'Ambiguity',
    ],
    specificElement: [
      'The ending of *The End of Evangelion* stayed with me because of how directly it places the audience inside Shinji’s mental state. Its shifts in imagery, composition, sound, and perspective make his fear and vulnerability feel like part of the form of the film rather than emotions explained only through dialogue.',
      'The ending does not present facing yourself as a clean or simple decision. Shinji is forced to confront the ways he avoids other people, the pain that comes with connection, and whether he is willing to return to an uncertain world.',
    ],
    displayReflection: [
      'I first watched *Evangelion* during the summer between high school and college, when I was thinking more seriously about how I communicated with others and the relationships I carried into the next part of my life. I connected with Shinji’s timidness and his difficulty expressing what he needed, even when he wanted to be understood.',
      'The series also made me think about how identity changes depending on who is looking at us. The person my family knows is not exactly the same person my friends or colleagues see, yet each version still belongs to me. When I returned to the series years later, its ending felt less hopeless than I had remembered. Beneath its painful emotions, I found an insistence that understanding and caring for yourself is what makes connection with others possible.',
    ],
    connectionToLonginus: [
      '*Evangelion* helped shape the visual language behind Longinus, but its influence goes beyond the spear, typography, or interface references. It showed me that technical systems, composition, stillness, and visual disruption can carry emotional meaning. Longinus draws from those principles without attempting to reproduce the series’ identifiable artwork or interfaces.',
    ],
    designTakeaway: 'Use visual and technical systems to communicate emotions that dialogue alone cannot fully express. Difficult feelings can be presented honestly without removing the possibility of hope.',
  },
] satisfies InfluenceRecord[]

export const creativeInfluences: readonly InfluenceRecord[] = [
  ...influenceRecords,
].sort((first, second) => first.directoryOrder - second.directoryOrder)

export const influenceDirectory = creativeInfluences
