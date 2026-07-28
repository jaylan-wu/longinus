# About Content Source

This document is the editorial source for the Longinus About page. It contains a mixture of published source material, working drafts, design notes, and explicitly incomplete records; the entire file is not uniformly verified.

Do not treat unfinished notes as confirmed facts. Do not invent dates, titles, metrics, locations, captions, or personal reflections.

## Repository status

Audited against the implementation on **2026-07-27**.

- Published runtime data is maintained in focused modules under [`src/features/about/data/`](../src/features/about/data/).
- Current UI renders all five chapters, `EDU-001`, `EXP-001` through `EXP-004`, seven photographs, four interactive-influence records, and three final actions.
- `EXP-005` is future, incomplete, and intentionally unpublished.
- The four influence records are published in the current staged About page; quote, translation, speaker, and source-scene verification remains open where flagged below.
- Degree, school/program, role, course, date, public contact, photograph metadata, and selected wording still require the specific verification flags recorded below. Repository presence is not proof of official wording.
- Content edits do not update the runtime data modules automatically. Keep the editorial source and runtime data synchronized deliberately when wording is approved.
- The approved About / Identity / Desktop / Idle reference is stored at
  [`design/figma/references/about/about-identity-desktop-idle-v1.png`](../design/figma/references/about/about-identity-desktop-idle-v1.png).
  It defines only the Identity desktop idle composition; the remaining four
  chapter compositions are not approved.

---

# 1. Identity

## Primary Identity

Name: Jaylan Wu

Location: New York City

Creative signature: alter-egoist

## Personal Axes

* Engineering
* Game design
* Education

## Display Statement

Creativity was always part of the system.

## Opening Statement

For a long time, the arts and engineering felt like separate parts of my
life.

They were never separate. I just had not learned how to connect them yet.

Engineering taught me how to build a system. Games taught me to ask what that
system could make someone feel. Teaching taught me how to help someone else
understand it.

## Identity Axes

### AX-01 — Engineering

Short statement:

Design, build, test, and refine.

Supporting statement:

I learn by making something real, then letting each version reveal what the
next iteration needs.

### AX-02 — Game Design

Short statement:

Create interactions people can feel.

Supporting statement:

I bring systems, story, sounds and dreams together to create an experience
that represents what I feel.

### AX-03 — Education

Short statement:

Make the unfamiliar approachable.

Supporting statement:

I teach the next set of curious individuals the skills and confidence to
continue building on their own.

## Identity Design Notes

The approved primary comparison viewport is `1440 × 900` (`16:10`). The
stored export is:

`design/figma/references/about/about-identity-desktop-idle-v1.png`

At desktop sizes, keep every axis short statement on two authored lines and
align the axis headings, short statements, and supporting statements across
all three columns. AX-01 breaks after `Design, build,`, with
`Test, and refine.` on its second line.

The complete Identity chapter should be visible within the initial desktop
viewport and remain overflow-safe on shorter desktop heights such as
`1440 × 800`.

Larger similar-aspect-ratio desktop checks should include `1680 × 1050`,
`1920 × 1200`, `2240 × 1400`, and `2560 × 1600`. The older
`2500 × 1350` target may remain a secondary, wider validation size, but it does
not replace the approved `1440 × 900` baseline.

At larger desktop sizes, preserve:

- The relative width of the left content and right spear regions
- The hierarchy between the display statement, opening statement, and axes
- The relative typography scale
- The vertical position of each content region
- The spacing between the Identity-axis records
- The spear's scale and relationship to the chapter navigation
- The overall balance of positive and negative space

Do not apply one uniform transform to stretch the baseline composition. Use
relative structural tracks, viewport-aware gaps, and bounded typography and
spacing. Allow intentional negative space to grow while preventing the
narrative from remaining inside a small `1440px` island. Keep paragraph line
lengths controlled.

The About shell owns one persistent left-side chapter-header anchor. Its
top-left position and reserved bounding region are shared by:

