import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservations, cancelReservation } from "../slice/reservationSlice";

export default function ReservationList() {
  const dispatch = useDispatch();
  const { data } = useSelector((s) => s.reservations);

  useEffect(() => {
    dispatch(fetchReservations());
  }, []);

  return (
    <div className="container mt-4">
      <h2>Reservations</h2>

      {data.map((r) => (
        <div key={r.id} className="card p-3 m-2">
          <h5>{r.name}</h5>
          <p>Room ID: {r.roomId}</p>
          <p>Check-in: {r.checkin}</p>
          <p>Check-out: {r.checkout}</p>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(cancelReservation(r.id))}
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}
