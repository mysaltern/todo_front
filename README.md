TODO List App with Next.js

This project is a simple TODO list application built using Next.js with client-side data fetching and manipulation. Follow this guide to set up and run the project on your local machine.

Getting Started

Prerequisites

Make sure you have the following installed on your machine:

Node.js (version 14 or higher)

npm or yarn (depending on your preference)

1. Clone the Repository

git clone <repository-url>
cd <repository-folder>

2. Install Dependencies

# Using npm
npm install

# OR using yarn
yarn install

3. Set Environment Variables

Create a .env.local file in the project root and set the following variable:

NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api

This environment variable points to the backend API base URL.

4. Run the Development Server

# Using npm
npm run dev

# OR using yarn
yarn dev

The development server should be running at:

http://localhost:3000/

Open this URL in your browser to view the app.

Project Structure

/app
  ├── page.tsx                # The main page that renders the TODO list
  ├── todo              
      ├── TodoForm.tsx        # Form to add new TODO items
      ├── TodoList.tsx        # List of TODO items
      └── TodoItem.tsx        # Individual TODO item
/services
  └── api.ts                  # API functions to interact with backend services
/public                       # Static assets (if any)
/styles                       # Global styles (if needed)
.env.local                    # Environment variables for local development

Available Scripts

npm run dev

Runs the development server.

npm run build

Builds the project for production.

npm start

Starts the production server (after building the project).

API Integration

The application expects a backend API at the base URL specified in the .env.local file. The API should support the following endpoints:

GET /todos - Fetch the list of TODO items

POST /todos - Add a new TODO item

DELETE /todos/:id - Delete a TODO item by ID

Customization

You can customize the application by:

Updating the design using Tailwind CSS classes in the components.

Extending the functionality to include features like editing tasks or marking tasks as complete.

Building and Deployment

1. Build the Project

npm run build

2. Start the Production Server

npm start

The app will be available at http://localhost:3000/.