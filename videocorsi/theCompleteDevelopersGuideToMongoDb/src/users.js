import mongoose from "mongoose";

const Schema = mongoose.Schema;

// create schema
const UserSchema = new Schema({
  name: String
});

// User represent the entire collection of data (model), not the single user inseide the application
export const User = mongoose.model('user', UserSchema);