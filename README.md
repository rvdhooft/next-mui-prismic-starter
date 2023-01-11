# Prismic + Next.js + MUI Multi-Page Starter

This project provides a starting point for a multi-page website including homepage, information pages, and navigation. This project builds off of the [Prismic Community starter][original] for Next & Prismic.

- **Demo**: [Open live demo][live-demo]
- **Learn more about Prismic and Next.js**: [Prismic Next.js Documentation][prismic-docs]
- **Learn more about MUI**: [MUI Documenation][mui-docs]

## 🚀 Quick Start

To start a new project using this starter, run the following commands in your terminal:

```sh
npx degit rvdhooft/next-mui-prismic-starter your-project-name
cd your-project-name
npx @slicemachine/init
```

The commands will do the following:

1. Start a new Next.js project using this starter.
2. Ask you to log in to Prismic or [create an account][prismic-sign-up].
3. Create a new Prismic content repository.

Next run the following command to start up slicemachine:

```sh
npm run slicemachine
```

Navigate to `http://localhost:9999`, open the Changes tab, and click the Push Changes button to push the custom content types to Prismic.

Now if you refresh the Prismic content repository, you should be able to add some content. Create at least one page, settings, and navigation.

When your content is created, you're ready to run the project:

```sh
npm run dev
```

## Optional configuration

A few environment variables have been set up that you can customize in the .env file:

1. Include a support email to be shown on the user-facing error page. Preview your changes by navigating to /500.
2. Include a LogRocket key to enable [LogRocket][logrocket] for collecting user sessions & errors. Free tier is available.

## Available Commands

Create production build:&nbsp; `npm run build`

Run production build locally:&nbsp; `npm run start`

Build & run production build locally:&nbsp; `npm run preview`

Create production build & analyze with @next/bundle-analyzer:&nbsp; `npm run analyze`

Run both local dev server and slicemachine:&nbsp; `npm run dev`

Run only local dev server:&nbsp; `npm run next:dev`

Run only slicemachine:&nbsp; `npm run slicemachine`

## Documentation

To learn how to work with your new project, [**see this starter's docs**][starter-docs].

To learn more about working with Prismic, [**see the Prismic docs**][prismic-docs].

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[starter-docs]: ./docs/README.md
[live-demo]: https://next-mui-prismic-starter.vercel.app/
[original]: https://github.com/prismicio-community/nextjs-starter-prismic-multi-page
[logrocket]: https://logrocket.com/
[mui-docs]: https://mui.com/material-ui/getting-started/overview/