- `01 / IDENTITY`
- `02 / TRAJECTORY`
- `03 / OUTSIDE THE SYSTEM`
- `04 / INTERACTIVE INFLUENCES`
- `05 / CURRENT DIRECTION`

Pointer selection, keyboard activation, and active-section detection replace
the text in this region without moving the anchor. Individual sections retain
semantic headings without duplicating the persistent visual title for
assistive technology.

Visible content must include:

- Chapter label
- Name
- Location
- Creative signature
- Display statement
- Full opening statement
- All three Identity-axis records
- Each axis short statement
- Each axis supporting statement

Do not hide axis supporting content behind hover or focus.

Preserve the existing right-side chapter-navigation and spear composition.

Use a compact three-zone composition for:

1. Display and opening statements
2. Identity-axis records
3. Identity metadata

On the left side:

- Keep `CREATIVITY WAS ALWAYS PART OF THE SYSTEM.` as the primary display
  statement.
- The approved Identity desktop idle composition displays the statement across
  four lines:

  `CREATIVITY`

  `WAS ALWAYS`

  `PART OF`

  `THE SYSTEM.`

- Position the opening statement beside or immediately below the display
  statement.
- Keep the opening statement readable and secondary to the primary display
  statement.
- Begin the three-axis region high enough for all three records to remain
  visible.
- Keep each supporting statement concise enough to render comfortably within
  its axis column.
- Reduce unnecessary vertical gaps before reducing readable text sizes.
- Keep all meaningful system and metadata text readable.
- Vertically balance the complete left-side composition while accounting for
  the persistent header.
- Preserve clear separation between the display statement, opening statement,
  and identity-axis records.
- Do not add oversized decorative background words.
- Do not introduce an internal chapter scrollbar.

Use the current page-header and chapter-navigation typography as the minimum
readable reference for system, identifier, and metadata text.

The right-side composition should preserve:

- The persistent chapter navigation
- The Identity chapter’s quiet spear posture
- Substantial negative space around the spear
- The shared Home-aligned `04` scene index

The bottom Identity metadata should preserve Jaylan Wu as the primary identity,
New York City as location, and `alter-egoist` as a restrained creative
signature rather than a second identity.

About's site-level `Index` action and compact chapter controls reuse Home's
available-navigation hover and keyboard-focus behavior. Chapter controls remain
visually distinct through their compact layout and scoped red accent.

The Identity axis wording above is synchronized with the supplied export and
runtime data. Red identifies the current About chapter and the right-navigation
hover/focus state; orange remains the default active-system accent elsewhere,
lavender represents personal context, and red continues to belong to the spear.

The spear should function as a quiet anchor during Identity.

Avoid:

- Thrusting
- Target locking
- Pointer-following behavior
- Impact effects
- Red interface disruption
- Constant decorative movement
---

# 2. Trajectory

Use official organization, degree, and role wording.

For every record, include only verified facts.

Introductory statement:

I have learned to move between software, physical systems, organizational
workflows, and teaching. Each environment has changed how I think about the
people, spaces, and systems that technical work must support.

Narrative progression:

technical foundation → early teaching and mentorship → applied technology →
professional software engineering → instructional systems and leadership →
formal teaching

Published record order:

1. `EDU-001` — Dual-Degree Undergraduate — New York University
2. `EXP-001` — Teaching Assistant — New York University
3. `EXP-002` — Technology Solutions Intern — New York Mets
4. `EXP-003` — Software Engineering Intern — Major League Baseball
5. `EXP-004` — Instructional Facilities Manager — New York University

`EXP-005` — New York University Adjunct Professor remains incomplete and
unpublished.

## Education Record

Identifier: EDU-001

Publication status:

Published

Organization mark:

New York University

Display title:

Dual-Degree Undergraduate

Selected-record display title:

DUAL-DEGREE
UNDERGRADUATE.

Verification note:

