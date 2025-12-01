# 🌴 **PalmNest Hotel – React Hotel Management System**

A complete hotel management application built using **React, Redux Toolkit, React Router, Bootstrap, and JSON Server**.
This system allows users to view rooms, make reservations, edit and cancel bookings, and log in to access protected features.

---

## 📌 **Features**

### 🏨 **Rooms Management**

* View all available rooms
* Filter & sort rooms
* Room details with features, images, and availability status

### 🛎️ **Reservation System**

* Make a new reservation
* Edit an existing reservation
* Cancel reservation
* View all bookings with check-in and check-out details
## Video 



https://github.com/user-attachments/assets/94f6c853-e0b2-4301-8979-0bff85df661e










### 🔐 **User Authentication**

* Users must log in to:

  * Make a reservation
  * Edit a reservation
  * Cancel a reservation
* Simple localAuth using localStorage

### 🧭 **Navigation**

* Modern Navbar using Bootstrap
* Routes:

  * `/login`
  * `/rooms`
  * `/reserve`
  * `/reservations`

### 🎨 **UI & Styling**

* Fully styled with **Bootstrap 5**
* Responsive layout
* Clean design inspired by PalmNest theme

---

## 📁 **Project Folder Structure**

```
PalmNest-Hotel/
│── public/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── RoomList.jsx
│   │   ├── RoomDetails.jsx
│   │   ├── ReservationForm.jsx
│   │   ├── ReservationList.jsx
│   │   ├── PrivateRoute.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── roomSlice.js
│   │   ├── reservationSlice.js
│   │   ├── authSlice.js
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── db.json
├── package.json
└── README.md
```

---

## 🚀 **How to Run the Project**

### 1️⃣ Install Dependencies

```
npm install
```

### 2️⃣ Start JSON Server

```
json-server --watch db.json --port 3000
```

### 3️⃣ Start React App

```
npm run dev
```

---

## 🔧 **Tech Stack**

* **React JS**
* **Redux Toolkit**
* **React Router DOM**
* **Bootstrap 5**
* **JSON Server (Fake REST API)**
* **LocalStorage Authentication**

---

## 📦 **API Routes**

### `GET /rooms`

Fetch all rooms.

### `GET /reservations`

Fetch all bookings.

### `POST /reservations`

Create new booking.

### `PUT /reservations/:id`

Update a reservation.

### `DELETE /reservations/:id`

Cancel booking.

---

## 🔐 Authentication Logic

Simple local auth (no backend):

* Login details:

```
username: admin
password: 123456
```

* Stored in `localStorage`
* Protected routes:

  * `/reserve`
  * `/reservations`

---

## 🌴 **Project Overview**

PalmNest Hotel is designed to give users a seamless experience of booking rooms and handling reservations. It is ideal for learning:

* State management
* Protected routes
* CRUD operations
* JSON Server integration
* Component-based React folder structure

---

## 💬 **Author**

Developed by **Tanmay Patil**
For improvements or issues, feel free to ask anytime 😊

