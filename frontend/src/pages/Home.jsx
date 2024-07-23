import { useEffect, useState } from "react";
import Property from "../components/Property";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties();
  }, []);

  const getAllProperties = async () => {
    const res = await fetch("http://localhost:5005/api/property");
    const finalRes = await res.json();
    setProperties(finalRes.data);
  };

  const deleteProperty = async (_id) => {
    const newProperties = properties.filter((property) => {
      return property._id !== _id;
    });
    setProperties(newProperties);
    const res = await fetch(`http://localhost:5005/api/property/${_id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <h1>FakeBnB</h1>
      {properties.length > 0 ? (
        properties.map((property) => {
          return (
            <Property
              key={property._id}
              property={property}
              deleteProperty={deleteProperty}
            />
          );
        })
      ) : (
        <p>No data...</p>
      )}
    </div>
  );
}

export default Home;
