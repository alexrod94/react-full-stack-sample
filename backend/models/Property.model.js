const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const propertyModel = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    city: String,
    maxPeople: Number,
    price: Number,
    rooms: Number,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Property = model("Property", propertyModel);

module.exports = Property;
