# User Profile with Immer

## Project Description

A React application that demonstrates managing **complex nested state** using the `useImmer` hook from the `use-immer` library. Instead of manually spreading nested objects to create immutable updates, Immer lets you write simple, readable mutations on a "draft" copy — making nested state changes as easy as direct assignment.

The app lets you edit a user's name, email, phone number, and home address, and toggle newsletter and notification preferences — all reflected in real time in a live profile display panel.

---

## Technologies Used

| Tool | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool & dev server |
| use-immer | `useImmer` hook for immutable state |
| immer | Underlying structural-sharing engine |
| CSS (plain) | Component styling |

---

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/user-profile-with-immer.git
   cd user-profile-with-immer
   ```

2. **Install dependencies** (includes React, Vite, Immer, and use-immer)
   ```bash
   npm install
   ```

   > If immer/use-immer were not included in `package.json`, install them manually:
   > ```bash
   > npm install immer use-immer
   > ```

---

## How to Run the Project

```bash
npm run dev
```

Open your browser and go to **http://localhost:5173**

To build for production:
```bash
npm run build
```

---

## Features

- Edit **name**, **email**, **phone**, and **address** with dedicated update buttons
- Toggle **newsletter subscription** and **notifications** on/off with a single click
- **Live profile panel** shows the current state at all times
- **Raw JSON preview** (collapsible) lets you inspect the exact Immer state
- Responsive two-column layout that stacks on mobile
- Beginner-friendly code with comments explaining each Immer update function

---

## Project Folder Structure

```
user-profile-with-immer/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── UserProfileWithImmer.jsx   ← main component
│   ├── styles/
│   │   ├── index.css                  ← global reset
│   │   ├── App.css                    ← app shell styles
│   │   └── UserProfile.css            ← component styles
│   ├── App.jsx                        ← root component
│   └── main.jsx                       ← React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Example Test Cases

### Normal Test Cases

| # | Action | Expected Result |
|---|---|---|
| 1 | Type "Alice Smith" in the Name field and click **Update** | The "Name" row in the live profile panel changes to "Alice Smith" |
| 2 | Type "alice@mail.com" in the Email field and click **Update** | The "Email" row in the live profile panel updates to "alice@mail.com" |
| 3 | Click the **Newsletter** toggle when it shows "Unsubscribed" | The toggle turns blue and shows "Subscribed"; the badge in the profile panel turns green |

### Edge Test Cases

| # | Action | Expected Result |
|---|---|---|
| 4 | Clear the Name field (empty string) and click **Update** | The profile panel shows an empty name — no crash; the field simply stores `""` |
| 5 | Click the **Notifications** toggle rapidly several times in a row | The state flips correctly each time; the final displayed value matches the last toggle state |
| 6 | Type a very long address (e.g., 200+ characters) and click **Update Contact Details** | The address saves correctly and the display panel wraps the text without breaking the layout |

---

## Suggested Commit Messages

```
feat: initialize Vite + React project scaffold
feat: install and configure use-immer dependency
feat: create UserProfileWithImmer component with initial nested state
feat: implement updateName and updateEmail handlers using Immer draft
feat: implement updateContactDetails for nested phone and address
feat: add toggleNewsletterSubscription and toggleNotifications
feat: build edit form UI with controlled inputs and update buttons
feat: build live profile display panel with real-time state reflection
feat: add collapsible raw JSON state preview for debugging
style: add responsive two-column layout with clean modern CSS
docs: write README with setup instructions and test cases
```

---

## Repository Description

A beginner-friendly React + Vite demo showing how to manage deeply nested state with the `useImmer` hook. Covers updating nested fields, toggling boolean preferences, and reflecting live state changes in the UI — with clear code comments throughout to make it easy to explain to an instructor or code reviewer.
