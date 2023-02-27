import redis from "redis";

// create a redis client
const client = redis.createClient({ url: "redis://localhost:6379" });

// error handler incase client fails to connect
client.on("error", (err) =>
  console.log(`Redis client not connected to the server: ${err.message}`)
);

// handle connection event
client.on("connect", () => console.log("Redis client connected to the server"));

// hash set values
client.hset("HolbertonSchools", "Portland", 50, redis.print);
client.hset("HolbertonSchools", "Seattle", 80, redis.print);
client.hset("HolbertonSchools", "New York", 20, redis.print);
client.hset("HolbertonSchools", "Bogota", 20, redis.print);
client.hset("HolbertonSchools", "Cali", 40, redis.print);
client.hset("HolbertonSchools", "Paris", 2, redis.print);

// get all hash set
client.hgetall("HolbertonSchools", (err, schools) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(schools);
});
