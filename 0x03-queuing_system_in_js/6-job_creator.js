import kue from "kue";

// create a queue
const queue = kue.createQueue();

// create a job
const job = queue.create("push_notification_code", {
  phoneNumber: "+254719286396",
  message: "Hello",
});

// save the job
job.save((err) => {
  if (err) console.log("Notification job failed");
  console.log(`Notification job created: ${job.id}`);
});

// add a listener for when the job is complete
job.on("complete", () => {
  console.log("Notification job completed");
});
