import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeReservation } from "../slice/reservationSlice";

export default function ReservationForm() {
  const [form, setForm] = useState({ roomId: "", name: "", checkin: "", checkout: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeReservation(form));
    alert("Reservation successful!");
  };

  return (
    <div className="container mt-4">
      <h2>Make Reservation</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" placeholder="Room ID"
          onChange={(e) => setForm({ ...form, roomId: e.target.value })}
        />

        <input className="form-control my-2" placeholder="Your Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input type="date" className="form-control my-2"
          onChange={(e) => setForm({ ...form, checkin: e.target.value })}
        />

        <input type="date" className="form-control my-2"
          onChange={(e) => setForm({ ...form, checkout: e.target.value })}
        />

        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}
