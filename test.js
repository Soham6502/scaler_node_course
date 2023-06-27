console.log("Hello from test.js file, I am learning node !");

const figlet = require("figlet");

figlet(
  "  Hello                                                                               Soham !!",
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
