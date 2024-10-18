import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Initialize express app
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(join(__dirname, "../public")));

// Routes for static pages
app.get("/", (req, res) => res.sendFile(join(__dirname, "./index.html")));

app.get("/biotech", (req, res) =>
  res.sendFile(join(__dirname, "./pages/biotech.html"))
);
app.get("/trainingCenter", (req, res) =>
  res.sendFile(join(__dirname, "./pages/trainingCenter.html"))
);
app.get("/form", (req, res) =>
  res.sendFile(join(__dirname, "./pages/form.html"))
);

app.get("/login", (req, res) =>
  res.sendFile(join(__dirname, "./pages/login.html"))
);
app.get("/payment", (req, res) =>
  res.sendFile(join(__dirname, "./pages/payment.html"))
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
