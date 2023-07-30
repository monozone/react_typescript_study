import { ToDoInput } from "pages/ToDoInput";
import { ShowInputButton } from "components/ShowInputButton";
import React, { useContext, useState } from "react";
import { ToDoListContext } from "contexts/ToDoList";

export const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    // onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};
