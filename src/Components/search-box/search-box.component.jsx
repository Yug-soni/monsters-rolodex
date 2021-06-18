import "./search-box.styles.css";

export const SearchBox = ({ placeholder, changeHandler }) => {
  return (
    <input
      className="search-box-container"
      type="search"
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
};
