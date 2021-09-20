# react-social-feed

## Getting Started

:lion: First, run the development server:

```bash
npm install
npm run start
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## See in action

:rocket: Check it out on https://lvidal-react-social-network.netlify.app/

:rocket: Try it out on https://lvidal-react-social-network.netlify.app/

:round_pushpin: It renders a Feed UI built on React.

## Features

:newspaper: It shows a responsive feed & users layout using information from testing API (https://jsonplaceholder.typicode.com).

:ticket: It displays a column for the latest posts.

:ticket: It displays a column for people(users) on the comunity.

:mag: Do you want participate on the thread? It allows to write comments on the post. Comments are just saved on the localstorage

:mag: Do you want to load more comments? It allows to load 4 more comments by request.

## State

It is using Redux to handle the state. You can get the full reducer schema here. https://github.com/lvidal1/react-social-feed/blob/main/redux-schema.json

# Persisting on Localstorage

:heavy_check_mark: As a demo app, it uses Localstorage to persist/load user data when posting a new comment or signing up.

## Stack

:heavy_check_mark: Tailwind "^2.2.14". Purging css at build stage.

:heavy_check_mark: React 17.0.2

:heavy_check_mark: Redux ^4.0.5

:heavy_check_mark: Jest 27.1.1

## To-do

- Snapshot testing
- Recover user when sign-in again.
- Dark mode
