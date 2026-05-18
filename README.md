
# 📚 Book Finder App

A simple React application for searching books using the **Open Library API**.  
Built as part of an assignment for College students.

---

## 🚀 Features

- Search books by:
  - Title
  - Author
  - ISBN
  - Subject
  - Free text
- Book covers displayed (via Open Library cover API).
- Pagination support.
- Sort by title or year.
- View book details in a modal.
- Favorite books (saved to localStorage).
- Simple, clean UI using Tailwind CSS.

---

## 🛠️ Tech Stack

- **React (Vite)**
- **Tailwind CSS (CDN)**
- **Open Library Search API**:  
  `https://openlibrary.org/search.json?title={bookTitle}`
---

##👨‍💻 Author
---
Developed by Shiva Prasad R.
Using React + Open Library API.

##🌍 Deployment
---
Can be deployed on StackBlitz / CodeSandbox easily.
Or push to GitHub and deploy on Netlify or Vercel (free).

## 📦 Installation, Setup & Moving to a New Laptop

If you are moving this project to another laptop, you need to ensure a few basic tools are installed first.

### Prerequisites for a New Laptop:
1. Install **[Node.js](https://nodejs.org/)** (LTS version recommended). This includes `npm`.
2. Install **[Git](https://git-scm.com/)** (if you are cloning from GitHub).
3. A code editor like **[VS Code](https://code.visualstudio.com/)**.

### Steps to Run:
```bash
# 1. Clone the repo (or copy the project folder to the new laptop)
git clone https://github.com/YOUR_USERNAME/book-finder.git
cd book-finder

# 2. Install dependencies (This creates the node_modules folder)
npm install

# 3. Run development server
npm run dev

# The app will be available at 👉 http://localhost:5173 
```

---

## 🗄️ Adding a Database

Currently, this application uses **localStorage** to save favorite books. If you want to add a real database so users can access their saved books from anywhere, here are the best options for a React application:

### Option 1: Firebase (Recommended for Beginners)
Firebase is a Backend-as-a-Service (BaaS) by Google. It provides a real-time NoSQL database (Firestore) and authentication.
- **What to install**: `npm install firebase`
- **How to use**: 
  1. Create a project on the [Firebase Console](https://console.firebase.google.com/).
  2. Get your configuration keys.
  3. Initialize Firebase in your React app and replace `localStorage` logic with Firestore `addDoc` and `getDocs` functions.

### Option 2: Supabase (Open Source Firebase Alternative)
Supabase gives you a PostgreSQL database and is very easy to integrate with React.
- **What to install**: `npm install @supabase/supabase-js`
- **How to use**:
  1. Create a project on [Supabase](https://supabase.com/).
  2. Create a `favorites` table in the SQL editor.
  3. Replace your local storage functions with Supabase queries.

### Option 3: Custom Backend (MERN Stack)
If you want to build your own API, you can create a Node.js/Express server and connect it to MongoDB.
- **What to do**: 
  1. Create a separate `backend` folder.
  2. Install Express, Mongoose, and CORS (`npm install express mongoose cors`).
  3. Create API endpoints (`GET /favorites`, `POST /favorites`) and call them from your React app using `fetch` or `axios`.







