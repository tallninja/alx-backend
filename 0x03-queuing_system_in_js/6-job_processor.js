import kue from "kue";

// create queue
const queue = kue.createQueue();

// create the function that sends notification
const sendNotification = (phoneNumber, message) => {
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`
  );
};

queue.process("push_notification_code", (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});
