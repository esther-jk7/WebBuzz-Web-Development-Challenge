# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Boundary Bytes Cricket Academy Website

Welcome to the Boundary Bytes Cricket Academy website! This project is an interactive platform dedicated to showcasing cricket tournaments conducted by the academy in various formats.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Running Locally](#running-locally)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Repository](#repository)

## Features
- **Home Page**: Overview of the academy, latest news, and featured tournaments.
- **Tournaments Section**: Detailed pages for each tournament, including formats, schedules, and results.
- **Teams Page**: Information about participating teams and player profiles.
- **Match Schedule**: Upcoming matches displayed in a calendar format with live score updates.
- **Registration Form**: Easy sign-up for teams wishing to participate in tournaments.
- **Gallery**: Photo and video uploads from past tournaments and events.
- **Contact Us**: A form for inquiries and feedback.

## Technologies Used
- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **APIs**: CricAPI (for live match data)
- **Deployment**: Vercel or Netlify

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Chakridhar2555/Chakridhar2555-WebBuzz-Web-Development-Challenge.git
   cd Chakridhar2555-WebBuzz-Web-Development-Challenge
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Install Vite**
   If Vite is not already installed in your project, run:
   ```bash
   npm install vite --save-dev
   ```
   Or, if you're using Yarn:
   ```bash
   yarn add vite --dev
   ```

4. **Verify vite.config.js**
   Ensure that your `vite.config.js` file is correctly set up. It should look something like this:
   ```javascript
   import { defineConfig } from 'vite';

   export default defineConfig({
     // your configuration here
   });
   ```

5. **Delete Node Modules and Reinstall**
   If Vite is already in your `package.json`, delete the `node_modules` folder and `package-lock.json` (or `yarn.lock`), then reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
   Or for Yarn:
   ```bash
   rm -rf node_modules yarn.lock
   yarn install
   ```

6. **Check Node Version**
   Ensure you're using a compatible version of Node.js (version 12 or later). You can check your version with:
   ```bash
   node -v
   ```

7. **Clear Cache**
   Sometimes caching issues can cause problems. Clear the npm cache:
   ```bash
   npm cache clean --force
   ```

8. **Run the Development Server**
   After performing these steps, start your development server:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   yarn dev
   ```

## Project Structure
```
boundary-bytes-website/
├── public/
│   └── index.html
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── styles/          # Tailwind CSS files
│   ├── App.js           # Main application file
│   └── index.js         # Entry point
└── package.json
```

## Usage
- Navigate through the website using the navigation bar.
- View detailed tournament information and player profiles.
- Use the registration form to sign up for tournaments.
- Submit inquiries through the contact form.

## Deployment
To deploy the website, you can use Vercel or Netlify. Follow their instructions to connect your GitHub repository and deploy your app seamlessly.

## Contributing
Contributions are welcome! If you have suggestions for improvements or features, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Repository
You can find the source code for this project at: [GitHub Repository](https://github.com/Chakridhar2555/Chakridhar2555-WebBuzz-Web-Development-Challenge.git)
```

## Support

For support, email chakri@teamapartx.com or join our Slack channel.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://chakridhar.teamapartx.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/n-chakridhar-624792232/)



