import { Schema } from 'mongoose';

export const EmployeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  homeAddress: {
    city: { type: String, required: true },
    zipCode: { type: String, required: true },
    addressLine: { type: String, required: true },
  },
  dateOfEmployment: { type: Date, required: true },
  dateOfBirth: { type: Date, required: true },
  deletedAt: { type: Date, default: null },
});