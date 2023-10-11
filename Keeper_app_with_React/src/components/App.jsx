import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function book(new_note) {
    // console.log(new);
    setnotes((pre) => {
      // console.log(title,note);
      return [...pre, new_note];
    });
  }

  function delete_notes(id) {
    setnotes((pre) => {
      return notes.filter((val, index) => id !== index);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea call_book={book} />
      <div>
        {notes.map((val, index) => (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.note}
            delete_notes={delete_notes}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
