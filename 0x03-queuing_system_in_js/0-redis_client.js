import { createClient } from 'redis';

// create a redis client
const client = createClient({ url: 'redis://localhost:6379' });

// error handler incase client fails to connect
client.on('error', (err) =>
	console.log(`Redis client not connected to the server: ${err.message}`)
);

// handle connection event
client.on('connect', () => console.log('Redis client connected to the server'));

// connect to the redis server
(async () => {
	await client.connect();
})();
