import { connect } from "mongoose";
import { config } from "./config.js";

export const startConnection = async () => {
  try {
    const db = await connect(config.mongo, {
      dbName: config.database,
    });

    console.log(`DB is connected to ${db.connection.name} database`);
  } catch (error) {
    console.log(error);
  }
};
