const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");
// const inputCheck

// gets all of the dogs
router.get("/allDogs", (req, res) => {
  const sql = `SELECT dogs.*, CONCAT(owners.first_name, ' ' ,owners.last_name) 
    AS owner_name FROM dogs LEFT JOIN owners on dogs.dog_owner_id = owners.id;`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: rows,
      message: "success",
    });
  });
});

// CREATEs a dog
router.post("/createDogs", ({ body }, res) => {
  const errors = inputCheck(
    body,
    "name",
    "breed",
    "size",
    "description",
    "dog_owner_id"
  );
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  const sql = `INSERT INTO dogs (name, breed, size, description, dog_owner_id) VALUES(?,?,?,?,?)`;
  const params = [
    body.name,
    body.breed,
    body.size,
    body.description,
    body.dog_owner_id,
  ];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      data: body,
      message: "Successfully added a dog to the DataBase, congrats brav",
    });
  });
});

router.delete("/deleteDogs", ({ body }, res) => {
  const errors = inputCheck(body, "id");
  if (errors) {
    res.json({ error: errors });
    return;
  }

  const sql = `DELETE FROM dogs WHERE id = ?`;
  const params = [body.id];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (!results.affectedRows) {
      res.json({ message: "Can not find dog, please try again" });
    } else {
      res.json({
        data: body,
        id: results.affectedRows,
        message: "Successfully deleted a dog from the DataBase",
      });
    }
  });
});

module.exports = router;
