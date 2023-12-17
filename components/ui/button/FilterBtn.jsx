function FilterBtn({ filterLabel, filterValue, onClick }) {
  return (
    <button
      className=" bg-gray rounded py-2 min-w-[25px] px-2 mb-3"
      onClick={() => onClick(filterValue)}
    >
      {filterLabel}
    </button>
  );
}

export default FilterBtn;
