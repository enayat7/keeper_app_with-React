import React from "react";
import { useState } from "react";
function CreateArea(props) {
  const [book, setbook] = useState({
    title: "",
    note: ""
  });
  // console.log(props);
  function updatebook(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name,value);
    setbook((pre) => {
      if (name === "title") {
        return {
          title: value,
          note: pre.note
        };
      } else if (name === "content") {
        return {
          title: pre.title,
          note: value
        };
      }
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={updatebook}
          name="title"
          placeholder="Title"
          value={book.title}
        />
        <textarea
          onChange={updatebook}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={book.note}
        />
        <button
          onClick={(event) => {
            props.call_book(book);
            setbook(() => {
              return {
                title: "",
                note: ""
              };
            });
            event.preventDefault();
            // console.log(book);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
