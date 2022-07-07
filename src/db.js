import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

await mongoClient.connect();
let db = mongoClient.db(process.env.MONGO_DB_NAME);

const objectId= ObjectId;

export {db, objectId};