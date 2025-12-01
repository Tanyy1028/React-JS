// src/components/RoomList.jsx
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../redux/roomSlice";
import RoomDetails from "./RoomDetails";

export default function RoomList() {
  const dispatch = useDispatch();
  const { rooms, loading } = useSelector((state) => state.rooms);
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState(""); // price-asc, price-desc, name

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const types = useMemo(() => {
    const s = new Set();
    rooms.forEach(r => s.add(r.type));
    return Array.from(s);
  }, [rooms]);

  const filtered = useMemo(() => {
    let list = [...rooms];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(r => r.name.toLowerCase().includes(q) || (r.features || []).join(" ").toLowerCase().includes(q));
    }
    if (filterType !== "all") list = list.filter(r => r.type === filterType);
    if (sortBy === "price-asc") list.sort((a,b)=>a.price-b.price);
    if (sortBy === "price-desc") list.sort((a,b)=>b.price-a.price);
    if (sortBy === "name") list.sort((a,b)=>a.name.localeCompare(b.name));
    return list;
  }, [rooms, query, filterType, sortBy]);

  if (loading) return <h2 className="text-center mt-4">Loading...</h2>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Available Rooms</h2>

      <div className="row mb-3 gx-2 gy-2">
        <div className="col-md-4">
          <input value={query} onChange={e=>setQuery(e.target.value)} className="form-control" placeholder="Search by name or feature..." />
        </div>

        <div className="col-md-3">
          <select className="form-select" value={filterType} onChange={e=>setFilterType(e.target.value)}>
            <option value="all">All Types</option>
            {types.map(t=> <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="col-md-3">
          <select className="form-select" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="row">
        {filtered.length === 0 && <div className="col-12">No rooms found.</div>}
        {filtered.map((room) => (
          <div className="col-md-4 mb-3" key={room.id}>
            <RoomDetails room={room} />
          </div>
        ))}
      </div>
    </div>
  );
}
