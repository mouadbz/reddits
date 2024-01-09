import mongoose from "mongoose";

let connection;

const startDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }
  if (!connection) {
    connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("==========Connected to MongoDB============");
  }
  return connection;
};
export default startDB;
