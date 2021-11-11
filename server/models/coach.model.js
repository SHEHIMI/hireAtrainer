import mongoose from "mongoose";
const { Schema } = mongoose;

const coaches = new Schema({
  firstName: String,
  lastName: String,
  Email: String,
  password: String,
  cv: String,
  phoneNumber: Number,
  workoutPlan: String,
  Nutrition: String,
});

export default mongoose.model("Coach", coaches);
