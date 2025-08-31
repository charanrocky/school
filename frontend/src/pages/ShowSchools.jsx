import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/schools")
      .then((res) => setSchools(res.data));
  }, []);

  return (
    <div className="p-6 grid gap-6 md:grid-cols-3">
      {schools.map((s) => (
        <div key={s.id} className="border rounded-lg p-4 shadow">
          <img
            src={`http://localhost:5000/uploads/${s.image}`}
            alt={s.name}
            className="h-40 w-full object-cover rounded"
          />
          <h2 className="font-bold mt-2">{s.name}</h2>
          <p>
            {s.address}, {s.city}
          </p>
        </div>
      ))}
    </div>
  );
}
