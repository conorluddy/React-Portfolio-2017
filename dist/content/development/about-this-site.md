---
title:  About this site
heroTitle:  About
heroSubtitle:  This site
heroImage:  designinprogress.jpg
---

# **About** this site

I haven't had my own site for several years now so I thought it was about time I made a fresh one. It's a good excuse to learn some new dev skills and practice some design. Here's how it ticks. **Warning:** this will likely be boring and confusing if you're not a web developer :)


### Goals ###

Bonus goals for this project: Having a code-playground for playing with the latest CSS and JavaScript. Writing tutorials and thoughts on this and that, and having an outlet for whatever else springs to mind. Open-sourcing the project to make some sort of dev-friendly lightweight CMS out of it, along the same lines as Jekyll.


## **Under** the hood ##

In a nutshell, the site is a single page application built from the ground up with React and React Router. It generates a site tree from Markdown files. When you land on a page/route (i.e. when the URL appears to be a sub-page of the domain) it fetches a markdown file for that route, converts it into to HTML, then checks the markdown file for metadata to get parameters for the hero and any other components, then updates the components with the correct content.


### Build system ###

Locally I'm using Node, with Webpack and Babel to transpile any ES6 to ES5 and bundle it up into a single bundle so that your browser only has a single optimised JavaScript file to fetch when the page loads.

I'm using BrowserSync for local development, with watch tasks to refresh the browser whenever any code or content changes.


### Gulp tasks

#### Assets

#### Content

#### CSS

#### Generate

#### JS

#### Webpack



## **Visual design** ##

I designed this in Sketch after creating a mood-board from various sources. The aim was to be clear and minimal so that the content and images could stand out. It's got a 50/50 split between photography and coding, as I want to use it as a portfolio for both, but they're both very different disciplines. There's no logo because I don't have a personal brand, and I'm not trying to.


### **Frontend** architecture

Components with SASS attached.