Confirm the official styling of "College of Arts and Sciences" and both "Bachelors of Science" degree names before final publication. The supplied wording remains the source wording until that confirmation is available.

Institution:

New York University

School or program:

* College of Arts and Sciences
* Tandon School of Engineering

Degree 1:

Bachelors of Science in Computer Science

Degree 2:

Bachelors of Science in Computer Engineering

Minor or additional study:

Game Engineering

Start year:

2020

Graduation year:

2025

Context:

I entered college following the technical path that seemed expected of me.
Studying computer science and computer engineering gave me room to move
between algorithms, software design, computer architecture, embedded systems,
and the boundary where hardware and software meet.

Foundation:

Computer science taught me to think through abstraction and software.
Computer engineering made those systems physical. Together, they showed me
how decisions made at one layer affect everything built above it.

Reflection:

Game Engineering was where the parts of my education that had felt separate
began to connect. Building games let me use technical ideas in service of
story, atmosphere, and play. For the first time, engineering felt like a place
where my creative interests belonged and I genuinely thought that I was having fun.

Personal axes:

Engineering, Game design

Source note for later Outside the System review:

Study abroad in Paris, France.

## New York University Teaching Assistant

Identifier: EXP-001

Publication status:

Published

Organization:

New York University

Organization mark:

New York University

Official role:

General Engineering EG1004 Teaching Assistant

Display title:

Teaching Assistant

Selected-record display title:

TEACHING
ASSISTANT.

Interpretive statement:

Learning through teaching.

Date range:

August 2022 - August 2025

Course or program:

General Engineering, EG1004

Environment or context:

As a Teaching Assistant, I helped first-year students work through unfamiliar tools and turn their ideas into semester-long engineering projects. Working with faculty on the course also showed me how much the structure around a classroom shapes the experience of both students and the people teaching them.


Defining responsibility or contribution:

I mentored teams of four as they moved from identifying a problem to building,
testing, and presenting a working prototype. My role was not only to help
students resolve technical problems, but to ask questions that helped them
understand their decisions and continue independently.

I also contributed to technical and inclusive-leadership training for the
larger Teaching Assistant community.

What I learned:

Teaching showed me that understanding a technical concept and explaining it
clearly are different skills. I learned to adapt my explanations to different
levels of experience, make unfamiliar ideas feel approachable, and treat
iteration as part of both engineering and learning.

How the experience changed my direction:

This was where education became a meaningful part of my engineering practice.
Helping students gain confidence in unfamiliar technical work made me
interested not only in building systems, but in creating the conditions that
help others understand and build them too.

Personal axes:

Engineering, Education

Supporting themes:

Mentorship, Technical communication, Prototyping, Inclusive instruction,
Student confidence


## New York Mets

Identifier: EXP-002

Organization:

New York Mets

Organization mark:

New York Mets

Official role:

Technology Solutions Intern

Display title:

Technology Solutions Intern

Date range:

May 2023 - October 2023

Environment or context:

I worked at Citifield over the summer for the Technology Solutions department on the Business Operations side of the company as an intern. Throughout this time, I learned a lot about how a sports company operates and how they target their paying audience to come to baseball games.

Defining responsibility or contribution:

I was primarily in charge of being the ambassador of a Facial Recognition Ticketing system that is essentially a fast pass for the user base that opted in for the platform. This meant that I was constantly interacting with fans and trying to pitch the benefits of the program. When I was not doing this work, I was analyzing data from patrons and creating presentations on how we should market our technology to our customers.

What I learned about technology in physical or operational environments:

There are a lot of individuals who are not familiar with the technology that I use on a daily basis. Explaining these concepts and how to best use these devices to these individuals was a difficult learning experience for me but as the summer passed, I felt as if I was able to explain what I learned in school and at the internship about.

How the experience changed my direction:

