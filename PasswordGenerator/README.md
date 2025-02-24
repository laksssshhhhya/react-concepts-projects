# React Password Generator

This is a simple **password generator** built using React and hooks like `useState`, `useEffect`, `useCallback`, and `useRef`. The app allows users to generate random passwords with customizable options.

## Features

- Adjustable password length (6 to 20 characters)
- Option to include numbers
- Option to include special characters
- One-click copy to clipboard functionality

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/laksssshhhhya/react-concepts-projects.git
   ```

2. Navigate to the project folder:

   ```sh
   cd react-concepts-projects
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

```
react-concepts-projects/
│-- src/
│   ├── App.js
│   ├── App.css
│-- public/
│-- package.json
│-- README.md
```

## Components

### `App.js`

- Uses `useState` for managing password length and character options.
- Uses `useCallback` to optimize password generation and copying functions.
- Uses `useEffect` to regenerate passwords when options change.
- Uses `useRef` for copying the generated password to the clipboard.

## Technologies Used

- React
- Tailwind CSS (for styling)
- JavaScript ES6+

## How It Works

1. Adjust the **password length** using the slider.
2. Toggle **Numbers** and **Special Characters** checkboxes to include/exclude them.
3. The password updates automatically when settings change.
4. Click **Copy** to copy the generated password to the clipboard.

## Preview

Here’s how the app looks:

![Preview](Screenshot\Password-generator.png)
