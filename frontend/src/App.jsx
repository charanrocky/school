import AddSchool from "./pages/AddSchool";
import ShowSchools from "./pages/ShowSchools";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("add");

  return (
    <div>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <button
          onClick={() => setPage("add")}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Add School
        </button>
        <button
          onClick={() => setPage("show")}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Show Schools
        </button>
      </nav>

      {page === "add" ? <AddSchool /> : <ShowSchools />}
    </div>
  );
}

export default App;