I thought about how technology could enhance our entertainment experiences and that working in entertainment was a real option for me. Before this experience, I only really thought about the big name companies and how they are what I should be reaching for since that was all that was being talked about around me. After this experience, I really thought about what I enjoy and what I would want to pursue for myself.

Supporting themes:

Physical technology, technology solutions

## Major League Baseball

Identifier: EXP-003

Organization:

Major League Baseball

Organization mark:

Major League Baseball

Official role:

Full Stack Software Engineering Intern

Display title:

Software Engineering Intern

Date range:

June 2024 - August 2024

Environment or context:

I was on the Baseball Enterprise as a Full Stack engineering developing webapps that support various teams throughout MLB. 

Defining responsibility or contribution:

My main project during the internship was to create an admin dashboard on an existing application to allow engineers, managers, and other stakeholders be able to turn off certain CRON jobs during specific times of the year. This meant that I had to implement a page on the website that has a table that provides all the necessary information for these users and an option that turns of the specified CRON job. I also worked on creating Slack bots that would notify users about the start time of MLB, MiLB, and external games that were occuring throughout the country. The bot would notify the users when the games were starting, who was involved, where the game was happening, and what type of game was being played. Lastly, I was tasked with the migration of a legacy application that needed to be updated to modern systems. This application was an marketing email application that allowed users to select the type of audience they would like to reach out to and when to send those specified emails. This application was created by the Data Engineering team and was originally built on ruby on rails and Next.js and the new stack involved react and springboot.

What I learned about software engineering and organizational systems:

This is where my knowledge and opinion of full stack engineering concepts were really grounded, throughout this experience I really learned about how a full stack environment works and was able to gain the knowledge I needed about hosting, workflows, and engineering stacks.

How the experience changed my direction:

I was given a lot of freedom in choosing how I wanted to approach certain problems. Even though this took a lot of questions for my managers, I really was able to learn a lot since I was thrown into the deep end of the engineering workflow.

Supporting themes:

Modernization, automation, reliability, cloud infrastructure, full stack

## NYU Instructional Facilities Manager

Identifier: EXP-004

Organization:

New York University

Organization mark:

New York University

Official role:

Instructional Facilities Manager

Display title:

Instructional Facilities Manager

Date range:

September 2025 - Present

Environment or context:

In this role, I manage over 100 Teaching Assistants and oversee the operations of lab related activity for a first year general engineering introduction course. In this course, all first year matriculated engineering students learn the basics of engineering concepts and use those skills to create a semester long design project. I help with the course development of the course and the creation of tools that help support the facilitation of these student projects.

Defining responsibility or contribution:

* ensure that all safety procedures are being conducted in the space at all times of operations. we have lab classrooms as well as a general working space that is open for TAs and students to work on their projects. there are many electrical and mechanical components that i give guidance to using
* act as a project manager and QA engineer for the course website that helps professors, staff, TAs, and students track the progress of their projects. tools such as scheduling, attendance, and project management are added to this website. This website is made on an Express, React, Node, and MySQL stack
* develop and conduct technical trainings for teaching assistants to help develop teaching and hard skills that are needed to aid student throughout their projects

What I learned about instructional infrastructure:

Even with education, there's a cyclical trial and error life style where we keep redeveloping the course to see how the stduents react to different coursework. over the course of my time here, I was able to see how different students react to different forms of the class. There was once a time where the course was heavily reliant on the workshops of the class. This meant that there were weekly lab reports and a very heavy workload with a course project on top of it. Now, there is a heavy emphasis on creating a good project for the course. I oversee the whole prototyping process where students create circuits and 3D printed project that achieve a certain solution to a problem that they identify early on in the semester.

How the experience connects engineering and education:

Through this experience, I really developed my passion for teaching students and guiding students to create and learn things that they are excited about. Helping these students really develop the skills to learn about engineering and how to study/think about engineering as a whole is exciting for me and I love to see what they come up with to solve different problems.

Supporting themes:

Operations, project management, managerial roles, problem solving.

