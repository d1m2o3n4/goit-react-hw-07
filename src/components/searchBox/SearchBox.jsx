import { useDispatch, useSelector } from "react-redux";

import { selectFilter, setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);
  console.log(filter);
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value.trim().toLowerCase()));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} value={filter} />
    </div>
  );
};
export default SearchBox;