import s from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Find contacts by name"
      className={s.input}
    />
  );
};

export default SearchBox;
