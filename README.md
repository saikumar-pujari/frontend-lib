# Frontend UI Library 🚀

A modern **Frontend UI Component Library** built using **React (`.jsx`)** and **Tailwind CSS**.  
This repository focuses on creating **reusable, scalable, and clean UI components** that can be easily integrated into any React project.

Currently, the library is **Tailwind CSS–based**, with **Bootstrap components planned within the next 2 weeks**, and more UI frameworks to be added in the future.

---

## 🎯 Goal of This Repository

- Build a **personal + production-ready frontend UI library**
- Create **reusable React components** in `.jsx`
- Maintain **consistent design patterns**
- Reduce repetitive UI work across projects
- Act as a **reference repo for frontend best practices**

---

## 🛠 Tech Stack

- **React** (JSX components)
- **Tailwind CSS** (utility-first styling)
- **JavaScript (ES6+)**
- **Node.js & npm**
- **Bootstrap** *(coming soon)*

---

---

## 🎨 Tailwind CSS Explained

This library is built using **Tailwind CSS**, a utility-first CSS framework.

### Why Tailwind CSS?

- No large CSS files
- Faster UI development
- Consistent spacing, colors, and typography
- Highly customizable
- Easy to maintain at scale

All styling is done **directly inside JSX using utility classes**, avoiding traditional CSS where possible.

---

## 🧩 Example Component (Tailwind + JSX)

```jsx
const PrimaryButton = ({ label }) => {
  return (
    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
      {label}
    </button>
  );
};

export default PrimaryButton;
```

## contact - hell no!! try to read the doc of offical tailwindcss
