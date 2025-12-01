// src/components/RoomDetails.jsx
import { Link } from "react-router-dom";

export default function RoomDetails({ room }) {
  if (!room) return null;
  return (
    <div className="card shadow h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text"><strong>Type:</strong> {room.type}</p>
        <p className="card-text"><strong>Price:</strong> ₹{room.price}</p>
        <p className="card-text"><strong>Features:</strong> {room?.features?.length ? room.features.join(", ") : "—"}</p>
        <p className="card-text"><strong>Status:</strong> <span className={room.available ? "text-success" : "text-danger"}>{room.available ? "Available" : "Booked"}</span></p>

        <div className="mt-auto">
          <Link to={`/reserve?roomId=${room.id}`} className="btn btn-primary w-100">Book</Link>
        </div>
      </div>
    </div>
  );
}
