/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
export default (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("push", async (context) => {
    console.log(`Pushed commit ${context.payload.head_commit}`);
  });
};
