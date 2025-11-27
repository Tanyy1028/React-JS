# 💬 Real-Time Chat App

A modern real-time chat application built using **React**, **Firebase**, **Redux Toolkit**, and **Emoji Support**.
This app allows users to **sign up, log in, send messages, delete messages, use emojis, and chat in real time**.

---

## 🚀 Features

### 🔐 Authentication

* Email & Password Sign Up
* Login / Logout
* Firebase Authentication

### 💬 Chat System

* Real-time messaging using Firebase Firestore
* Send & receive messages instantly
* Delete messages
* Emoji picker support 😄🔥❤️


#### Video











### 👥 Users

* Shows current logged-in user
* Displays chat user list (optional depending on your build)

### 🖼️ UI / UX

* Clean modern theme
* Mobile responsive
* Smooth animations

---

## 🛠️ Tech Stack

| Technology            | Purpose              |
| --------------------- | -------------------- |
| ⚛️ React              | Frontend UI          |
| 🔥 Firebase Auth      | User login/signup    |
| 🔥 Firebase Firestore | Real-time database   |
| 🗂️ Redux Toolkit     | State management     |
| 🎨 CSS                | Styling              |
| 😃 Emoji Mart         | Emoji picker support |

---

## 📦 Installation

### 1️⃣ Clone the repo

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Firebase Setup

Go to **firebase.google.com**, create a project, then enable:

* Authentication → Email/Password
* Firestore Database

Add your Firebase config in:

```
/src/firebase.js
```

---

## ▶️ Start the App

```bash
npm start
```

---

## 📁 Project Structure

```
📦 chat-app
 ┣ 📂 src
 ┃ ┣ 📂 slices
 ┃ ┃ ┗ userSlices.js
 ┃ ┣ 📂 components
 ┃ ┃ ┣ SignUp.jsx
 ┃ ┃ ┣ Login.jsx
 ┃ ┃ ┗ ChatPage.jsx
 ┃ ┣ firebase.js
 ┃ ┗ App.js
 ┗ README.md
```

---

## 💡 How It Works

### 🔐 Sign Up

Users register with email & password → stored in Firebase Auth.

### 💬 Sending Messages

Each message is stored in Firestore under:

```
chatroom/{docId}/chats/{messageId}
```

### 🙂 Emoji Support

Emoji picker opens → selected emoji added to input.

---

## 🛡️ Security

* Firebase secure rules
* User-based message deletion
* Protected routes

---

## 🤝 Contributing

Pull requests are welcome!
Feel free to open issues for feature requests 💡


