const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

async function connectDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully.")
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;