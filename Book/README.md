
```markdown
# 📋 React Users List App

A simple React app that displays a list of users with their **ID**, **Name**, **Email**, and **Phone Number**. 📞

---

## 🚀 Features
- 📜 **List of Users** displayed dynamically using `.map()`  
- 📨 Shows **Name**, **Email**, and **Phone** for each user  
- 🎨 Easy to customize styles in `App.css`  
- 🔄 Modular data import from `components/user.js`  

---

## 📂 Project Structure
```

📁 my-app
┣ 📂 src
┃ ┣ 📂 components
┃ ┃ ┗ 📜 user.js     # 👤 User data file
┃ ┣ 📜 App.js        # ⚛ Main React component
┃ ┣ 📜 App.css       # 🎨 Styling
┃ ┗ 📜 index.js      # 🏁 Entry point
┗ 📜 package.json

````
# video 











---

## 🛠 Installation & Run

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/yourusername/users-list-app.git
````

2️⃣ **Install dependencies**

```bash
npm install
```

3️⃣ **Start the app**

```bash
npm start
```

---

```jsx
import './App.css';
import usersData from './components/user';

function App() {
  return (
    <>
      {usersData.map((user) => (
        <h2 key={user.id}>
          <p>
            {user.id + "."} {user.name + " / "} {user.email}
          </p>
          {user.phone}
        </h2>
      ))}
    </>
  );
}

export default App;
```

---

## 📧 Example Output

```
1. John Doe / john@example.com
   123-456-7890

2. Jane Smith / jane@example.com
   987-654-3210
```

---

## 💡 Notes

* 📌 Make sure `user.js` exports an array of user objects.
* ✨ You can style the output in `App.css` for a better look.

