🛒 ECOM React App 🧑‍💻

Welcome to the **ECOM** 🛍️ React application — a simple yet powerful frontend project demonstrating **routing**, **state management**, and **component-based architecture** using **React Router** and React Hooks!

---

## 🚀 Project Overview

This React app simulates a mini e-commerce website. Users can:

* 🏠 Browse products on the **Home** page
* 📦 View product details
* 🛒 Add products to a **Cart**
* 📄 Learn more about the site via **About**, **Projects**, and **Contact** pages

---

## 🗂️ File Structure

```
/src
  ├── components/
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Projects.jsx
  │   ├── Contact.jsx
  │   ├── ProductDetail.jsx
  │   └── Carts.jsx
  ├── json/
  │   └── products.js
  ├── App.jsx
  └── App.css
```
# video   













---

## 🔧 Technologies Used

* ⚛️ React (with Hooks)
* 🌐 React Router (`react-router-dom`)
* 💅 CSS Modules / Plain CSS

---

## 📦 Main Features

* ✅ Client-side Routing with `<Routes>` and `<Route>`
* ✅ Navigation using `<Link>` components
* ✅ Global cart state managed in `App.jsx`
* ✅ Product data sourced from local JSON

---

## 🧠 App.jsx Breakdown

### 🔗 Navigation Bar

```jsx
<nav>
  <h3>ECOM</h3>
  <Link to={"/about"}>About</Link>
  <Link to={"/projects"}>Projects</Link>
  <Link to={"/contacts"}>Contact</Link>
  <Link to={"/carts"}>Cart</Link>
</nav>
```

### 🧭 Routes Configuration

```jsx
<Routes>
  <Route path='/' element={<Home products={products} setCartList={setCartList} />} />
  <Route path='/about' element={<About />} />
  <Route path='/projects' element={<Projects />} />
  <Route path='/contacts' element={<Contact />} />
  <Route path='/products' element={<ProductDetail />} />
  <Route path='/carts' element={<Carts cartList={cartList} setCartList={setCartList} />} />
</Routes>
```

### 🛍️ Cart State

```jsx
const [cartList, setCartList] = useState([]);
```

* The cart state is **lifted up** to `App.jsx` and passed down to `Home` and `Carts` components.

---

## 📁 Sample `products.js` (Structure)

```js
export const products = [
  {
    id: 1,
    title: "Product Name",
    price: 499,
    category: "Category Name",
    description: "Product description here...",
  },
  // more products...
];
```

---

## ⚙️ Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the app**

   ```bash
   npm start
   ```

3. Visit `http://localhost:3000` in your browser 🚀

---

## 📝 TODO (Suggestions)

* [ ] ✅ Add product filtering by category
* [ ] 🛒 Add quantity controls in the cart
* [ ] 💾 Persist cart state using `localStorage`
* [ ] 💅 Improve styling with a CSS framework (e.g., Tailwind, Bootstrap)
* [ ] 🧪 Add unit tests

---

## 🙌 Acknowledgements

Built using ❤️ and React.
