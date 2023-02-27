import redis from "redis";

// create a redis client
const client = redis.createClient({ url: "redis://localhost:6379" });

// error handler incase client fails to connect
client.on("error", (err) =>
  console.log(`Redis client not connected to the server: ${err.message}`)
);

// handle connection event
client.on("connect", () => console.log("Redis client connected to the server"));

// publish to a channel
const publishMessage = (message, time) => {
  setInterval(() => {
    console.log(`About to send ${message}`);
    client.publish("holberton school channel", message);
  }, time);
};

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