## NYU Adjunct Professor

Identifier: EXP-005

Status: INCOMPLETE AND UNPUBLISHED — verify the official role spelling and the
future September 2026 start before adding this record to published About data.

Organization:

New York University

Organization mark:

New York University

Official role:

Adjuct Professor

Display title:

Adjunct Professor

Course or department:

General Engineering, EG2001

Date range:

September 2026 start

Environment or context:

This is the official course that first-year TAs have to take in order to be ready for their role as a Peer Mentor for EG1004. This formalized course provides the proper training and mentorship skills that a TA may need throughout their 3-year contract with the course. 

Subjects or skills taught:

Subjects include, microcontroller coding, Computer aided design, circuitry, and basic manufacturing skills. 

Defining responsibility or contribution:

For this course, I'm in charge of the technical training that is attached to the course. this includes creating the content for the course, facilitating it to the students, and advisement.

Supporting themes:

Teachining.

## Trajectory Organization Marks

The selected Trajectory record may display the associated organization's
official mark as an oversized, faint background identifier.

Associations:

- `EDU-001` → New York University
- `EXP-001` → New York University
- `EXP-002` → New York Mets
- `EXP-003` → Major League Baseball
- `EXP-004` → New York University
- `EXP-005` → New York University, but the record remains unpublished

Requirements:

- Show only the mark associated with the currently selected record.
- Apply grayscale treatment non-destructively through CSS.
- Preserve the original logo proportions.
- Use very low opacity so the mark does not compete with the record title
  or body content.
- Allow the mark to be partially cropped by the selected-record region.
- Use a neutral foreground or muted treatment.
- Do not tint organization marks red, orange, or lavender.
- Do not display logos as badges, cards, or a wall of employers.
- Treat the images as decorative because the organization is already
  represented through semantic text.
- Use a restrained opacity transition when the selected record changes.
- Remove or shorten that transition for reduced-motion users.
- Reuse one New York University asset for all NYU records.
- Store organization marks within the About feature.
- Use named position or scale variants such as `center`, `lower-right`, or
  `upper-right` rather than arbitrary record-specific pixel coordinates.
- Do not modify the source organization assets.
- Do not create a replacement mark when a suitable official asset is missing.

---

# 3. Outside the System

## Travel Statement

Write 2–4 sentences answering:

* Why does travel matter to me?
* What do I notice in unfamiliar environments?
* How have independence and observation shaped me?
* Which details attract my attention?

Draft:

I fell in love with traveling when I was in high school. I went on my first international trip to Taiwan and Japan with my family and really loved exploring my own culture as well as explore one that was different from my own. I really love exploring it through the food of the culture. Since then, I studied abroad in the Paris, France in the Spring of 2023. Since then, I've also had a 6 week solo trip to Japan post graduation. Countries that I have visited include, USA, Canada, France, Belgium, UK, Sweden, Spain, Portugal, Italy, the Netherlands, & Taiwan. In all these places, I like to visit nature, historical monuments, and local restaurants to really embed myself int he cutlure.

## Photography Statement

Write 1–3 sentences answering:

* What do I photograph?
* What kinds of spaces, moments, or details attract me?
* Why do I keep photographs?

Draft:

When I take my camera out, I usually look for the symmetry in nature. Many of my photos involve having a centerpiece and the symmetry around it. Most of these are taken on trips that are done solo. When I'm around my friends, I try my best to take candid photos of them where they are most comfortable with themself.

## Photography Records

Repeat this section for approximately 6–12 photographs.

### Photograph

Identifier: PHOTO-001

Runtime asset path:

`src/features/about/assets/photography/PHOTO-001-fuji-2025.jpg`

Location:

Yamanashi

Country:

Japan

Year:

2025

Orientation:

Landscape

Featured:

true

Alt text describing what is visibly present:

Fisherman in the lake.

Personal caption:

fishing.

Camera:

Sony α6000

Why this photograph belongs in the sequence:

