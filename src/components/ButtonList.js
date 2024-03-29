import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Songs" />
      <Button name="Soccer" />
      <Button name="News" />
      <Button name="Entertainment" />
      <Button name="Virat Kohli" />
      <Button name="Science" />
    </div>
  );
};

export default ButtonList;
