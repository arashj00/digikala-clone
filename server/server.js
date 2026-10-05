// server/server.js
import express from "express";
import cors from "cors";
import db from "./dbConnect.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/auth/register", (req, res) => {
  const fullName = String(req.body.fullName ?? "").trim();
  const phone = String(req.body.phone ?? "").trim();
  const password = String(req.body.password ?? "");

  if (!fullName || !phone || !password) {
    return res.status(400).json({ message: "همه فیلدها الزامی هستند" });
  }

  try {
    const existingUser = db
      .prepare("SELECT id FROM users WHERE phone = ?")
      .get(phone);

    if (existingUser) {
      return res.status(409).json({
        message: "این شماره قبلاً ثبت‌نام کرده است. لطفاً وارد شوید.",
      });
    }

    const result = db
      .prepare(
        "INSERT INTO users (fullName, phone, passHash) VALUES (?, ?, ?)",
      )
      .run(fullName, phone, password);

    return res.status(201).json({
      message: "ثبت‌نام با موفقیت انجام شد",
      user: { id: result.lastInsertRowid, fullName, phone },
    });
  } catch {
    return res.status(500).json({ message: "خطا در ثبت‌نام" });
  }
});

app.post("/api/auth/login", (req, res) => {
  const phone = String(req.body.phone ?? "").trim();
  const password = String(req.body.password ?? "");

  if (!phone || !password) {
    return res.status(400).json({
      message: "شماره تلفن و رمز عبور الزامی هستند",
    });
  }

  try {
    const user = db
      .prepare(
        "SELECT id, fullName, phone, passHash FROM users WHERE phone = ?",
      )
      .get(phone);

    if (!user) {
      return res.status(404).json({
        message: "حسابی با این شماره وجود ندارد. ابتدا ثبت‌نام کنید.",
      });
    }

    if (user.passHash !== password) {
      return res.status(401).json({ message: "رمز عبور اشتباه است" });
    }

    return res.json({
      message: "ورود موفق بود",
      user: { id: user.id, fullName: user.fullName, phone: user.phone },
    });
  } catch {
    return res.status(500).json({ message: "خطا در ورود" });
  }
});

app.get("/api/products", (req, res) => {
  const { category, subCategory } = req.query;
  const conditions = [];
  const params = [];
  let query = " SELECT * FROM products ";
  if (category) {
    conditions.push(" category = ? ");
    params.push(category);
  }
  if (subCategory) {
    conditions.push(" subCategory = ? ");
    params.push(subCategory);
  }

  if (conditions.length > 0) {
    query += " WHERE " + conditions.join(" AND ");
  }
  try {
    const rows = db.prepare(query).all(params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/products/:id", (req, res) => {
  try {
    const row = db
      .prepare("SELECT * FROM products WHERE id = ?")
      .get(req.params.id);
    if (!row) {
      return res.status(404).json({ message: "محصولی پیدا نشد" });
    }
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/categories/MTree", (req, res) => {
  try {
    const rows = db
      .prepare(
        "SELECT id , name ,icon , parentId  FROM categories ORDER BY sortOrder , id",
      )
      .all();

    const map = {};
    rows.forEach((row) => {
      map[row.id] = { ...row, children: [] };
    });

    const tree = [];
    rows.forEach((row) => {
      if (row.parentId === null) {
        tree.push(map[row.id]);
      } else {
        map[row.parentId].children.push(map[row.id]);
      }
    });
    res.json(tree);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