This was one of my favorite photos that I was able to capture in Japan. I was lucky to be able to catch Fuji on a sunny day and it was just a surreal experience all around.

### Photograph

Identifier: PHOTO-002

Runtime asset path:

`src/features/about/assets/photography/PHOTO-002-sendai-lilies-2025.jpg`

Location:

Sendai

Country:

Japan

Year:

2025

Orientation:

Landscape

Featured:

false

Alt text describing what is visibly present:

Blooming lily in a sea of lilypads.

Personal caption:

Lilies.

Camera:

Sony α6000

Why this photograph belongs in the sequence:

Floral images are fun to take.

### Photograph

Identifier: PHOTO-003

Runtime asset path:

`src/features/about/assets/photography/PHOTO-003-otaru-2025.jpg`

Location:

Mount Otaru

Country:

Japan

Year:

2025

Orientation:

Landscape

Featured:

true

Alt text describing what is visibly present:

Torii gate at the top of the world

Personal caption:

sky torii

Camera:

Sony α6000

Why this photograph belongs in the sequence:

This is just a surreal image of a torii gate at the top of Mount Otaru.

### Photograph

Identifier: PHOTO-004

Runtime asset path:

`src/features/about/assets/photography/PHOTO-004-toyama-ramen-2025.JPG`

Location:

Toyama

Country:

Japan

Year:

2025

Orientation:

Landscape

Featured:

false

Alt text describing what is visibly present:

Ramen in Toyama

Personal caption:

ramen

Camera:

Sony α6000

Why this photograph belongs in the sequence:

A personal favorite meal that I had during my trip

### Photograph

Identifier: PHOTO-005

Runtime asset path:

`src/features/about/assets/photography/PHOTO-005-hakodate-2025.JPG`

Location:

Hakodate

Country:

Japan

Year:

2025

Orientation:

Landscape

Featured:

false

Alt text describing what is visibly present:

Hakodate port at sunset

Personal caption:

a port at sunset

Camera:

Sony α6000

Why this photograph belongs in the sequence:

I stayed around this specific spot for a couple hours waiting for just the right photo to take. I was really glad to have caught the sunset on this day since and it has been really memorable for me

### Photograph

Identifier: PHOTO-006

Runtime asset path:

`src/features/about/assets/photography/PHOTO-006-jimbocho-2025.JPG`

Location:

Jimbocho

Country:

Japan

Year:

2025

Orientation:

Landscape

Featured:

false

Alt text describing what is visibly present:

The inside of a bookstore located in bookstore town

Personal caption:

stories.

Camera:

Sony α6000

Why this photograph belongs in the sequence:

I really liked the orientation and structure of the photo, no matter where you look there's a book and each of those contains a story that someone put their all into.

### Photograph

Identifier: PHOTO-007

Runtime asset path:

`src/features/about/assets/photography/PHOTO-007-chicago-2026.JPG`

Location:

Chicago

Country:

United States of America

Year:

2026

Orientation:

Landscape

Featured:

false

Alt text describing what is visibly present:

Two friends sitting on a bench in front of a lake

Personal caption:

a bench at noon

Camera:

Sony α6000

Why this photograph belongs in the sequence:

I like the composition of this photo and really shows the intimacy and relationships people have with each other. 

---

# 4. Interactive Influences

Choose approximately 3–6 games.

Status: INCOMPLETE — two completed influence records are supplied below; at least one additional selection remains to be curated.

Do not rank them.

Do not write conventional reviews.

Repeat this section for each game.

## Game Influence

Identifier:

INF-001

Game title:

Metaphor: ReFantazio

Medium:

Video Game

Release year:

2024

Featured quote:

“It is okay to dream of a fantasy.”

Quote verification note:

Confirm the exact wording, capitalization, and punctuation from the game before
final publication.

Influence categories:

Interface design, Visual direction, Systems design, Worldbuilding, Social
themes

