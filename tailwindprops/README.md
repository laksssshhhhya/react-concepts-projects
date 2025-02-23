# React Card Component Project

This is a simple React project demonstrating the use of props and components. The project renders multiple `Card` components with different data.

## Features
- Uses functional components in React
- Passes props to child components
- Renders a card layout with an image and text

## Project Structure
```
react-concepts-projects/
│-- src/
│   ├── components/
│   │   ├── Card.js
│   ├── App.js
│   ├── App.css
│-- public/
│-- package.json
│-- README.md
```

## Components

### `App.js`
- The main component that renders two `Card` components with different props.
- Uses `useState` (although not used in this example).

### `Card.js`
- A functional component that receives `username` and `text` as props.
- Displays an image and some text in a styled card.

## Technologies Used
- React
- Tailwind CSS (for styling)

## Preview
The application renders two cards with different usernames and text values.

![Preview](https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g)
