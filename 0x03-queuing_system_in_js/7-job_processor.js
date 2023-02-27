import kue from "kue";

// blacklisted phone numbers
const blacklisted = ["4153518780", "4153518781"];

const sendNotification = (phoneNumber, message, job, done) => {
  // track the progress of the job
  job.progress(0, 100);

  // check if phone number has been blacklisted
  if (blacklisted.includes(phoneNumber))
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));

  // track the progress to 50
  job.progress(50, 100);
  console.log(
    `Sending notification to ${phoneNumber}, with message: ${message}`
  );

  done();
};

// create queue
const queue = kue.createQueue();

queue.process("push_notification_code_2", (job, done) => {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});
