# Example of a NextJS application with cache

This repository is the code explained in the following article: [https://blog.bam.tech/developer-news/cache-is-everything-but-simple-with-nextjs-and-react-query](https://blog.bam.tech/developer-news/cache-is-everything-but-simple-with-nextjs-and-react-query)

## Setup

Run `yarn` in the root folder

This project use yarn workspaces, so all node-modules are hoisted in the node_modules folder at the project root.
There are two different applications:

- the frontend uses the NextJS framework in the `/client` folder
- the backend uses Express in the `/server` folder

## Run

- Run the frontend application: `yarn start:client`
- Run the server: `yarn start:server`
- Go to http://localhost:3000

You should see the application

## Understand

To watch network connections you can open the developper tools (F12 with Chrome)
