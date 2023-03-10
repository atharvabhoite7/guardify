import { Schema, model, models } from "mongoose";

const ComplaintSchema = new Schema({
  subject: String,
  name: String,
  address: String,
  city: String,
  code: Number,
  phone: Number,
  complaint: String,
  email: String,
});

const Complaint = models.Complaint || model("Complaint", ComplaintSchema);

export default Complaint;
