// src/components/ReservationForm.jsx
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { makeReservation, updateReservation as updateResAction } from "../redux/reservationSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function ReservationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preRoomId = searchParams.get("roomId") || "";
  const [editingId, setEditingId] = useState(null);

  const [data, setData] = useState({
    guest: "",
    roomId: preRoomId,
    checkIn: "",
    checkOut: ""
  });

  // Update existing reservation: fetch if id param is present (optional)
  useEffect(() => {
    const editId = searchParams.get("edit"); // for editing support
    if (editId) {
      setEditingId(editId);
      fetch(`http://localhost:3000/reservations/${editId}`)
        .then(r=>r.json())
        .then(res=>{
          setData({
            guest: res.guest,
            roomId: res.roomId,
            checkIn: res.checkIn,
            checkOut: res.checkOut
          });
        }).catch(()=>{});
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.guest || !data.roomId || !data.checkIn || !data.checkOut) {
      return alert("All fields are required");
    }

    if (editingId) {
      // update
      dispatch(updateResAction({ id: editingId, data }));
      alert("Reservation updated");
    } else {
      dispatch(makeReservation(data));
      alert("Reservation created");
    }
    navigate("/reservations");
  };

  return (
    <div className="container mt-5 col-md-6">
      <h2>{editingId ? "Edit Reservation" : "Book a Room"}</h2>

      <form className="mt-3" onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Guest Name" value={data.guest} onChange={e=>setData({...data, guest: e.target.value})} />
        <input className="form-control mb-2" placeholder="Room ID" value={data.roomId} onChange={e=>setData({...data, roomId: e.target.value})} />
        <label>Check-In</label>
        <input type="date" className="form-control mb-2" value={data.checkIn} onChange={e=>setData({...data, checkIn: e.target.value})} />
        <label>Check-Out</label>
        <input type="date" className="form-control mb-2" value={data.checkOut} onChange={e=>setData({...data, checkOut: e.target.value})} />

        <button className="btn btn-success w-100" type="submit">{editingId ? "Update" : "Reserve"}</button>
      </form>
    </div>
  );
}