Specific element that influenced me:

The skills menu immediately stood out to me. The artwork of Will lying across
the screen makes the interface feel connected to his perspective rather than
like a separate layer placed over the game. Instead of replacing the experience
with text and statistics, the menu uses illustration and composition to make
navigating the character’s abilities enjoyable in its own right.

Display reflection:

*Metaphor: ReFantazio* showed me how every part of a game can contribute to one
cohesive experience. Its interface, strategic combat, music, and worldbuilding
all feel connected to the same creative direction, while its fantasy setting
still makes room for direct conversations about racism, class, and the kind of
future people are allowed to imagine.

That balance stayed with me personally. As I learn to follow a creative
direction that feels meaningful to me, the game reminds me that fantasy does
not have to be an escape from the world. It can also be a way of questioning
what surrounds us and imagining something different.

Design takeaway:

Treat menus and supporting systems as part of the experience rather than as
spaces the player must pass through to return to it.

## Influence Record

Identifier:

INF-002

Work title:

Persona 4 Golden

Medium:

Video game

Release year:

2012

Featured quote:

“Next year and the year after that... No matter what happens, I’m sure we’ll
be okay.”

Quote attribution:

Yukiko Amagi

Quote verification note:

Confirm the exact wording, capitalization, punctuation, speaker, and scene
before final publication.

Influence categories:

Character relationships, Everyday life, Storytelling, Atmosphere, Visual
identity

Specific element that influenced me:

The moments that stayed with me most were the times when the characters chose
to include one another in their daily lives. Group activities rarely felt
isolated to Yu, and the way the cast welcomed Nanako made them feel like a real
friend group rather than characters waiting for the protagonist.

Yu’s quieter moments with Nanako and Dojima also made returning home feel as
meaningful as progressing through the larger story. As Yu became familiar with
Inaba, I felt myself settling into the town alongside him. Even the older
polygonal models added to that sense of charm and identity rather than taking
away from it.

Display reflection:

*Persona 4 Golden* showed me that relationships feel strongest when characters
have lives beyond the protagonist. The invitations, group activities, and
quiet family scenes made the cast feel like people who would continue caring
for one another even when the player was not present.

As I have gotten older, I have become more deliberate about making time for my
friends and family rather than assuming those relationships will maintain
themselves. The game made me want to create characters whose connections are
built through ordinary, intentional moments—not only through the dramatic
events of the story.

Design takeaway:

Build relationships across the entire cast, not only between each character
and the protagonist. Give every character a meaningful place within the group,
the story, and the gameplay.

## Influence Record

Identifier:

INF-003

Work title:

Kafka on the Shore

Medium:

Novel

Author:

Haruki Murakami

Original publication year:

2002

Featured quote:

“Silence, I discover, is something you can actually hear.”

Quote verification note:

Confirm the exact wording and punctuation against the edition used before
final publication.

Influence categories:

Atmosphere, Alternating narratives, Surrealism, Symbolism, Ambiguity,
Environmental storytelling

Specific element that influenced me:

The forest and the dreamlike town within it stayed with me most. The setting
felt suspended between reality, memory, and something more symbolic. Even when
I could not fully explain what was happening, the atmosphere made the emotions
of the scene feel understandable.

The alternating narratives created a similar sense of uncertainty. Each
storyline revealed only part of the larger picture, which kept me searching
for connections while leaving room for my interpretation to change.

Display reflection:

I finished *Kafka on the Shore* shortly after spending six weeks traveling
alone through Japan. That trip taught me to value solitude as a space where I
could think about who I was and what I wanted without constantly measuring
myself against the expectations surrounding me.

The novel helped me see uncertainty in a similar way. A story does not always
need to resolve every mystery for it to feel meaningful, just as I do not need
to know exactly where my path will lead before choosing a direction. That
uncertainty has gradually become less of a source of anxiety and more of
something that pushes me to imagine what my life and creative work could
become.

Design takeaway:

