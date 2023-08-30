"use client";
import { useState } from "react";
import SearchManufacture from "./SearchManufacture";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");
  const handelSubmit = () => {};
  return (
    <form className="searchbar" onSubmit={handelSubmit}>
      <div className="searchbar__item">
        <SearchManufacture manufacture={manufacture} setManufacture={setManufacture} />
      </div>
    </form>
  );
};

export default SearchBar;
