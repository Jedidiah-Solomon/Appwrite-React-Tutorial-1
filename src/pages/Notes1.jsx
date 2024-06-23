import { useEffect, useState } from "react";
import { databases } from "../appwrite/config";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const vite_database_id = import.meta.env.VITE_DATABASE_ID;
      const vite_collection_id_notes = import.meta.env.VITE_COLLECTION_ID_NOTES;

      const response = await databases.listDocuments(
        vite_database_id,
        vite_collection_id_notes
      );

      setNotes(response.documents);
      setLoading(false);
      console.log(response.documents);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div>
        {notes.map((note) => (
          <div key={note.$id}>{note.body}</div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