Use atmosphere, symbolism, and ambiguity to create spaces that audiences can
interpret for themselves. An environment can communicate a feeling before its
meaning is fully understood.

## Influence Record

Identifier:

INF-004

Work title:

Neon Genesis Evangelion

Included works:

* Neon Genesis Evangelion, Episodes 1–26
* The End of Evangelion

Medium:

Anime television series and film

Release years:

1995–1997

Featured quote:

“You are the only person who can take care of yourself.”

Quote verification note:

Confirm the exact wording, punctuation, translation, speaker, and source scene
before final publication.

Influence categories:

Visual direction, Composition, Identity, Emotional storytelling, Interface
design, Ambiguity

Specific element that influenced me:

The ending of *The End of Evangelion* stayed with me because of how directly it
places the audience inside Shinji’s mental state. Its shifts in imagery,
composition, sound, and perspective make his fear and vulnerability feel like
part of the form of the film rather than emotions explained only through
dialogue.

The ending does not present facing yourself as a clean or simple decision.
Shinji is forced to confront the ways he avoids other people, the pain that
comes with connection, and whether he is willing to return to an uncertain
world.

Display reflection:

I first watched *Evangelion* during the summer between high school and college,
when I was thinking more seriously about how I communicated with others and
the relationships I carried into the next part of my life. I connected with
Shinji’s timidness and his difficulty expressing what he needed, even when he
wanted to be understood.

The series also made me think about how identity changes depending on who is
looking at us. The person my family knows is not exactly the same person my
friends or colleagues see, yet each version still belongs to me. When I
returned to the series years later, its ending felt less hopeless than I had
remembered. Beneath its painful emotions, I found an insistence that
understanding and caring for yourself is what makes connection with others
possible.

Connection to Longinus:

*Evangelion* helped shape the visual language behind Longinus, but its
influence goes beyond the spear, typography, or interface references. It
showed me that technical systems, composition, stillness, and visual
disruption can carry emotional meaning. Longinus draws from those principles
without attempting to reproduce the series’ identifiable artwork or
interfaces. :contentReference[oaicite:0]{index=0}

Design takeaway:

Use visual and technical systems to communicate emotions that dialogue alone
cannot fully express. Difficult feelings can be presented honestly without
removing the possibility of hope.

---

# 5. Current Direction

## Direction Statement

Write 3–6 sentences answering:

* What kind of software engineer do I want to become?
* What kinds of systems or experiences do I want to build?
* How do games, real-time graphics, and interactive technology fit?
* How does teaching remain part of my future?
* What qualities should my future work combine?

Draft:

My goal is to become an educator specifically in the design space. Hopefully I can contribute to the game design field in a way and I have a game in mind that I want to be able to create some day. However, right now, I really want to dive into creating beautiful menu UI as well as learn more about the music and sound effects that go into games.

## Current Areas of Exploration

Only include areas I am actively exploring.

* Sound design
* User Interface and User Design
* 3D modeling specifically Blender

## What Longinus Represents

Write 2–4 sentences explaining:

* Why this portfolio is an interactive system
* What skills and interests it brings together
* What I am learning through the project

Draft:

Longinus is a creative starting point for me that also shows other my love of Evangelion. I watched the show at a very vulnerable time of my life and it really effected me in a way that other shows haven't done before. the creative direction of the show and how the ending is so different from other shows was something that I thought about for days. With the skills that I've developed in college and with the skills I'm looking to build upon, Longinus was the testing ground that I feel really encapsulates what I want to work on.

## Closing Statement

Write a concise and forward-looking closing statement.

Draft:

You are (not) alone.

## Final Actions

Select the actions that should appear:

* [X] View Projects
* [ ] View résumé
* [X] Contact
* [X] Return Home

Résumé path or URL:

[INCOMPLETE — no résumé destination supplied; the résumé action is not selected]

Contact method:

Email me at jaylan.wu@nyu.edu
