import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../slice/roomSlice";

export default function RoomList() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  if (loading) return <h3 className="text-center mt-5">Loading rooms...</h3>;

  return (
    <div className="container mt-4">
      <h2>Available Rooms</h2>
      <div className="row">
        {data.map((room) => (
          <div className="col-md-4" key={room.id}>
            <div className="card p-3 mt-3 shadow-sm">
              <h4>{room.name}</h4>
              <p>Type: {room.type}</p>
              <p>Price: ₹{room.price}</p>
              <p>
                Status:{" "}
                <strong className={room.available ? "text-success" : "text-danger"}>
                  {room.available ? "Available" : "Booked"}
                </strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
