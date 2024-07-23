import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PropertyPage() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [maxPeople, setMaxPeople] = useState("");
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");

  useEffect(() => {
    getProperty();
  }, []);

  const getProperty = async () => {
    const res = await fetch(`http://localhost:5005/api/property/${id}`);
    const finalRes = await res.json();
    setProperty(finalRes.data);
    setName(finalRes.data.name);
    setCity(finalRes.data.city);
    setMaxPeople(finalRes.data.maxPeople);
    setPrice(finalRes.data.price);
    setRooms(finalRes.data.rooms);
  };

  const handleEdit = async () => {
    const newData = {
      name: name,
      city: city,
      maxPeople: maxPeople,
      price: price,
      rooms: rooms,
    };
    const res = await fetch(`http://localhost:5005/api/property/${id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProperty(newData);
    setIsEditing(false);
  };

  if (!property) {
    return <h2>No data</h2>;
  } else {
    if (isEditing) {
      return (
        <div>
          <h1>
            Welcome to{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </h1>
          <h2>Data:</h2>
          <ul>
            <li>
              City:{" "}
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                value={city}
              />{" "}
            </li>
            <li>
              Max people:{" "}
              <input
                type="number"
                onChange={(e) => setMaxPeople(e.target.value)}
                value={maxPeople}
              />
            </li>
            <li>
              Price:{" "}
              <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              € per night
            </li>
            <li>
              Rooms:{" "}
              <input
                type="number"
                onChange={(e) => setRooms(e.target.value)}
                value={rooms}
              />
            </li>
          </ul>
          <button onClick={() => handleEdit()}>Edit</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome to {property.name}</h1>
          <h2>Data:</h2>
          <ul>
            <li>City: {property.city}</li>
            <li>Max people: {property.maxPeople}</li>
            <li>Price: {property.price}€ per night</li>
            <li>Rooms: {property.rooms}</li>
          </ul>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      );
    }
  }
}

export default PropertyPage;
