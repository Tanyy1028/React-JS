import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: "Admin" }));
  };

  return (
    <div className="container mt-4">
      <h2>Login</h2>
      <button className="btn btn-success" onClick={handleLogin}>Login as Admin</button>
    </div>
  );
}
