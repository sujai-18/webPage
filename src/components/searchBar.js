import '../styles/searchBar.scss';

function SearchBar({ onChange }) {
  return (
    <input
      placeholder="Search"
      onChange={onChange}
      className="search-bar input-with-icon"
    />
  );
}

export default SearchBar;
