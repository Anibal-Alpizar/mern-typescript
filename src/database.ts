import mongoose from "mongoose";

(async () => {
  await mongoose.connect("mongodb://localhost/mern-databse");
  console.log("database is connected");
})();
