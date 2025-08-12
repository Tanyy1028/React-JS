import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState("0");

  const [packages, setPackages] = useState([]); // store all searches
  const [editIndex, setEditIndex] = useState(null); // track which package to edit

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPackage = { from, to, startDate, endDate, adults };

    if (editIndex !== null) {
      // Update existing package
      const updated = [...packages];
      updated[editIndex] = newPackage;
      setPackages(updated);
      setEditIndex(null);
    } else {
      // Add new package
      setPackages([...packages, newPackage]);
    }

    // Reset form
    setFrom("");
    setTo("");
    setStartDate("");
    setEndDate("");
    setAdults("2 Adults");
  };

  const handleEdit = (index) => {
    const pkg = packages[index];
    setFrom(pkg.from);
    setTo(pkg.to);
    setStartDate(pkg.startDate);
    setEndDate(pkg.endDate);
    setAdults(pkg.adults);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = packages.filter((_, i) => i !== index);
    setPackages(updated);
  };

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <input type="text" placeholder="From where" value={from} onChange={(e) => setFrom(e.target.value)} required />
          <input type="text" placeholder="To where" value={to} onChange={(e) => setTo(e.target.value)} required />
        </div>
        <div className="row">
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <div className="row">
          <select value={adults} onChange={(e) => setAdults(e.target.value)}>
            <option>2 Adults</option>
            <option>1 Adult</option>
            <option>3 Adults</option>
          </select> 
        </div>
        <button type="submit">{editIndex !== null ? "Update Ticket" : "Search Ticket"}</button>
      </form>

      {/* Display Saved Packages */}
      <div className="package-list">
        <h3>Confirm Ticekt</h3>
        {packages.length === 0 && <p>No ticket found.</p>}
        <ul>
          {packages.map((pkg, index) => (
            <li key={index}>
              {pkg.from} → {pkg.to} | {pkg.startDate} - {pkg.endDate} | {pkg.adults}
              <button className='b1' onClick={() => handleEdit(index)}>Edit</button>
              <button className='b2' onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchForm;
