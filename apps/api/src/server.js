import app from "./app.js";

const PORT = process.env.EXPRESS_PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port: ${PORT}`);
});
