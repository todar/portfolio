import * as functions from "firebase-functions";
import axios from "axios";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest(
  (request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  }
);

export const githubUser = functions.https.onRequest(
  async (request, response) => {
    try {
      const res = await axios.get(`api.github.com/users/todar`);
      const user = await res.data;
      response.send(user);
    } catch (error) {
      response.send(
        JSON.stringify({
          msg: "An new error occured!!!!!",
          error,
        })
      );
    }
  }
);