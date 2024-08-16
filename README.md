# MERN Stack Product e-commerce website

# MugdhoMart

## Project Overview
This project is a full-stack, single-page application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The website allows users to browse, search, filter, categorize, and sort products efficiently. The goal is to implement key functionalities like pagination, searching, categorization, sorting, and user authentication.

## Features

- **Pagination**: Efficiently loads products with pagination controls (Next, Previous) and displays page numbers.
- **Searching**: Allows users to search for products by name.
- **Categorization**: Users can filter products based on:
  - Brand Name
  - Category Name
  - Price Range
- **Sorting**: Users can sort products by:
  - Price (Low to High, High to Low)
  - Date Added (Newest first)
- **Authentication**: Supports Google Authentication and Email/Password Authentication via Firebase.

## Technologies Used

- **Front-end**:
  - React.js[https://react.dev/]
  - Tailwind CSS (for styling)[https://tailwindcss.com/]
  - Axios (for API requests)[https://axios-http.com/]
  - Tanstack query [https://tanstack.com/query/latest]

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git@github.com:altaj1/mugdho-Bazar-Client.git
    cd your-repo-name
2. **Install dependencies:**:
npm install
3. **Set up environment variables**:
MONGO_URI=your_mongodb_connection_string
 VITE_API_URL=http://localhost:8000
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
4. **Start the development servers**:
npm run dev
Access the application:
Open your browser and navigate to http://localhost:5173.