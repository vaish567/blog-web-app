import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://datatype:Vaishnav%4012%24@cluster0.zlwpgml.mongodb.net/blog-app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1);
  }
};
