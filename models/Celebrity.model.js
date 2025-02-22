//  Add your code here
const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    occupation: {
      type: String,
      required: true,
      enum: ["actor", "singer", "comedian", "unknown"],
    },
    catchPhrase: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Celebrity = model("celebrity", celebritySchema);
module.exports = Celebrity;