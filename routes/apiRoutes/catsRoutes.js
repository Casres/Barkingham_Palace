





const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

// getting all cats (READ)
router.get("/allCats", (req, res) => {
  const sql = `SELECT cats.*, CONCAT(owners.first_name,' ',owners.last_name) AS owner_name
    FROM cats LEFT JOIN owners on cats.cat_owner_id = owners.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
      message: "Success",
    });
  });
});

// creating a cat (CREATE)
router.post("/createCats", ({ body }, res) => {
  const errors = inputCheck(
    body,
    "name",
    "breed",
    "size",
    "description",
    "cat_owner_id"
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `INSERT INTO cats (name, breed, size, description, cat_owner_id) VALUES(?,?,?,?,?)`;
  const params = [
    body.name,
    body.breed,
    body.size,
    body.description,
    body.cat_owner_id,
  ];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ data: body, message: "Successfully added a cat" });
  });
});

// (DELETE)
router.delete("/deleteCats", ({ body }, res) => {
  const errors = inputCheck(body, "id");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `DELETE FROM cats WHERE id = ?`;
  const params = [body.id];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (!results.affectedRows) {
      res.json({ message: "Can not find cat to delete, please try again" });
    } else {
      res.json({
        data: results.affectedRows,
        id: body.id,
        message: "Successfully deleted cat from DataBase",
      });
    }
  });
});

module.exports = router;
