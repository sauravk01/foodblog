//###################///////////
import mongoose from "mongoose";

const connection = { isConnected: false }; /* creating connection object*/

let uri = process.env.MONGODB_URI_CLOUD;
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export default async function dbConnect() {
  let db;

  if (!connection.isConnected) {
    db = await mongoose.connect(uri, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("-----db isConnected-----", connection.isConnected);
  }
  return db; // IMPORTANT! -- return an instance of the db
}
