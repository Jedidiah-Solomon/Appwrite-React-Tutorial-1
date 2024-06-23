# APPWRITE + React 🤝

### Introduction

This project integrates Appwrite with a React application using Vite as the build tool. Appwrite is a backend service that simplifies backend development tasks. This README provides instructions on setting up and running the project.

### Prerequisites

Before starting, make sure you have the following installed on your machine:

```
Node.js (v14.x or later)
npm (Node Package Manager)
```

### Installation

Clone the repository:

```
git clone <repository_url>
cd appwrite-react-app
```

### Install dependencies:

`npm install`

### Available Scripts

In the project directory, you can run:

`npm run dev`
Runs the app in development mode using Vite. Open http://localhost:3000 to view it in the browser.

`npm run build`
Builds the app for production to the dist directory. It bundles the app for optimal performance.

`npm run lint`
Lints all JavaScript and JSX files in the project using ESLint. It reports unused disable directives and has a maximum of 0 warnings.

`npm run preview`
Previews the production build of the app locally using Vite's preview server. Useful for testing the built app before deployment.

### Project Structure

1. src/: Contains the main source code files.
2. pages/ and components/: React components and different pages.
3. assets/: Static assets like images, fonts, etc.
4. appwrite/: Configuration files for Appwrite integration.
5. .env: Environment variables file for configuring Appwrite endpoints, project IDs, etc.
6. vite.config.js: Vite configuration file for customizing build and development settings.
7. public/: Public directory for static assets.

### Configuration

Update .env with your Appwrite configuration details:

```
VITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_PROJECT_ID=your_project_id
VITE_DATABASE_ID=your_database_id
VITE_COLLECTION_ID_NOTES=your_collection_id
```

Adjust vite.config.js for specific development or build requirements.

## Learn More

[Vite Documentation ](https://vitejs.dev/)
[React Documentation](https://react.dev/)
[Appwrite Documentation](https://appwrite.io/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
