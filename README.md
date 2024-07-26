# Portfolio Website

Welcome to the repository for my [portfolio](https://emmanueljolaiya.com) website! This site showcases my projects, skills, and experience. It was built using Next.js, styled with Tailwind CSS, and deployed on Vercel.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Libraries Used](#libraries-used)
- [Deployment](#deployment)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

This portfolio website is designed to be a modern and responsive showcase of my work and capabilities.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Project Showcase**: Displays my work and projects with details and links.
- **Articles Showcase**: Dynamically retrieve articles from Medium, Spatialnode, and Hashnode using RSS feeds.
- **Media Showcase**: Displays my featured media, including podcasts, talks, videos, and others.
- **Configuration file**: A configuration file is used to enable easy site-wide updates.
- **Lightweight & Fast**: Built with performance in mind.
- **Dark/Light Mode**: Toggle between dark and light themes to suit your preference.
- **Great SEO, Accessibility and Performance**: See [https://github.com/jeafreezy/portfolio/issues/1](https://github.com/jeafreezy/portfolio/issues/1)

## Setup

To get started with the project locally, follow these steps:

1. **Clone the Repository**

```bash
git clone https://github.com/jeafreezy/portfolio.git
cd portfolio
```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:

```bash
  yarn install
```

3. Run the Development Server

```bash
  yarn dev
```

The website will be available at http://localhost:3000.

To create a production build of the site, run:

```bash
  yarn build
```

Then start the production server with:

```bash
  yarn start
```

## Libraries Used

1. **[Next.js](https://nextjs.org/)**: A React framework for building server-side rendered and static websites.
2. **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for designing custom UIs.
3. **[rss-parser](https://www.npmjs.com/package/rss-parser)**: Parses RSS feeds to retrieve articles and updates.
4. **[htmlparser2](https://www.npmjs.com/package/htmlparser2)**: Parses HTML content within RSS feeds.
5. **[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)**: Merges Tailwind CSS classes to avoid conflicts.
6. **[framer-motion](https://www.framer.com/api/motion/)**: Provides animations and transitions for React components.
7. **[@headlessui/react](https://headlessui.dev/)**: Provides UI components like modals for building accessible user interfaces, such as image galleries.
8. **[@next/third-parties](https://nextjs.org/docs/messages/next-script-for-ga)**: Provide support to easily add Google Analytics to the application.

## Deployment

The website is deployed using [Vercel](vercel.com). Every push to the main branch triggers an automatic deployment.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Thanks to the Next.js documentation and Tailwind CSS documentation for their comprehensive guides and resources.

Special thanks to Vercel for their easy deployment solutions.

All icons used are from [SimpleIcons](https://simpleicons.org).

UI inspired by [Tailwind UI](https://spotlight.tailwindui.com/) and [Dillion](https://dillion.io/).

Feel free to reach out if you have any questions or need further information!
