import { useEffect, useState } from "react";
import { databases } from "../appwrite/config";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const vite_database_id = import.meta.env.VITE_DATABASE_ID;
    const vite_collection_id_notes = import.meta.env.VITE_COLLECTION_ID_NOTES;

    const response = await databases.listDocuments(
      vite_database_id,
      vite_collection_id_notes
    );

    setNotes(response.documents);
  };

  return (
    <div>
      <div>
        {notes.map((note) => (
          <div key={note.$id}>
            {note.body} {note.$id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
