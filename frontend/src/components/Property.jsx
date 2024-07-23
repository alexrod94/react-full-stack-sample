import { Link } from "react-router-dom";
function Property({ property, deleteProperty }) {
  return (
    <div>
      <h2>
        <Link to={`/property/${property._id}`}>{property.name}</Link>
      </h2>
      <p>PPN: {property.price}</p>
      <button onClick={() => deleteProperty(property._id)}>Delete</button>
    </div>
  );
}

export default Property;
