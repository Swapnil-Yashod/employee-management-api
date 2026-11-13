require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;
const connectDB = require("./config/database.js");


async function startServer() {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup Failed:",error);
        process.exit(1);
        
    }
}
startServer();

