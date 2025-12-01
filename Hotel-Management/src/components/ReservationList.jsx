// src/components/ReservationList.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, cancelReservation } from "../redux/reservationSlice";
import { getAuth } from "../utils/auth";
import { Link, useNavigate } from "react-router-dom";

export default function ReservationList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reservations, loading } = useSelector((s) => s.reservations);
  const [roomsMap, setRoomsMap] = useState({});
  const user = getAuth();

  useEffect(() => {
    dispatch(fetchReservations());
    // fetch rooms (to show room name)
    fetch("http://localhost:3000/rooms").then(r=>r.json()).then(list=>{
      const map = {};
      list.forEach(r=>map[r.id]=r);
      setRoomsMap(map);
    });
  }, [dispatch]);

  const handleCancel = (id) => {
    if (!user) return alert("Login to cancel reservation");
    if (!window.confirm("Are you sure to cancel?")) return;
    dispatch(cancelReservation(id));
  };

  const handleEdit = (r) => {
    if (!user) return alert("Login to edit reservation");
    navigate(`/reserve?edit=${r.id}`);
  };

  if (loading) return <h3 className="text-center mt-4">Loading...</h3>;

  return (
    <div className="container mt-4">
      <h2>Your Reservations</h2>

      {reservations.length === 0 && <div>No reservations yet</div>}

      {reservations.map((r) => (
        <div className="card p-3 my-3 shadow" key={r.id}>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5>{r.guest}</h5>
              <p className="mb-1"><strong>Room:</strong> {roomsMap[r.roomId]?.name || `ID ${r.roomId}`}</p>
              <p className="mb-1"><strong>Check In:</strong> {r.checkIn}</p>
              <p className="mb-1"><strong>Check Out:</strong> {r.checkOut}</p>
            </div>

            <div className="d-flex flex-column gap-2">
              <button className="btn btn-sm btn-outline-primary" onClick={()=>handleEdit(r)}>Edit</button>
              <button className="btn btn-sm btn-outline-danger" onClick={()=>handleCancel(r.id)}>Cancel</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
