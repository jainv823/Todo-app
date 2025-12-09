import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/db.js";

const PORT = process.env.PORT || 4000;

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}...`);
    });
  })
  .catch((error) => {
    console.warn(`Error connecting to database: ${error.message}`)
    process.exit(1);
  })
  