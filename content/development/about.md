---
title:  About this site
heroImage:  tokyo.jpg
heroHeight: two-thirds
---


# **About** this site

I haven't had my own site for several years now, so I thought it was about time I made a fresh one. It's a good excuse to learn some new tech and practice some design.


### Goals ###

I needed an online presence to point people to if they were looking for more information on what web and design work I do, on what I can do for them, or on what I've done to date. Likewise to land photography side-jobs for things like AirBnB, you need an online photography portfolio. Two birds, one stone.

Bonus goals for this project: Having a code-playground for playing with the latest CSS and JavaScript. Writing tutorials and thoughts on this and that, and having an outlet for whatever else springs to mind. Open-sourcing the project to make some sort of dev-friendly lightweight CMS out of it, along the same lines as Jekyll.


## Under the hood ##

In a nutshell, the site is a single-page-application, built from the ground up with React and React Router. It generates a site tree from Markdown files. When you land on a route (when the URL appears to be a sub-page of the domain) it fetches a markdown file for that route, converts it to HTML, checks if the route also wants to show a header image/video, then updates the components.


### Build system ###

Locally I use Node, with Webpack and Babel to transpile any ES6 to ES5 and bundle it up into a single file, and Gulp to take care of the other tooling. I'm using BrowserSync for local development, with watcher tasks to refresh the page whenever any code or content changes.

## Visual design ##

I designed this in Sketch App, after creating a mood-board from various sources.
