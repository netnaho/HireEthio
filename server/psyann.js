import express from "express";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import jobRoute from "./routes/job.route.js";

const app = express();

const port = 5000;

// Middleware, routes, etc.
// For example, you can use express.json() to parse JSON bodies
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/job", jobRoute);

app.get("/api/users", (req, res) => {
  res.json({ users: ["user1", "user2", "user3", "user4"] });
});
app.get("/api/products", (req, res) => {
  res.json({ products: ["product1", "product2", "product3", "product4"] });
});
app.get("/api/category", (req, res) => {
  res.json({ category: ["category1", "category2", "category3", "category4"] });
});
app.get("/api/orders", (req, res) => {
  res.json({ orders: ["order1", "order2", "order3", "order4"] });
});
app.get("/api/payments", (req, res) => {
  res.json({ payments: ["payment1", "payment2", "payment3", "payment4"] });
});

app.get("/users", (req, res) => {
  res.json([
    {
      fullname: "user1",
      email: "user1@gmail.com",
      phone: "+25173923032",
      password: "1234546789",
    },
    {
      fullname: "user2",
      email: "user2@gmail.com",
      phone: "+25173923032",
      password: "1234546789",
    },
    {
      fullname: "user3",
      email: "user3@gmail.com",
      phone: "+25173923032",
      password: "1234546789",
    },
    {
      fullname: "user4",
      email: "user4@gmail.com",
      phone: "+25173923032",
      password: "1234546789",
    },
  ]);
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "MSI gf63",
      desc: "MSI Laptop with 16Gigs of RAM",
      category: "Electronics",
    },
    {
      id: 2,
      name: "Harry Potter",
      desc: "Original copy on hand",
      category: "Books",
    },
    {
      id: 3,
      name: "LG",
      desc: "45 inches TV",
      category: "Electronics",
    },
    {
      id: 4,
      name: "Jordan",
      desc: "42 shoe-size",
      category: "Clothes",
    },
    {
      id: 5,
      name: "T-shirt",
      desc: "5 pieces",
      category: "Clothes",
    },
  ]);
});

app.get("/categories", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Electronics",
      desc: "Home Electronics and supplies",
    },
    {
      id: 2,
      name: "Books",
      desc: "Original copies",
    },
    {
      id: 3,
      name: "Clothes",
      desc: "many brands",
    },
    {
      id: 4,
      name: "Automotive",
      desc: "many worldwide brands",
    },
    {
      id: 5,
      name: "Games",
      desc: "Both pc and Ps5 games",
    },
  ]);
});

app.listen(port, () => {
  console.log("Connected to backend.");
});
