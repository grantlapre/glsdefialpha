import React, { useState } from "react";

export default function Amount() {
  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="1">7</option>
        <option value="2">8</option>
        <option value="3">9</option>
        <option value="4">10</option>
      </select>
      <p>{`You selected to mint ${value} NFT tokens`}</p>
    </div>
  );
}