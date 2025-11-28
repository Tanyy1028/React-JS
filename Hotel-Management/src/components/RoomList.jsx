import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../slice/roomSlice";

export default function RoomList() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className="container mt-4">
      <h2>Available Rooms</h2>

      <div className="row">
        {data.map((room) => (
          <div key={room.id} className="col-md-4">
            <div className="card p-3 m-2">
              <h4>{room.name}</h4>
              <p>Type: {room.type}</p>
              <p>Price: ₹{room.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
