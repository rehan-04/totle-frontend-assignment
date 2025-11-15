# TopicSearch – TOTLE Frontend Developer Intern Assignment

This project is my Round 1 coding submission for the **Frontend Developer Intern** position at TOTLE.
The task was to build a React component that displays a list of topics and allows filtering through a search input.

---

##  Project Description

The main component in this project is **TopicSearch**. It includes:
- A search bar
- A list of topics (each showing name and category)
- Real-time filtering (case-insensitive)
- A fallback “No topics found” message
- Simple and clean UI styling

---

##  How It Works

1. An in-memory list of topics is created.
2. React `useState` tracks the user’s search text.
3. The list filters in real time based on the input.
4. If no results match, a message is displayed.
5. Light CSS is used to keep the UI clean and minimal.

---

##  Folder Structure

```
src/
│── App.jsx
│── TopicSearch.jsx
│── main.jsx
public/
index.html
package.json
vite.config.js
README.md
```

---

##  How to Run the Project

1. Install dependencies:
   npm install

2. Start the development server:
   npm run dev

3. Open the URL shown (usually http://localhost:5173).


## GitHub Repository

repository link:
**https://github.com/rehan-04/totle-frontend-assignment**
