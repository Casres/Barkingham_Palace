const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

router.get("/owners/dogs", (req, res) => {
  const sql = `SELECT CONCAT(owners.first_name, ' ' , owners.last_name) AS owner_name, dogs.name AS dog_name, dogs.breed AS dog_breed, dogs.size AS dog_size FROM owners LEFT JOIN dogs ON dogs.dog_owner_id = owners.id WHERE dog_owner_id IS NOT NULL;`;

  db.query(sql, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: row,
      message: "Success",
    });
  });
});

router.get("/owners/cats", (req, res) => {
  const sql = `SELECT CONCAT(owners.first_name, ' ' , owners.last_name) AS owner_name, cats.name AS cat_name, cats.breed AS cat_breed, cats.size AS cat_size FROM owners LEFT JOIN cats ON cats.cat_owner_id = owners.id WHERE cat_owner_id IS NOT NULL;`;

  db.query(sql, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      data: row,
      message: "Success",
    });
  });
});

module.exports = router;
