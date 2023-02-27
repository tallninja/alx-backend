import redis from "redis";

// create a redis client
const client = redis.createClient({ url: "redis://localhost:6379" });

// error handler incase client fails to connect
client.on("error", (err) =>
  console.log(`Redis client not connected to the server: ${err.message}`)
);

// handle connection event
client.on("connect", () => console.log("Redis client connected to the server"));

// subscribe to channel
client.subscribe("holberton school channel");

// message event listener
client.on("message", (channel, message) => {
  if (message === "KILL_SERVER") {
    client.unsubscribe("holberton school channel");
    client.quit();
  }
  if (channel === "holberton school channel") console.log(message);
});
