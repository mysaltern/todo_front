# TODO List App with Next.js

This project is a simple TODO list application built using **Next.js** with client-side data fetching and manipulation. Follow this guide to set up and run the project on your local machine.

---

## **Getting Started**

### **Prerequisites**
Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (depending on your preference)

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd <repository-folder>
```

### **2. Install Dependencies**

```bash
# Using npm
npm install

# OR using yarn
yarn install
```

### **3. Set Environment Variables**

Create a `.env.local` file in the project root and set the following variable:

```bash
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api
```

This environment variable points to the backend API base URL.

### **4. Run the Development Server**

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

The development server should be running at:

```
http://localhost:3000/
```

Open this URL in your browser to view the app.

---

## **Project Structure**

```
/app
  ├── page.tsx                # The main page that renders the TODO list
  ├── todo                    # Contains reusable UI todo
      ├── TodoForm.tsx        # Form to add new TODO items
      ├── TodoList.tsx        # List of TODO items
      └── TodoItem.tsx        # Individual TODO item component
/services
  └── api.ts                  # API functions to interact with backend services
/public                       # Static assets
/tests                       
.env.local                    # Environment variables for local development
```

---

## **Available Scripts**

### **`npm run dev`**
Runs the development server.

### **`npm run build`**
Builds the project for production.

### **`npm start`**
Starts the production server (after building the project).
### **`npm run test`**
test the project.


---

## **API Integration**

The application expects a backend API at the base URL specified in the `.env.local` file. The API should support the following endpoints:

- `GET /todos` - Fetch the list of TODO items
- `POST /todos` - Add a new TODO item
- `DELETE /todos/:id` - Delete a TODO item by ID

---

## **Building and Deployment**

### **1. Build the Project**

```bash
npm run build
```

### **2. Start the Production Server**

```bash
npm start
```



The app will be available at `http://localhost:3000/`.



