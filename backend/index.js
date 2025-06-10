const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Add this root route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

