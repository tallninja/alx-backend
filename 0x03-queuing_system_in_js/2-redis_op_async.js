import redis from "redis";
import { promisify } from "util";

// create a redis client
const client = redis.createClient({ url: "redis://localhost:6379" });

// error handler incase client fails to connect
client.on("error", (err) =>
  console.log(`Redis client not connected to the server: ${err.message}`)
);

// handle connection event
client.on("connect", () => console.log("Redis client connected to the server"));

// set school
const setNewSchool = (schoolName, value) => {
  client.set(schoolName, value, redis.print);
};

// display school value
const displaySchoolValue = async (schoolName) => {
  try {
    const get = promisify(client.get).bind(client);
    const value = await get(schoolName);
    console.log(value);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
