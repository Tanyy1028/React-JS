# 🛒 Order Filter 

A clean and simple **Order Filter Panel** built with React. Easily filter orders by various criteria like customer name, order ID, phone number, product name, payment status, order status, and date. All done with a sleek Bootstrap-based UI. ✨

---

## 📦 Features

- 🔍 Real-time filtering based on:
  - Customer Name
  - Order ID
  - Phone Number
  - Product
  - Payment Status
  - Order Status
  - Date
- 📃 Responsive table view for displaying results
- 🧹 Clear all filters with one click
- 🎨 Beautiful and responsive UI using Bootstrap

---

## ⚙️ Tech Stack

- ⚛️ React
- 🎨 Bootstrap 5
- 📁 Local JSON data (mock database)

---

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/order-filter-panel.git
   cd order-filter-panel
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

---

## 🧪 Usage

* The main component is `Filter.jsx`.
* Data is imported from a mock file: `./../../assets/products/data.js`.
* Modify the data file to include your own order entries.

🗂 Example data structure:

```js
[
  {
    orderId: "ORD12345",
    date: "2023-09-15",
    customerName: "John Doe",
    product: "iPhone 13",
    price: 79999,
    payment: "Paid",
    status: "Completed",
    phoneNumber: "9876543210"
  },
  ...
]
```

---

## 🎯 Customization

* Add more filter fields as needed.
* Integrate with real API or backend.
* Add pagination or sorting logic for better performance with large data sets.

---

## 📸 Video







---


## 🙌 Support

If you like this project, don’t forget to ⭐️ the repo!
