import { Schema, model, models } from "mongoose";

const complaintSchema = new Schema({
  username: String,
  email: String,
  reportedUser: String,

});

const Complaint = models.user || model("user", userSchema);

export default complaintSchema;