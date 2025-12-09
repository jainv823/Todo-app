import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;
const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(URI);
    const host = connection.connection.host;
    const db_name = connection.connection.db.databaseName;
    console.log(`Connected to MongoDB Atlas host:${host}/${db_name}`);
  } catch (error) {
    throw new Error(error);
  }
};

export default connectToDB;
