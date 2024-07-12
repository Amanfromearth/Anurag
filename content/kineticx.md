---
description: Kineticx - A tool for generating typography videos from descriptions in seconds, perfect for marketing, content creation, and presentations.
Metatitle: How I Built Kineticx | Typography Video Generator
Pagetitle: How I Built Kineticx - Creating a Typography Video Generator
Pagedescription: Discover the journey of building Kineticx, a tool that generates typography videos instantly. Learn about its features and the technologies used.
Metadescription: Explore the development process of Kineticx, a typography video generator built with Next.js, Remotion, Zustand, and Vercel. Learn about its features and upcoming updates.
---

# How I Built Kineticx

Kineticx is a tool that generates typography videos from descriptions in **seconds**. These videos are perfect for marketing, content creation, presentations, and more.

![remotion website](/remotion.webp)

## A Video Generated in Kineticx

I gave the prompt "make a video about protecting wildlife in Western Ghats", and here's what Kineticx created:

<video controls>
  <source src="/wild_karnataka.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Want to try it yourself? Head over to [Kineticx](https://kineticx.vercel.app/dashboard) and create your own video!

## Features

### Edit Frame

Added an option to select and edit any frame's text. This was built using Zustand to manage the global state of selecting frames across components.

![kineticx frame editing option](/frameedit.webp)

### Choosing Colors

Added an option to select from four different color sets from the colors tab. This was built using Zustand to manage the global state of selecting colors across components.

![kineticx color change option](/coloredit.webp)

## Upcoming Features (Work in Progress)

- Background change to image or video
- Music change

## Technologies Used

Building Kineticx was an exciting journey that pushed me to explore and integrate various technologies. Here's a rundown of the main tech stack I used:

### Next.js

I chose Next.js as the foundation for Kineticx, as it offers server-side rendering, easy routing, and a great developer experience. The fast refresh feature saved me countless hours during development.

### Remotion

Remotion is a library that can be used to make videos with React. A video is basically a collection of frames, so Remotion takes in a set of frames made in React and CSS and stitches them together to form a video. It allowed me to programmatically create videos using React components. Learning Remotion was challenging but incredibly rewarding - it opened up a whole new world of possibilities for dynamic video creation in React.

### Zustand

Global state management in Kineticx is handled by Zustand. Its simplicity and performance are why I chose Zustand. It made managing complex state across components a breeze.

### Vercel

I deployed Kineticx on Vercel for its seamless integration with Next.js and automatic deployments.

Each of these technologies played a crucial role in bringing Kineticx to life. The learning curve was steep at times, but the end result made it all worthwhile.
