import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <div className="row">
        <input type="text" placeholder="From where" />
        <input type="text" placeholder="To where" />
      </div>
      <div className="row">
        <input type="date" />
        <input type="date" />
      </div>
      <div className="row">
        <select>
          <option>2 Adults</option>
          <option>1 Adult</option>
          <option>3 Adults</option>
        </select> 
      </div>
      <button type="submit">Search Packages</button>
    </form>
  );
}

export default SearchForm;
