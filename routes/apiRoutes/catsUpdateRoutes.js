const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

router.put("/updateCatsName/:id", (req, res) => {
  const errors = inputCheck(req.body, "name");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE cats SET name = ? WHERE id = ?;`;
  const params = [req.body.name, req.params.id];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (!results.affectedRows) {
      res.json({ message: "Can not find pet" });
    } else {
      res.json({
        data: req.body,
        changes: results.affectedRows,
        messages: "Successfully edited",
      });
    }
  });
});

router.put("/updateCatsBreed/:id", (req, res) => {
  const errors = inputCheck(req.body, "breed");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE cats SET breed = ? WHERE id = ?;`;
  const params = [req.body.breed, req.params.id];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (!results.affectedRows) {
      res.json({ message: "Can not find pet" });
    } else {
      res.json({
        data: req.body,
        changes: results.affectedRows,
        messages: "Successfully edited",
      });
    }
  });
});

router.put("/updateCatsSize/:id", (req, res) => {
  const errors = inputCheck(req.body, "size");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE cats SET size = ? WHERE id = ?;`;
  const params = [req.body.size, req.params.id];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (!results.affectedRows) {
      res.json({ message: "Can not find pet" });
    } else {
      res.json({
        data: req.body,
        changes: results.affectedRows,
        messages: "Successfully edited",
      });
    }
  });
});

router.put("/updateCatsDescription/:id", (req, res) => {
  const errors = inputCheck(req.body, "description");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE cats SET description = ? WHERE id = ?;`;
  const params = [req.body.description, req.params.id];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (!results.affectedRows) {
      res.json({ message: "Can not find pet" });
    } else {
      res.json({
        data: req.body,
        changes: results.affectedRows,
        messages: "Successfully edited",
      });
    }
  });
});

router.put("/updateCatsOwnerId/:id", (req, res) => {
  const errors = inputCheck(req.body, "cat_owner_id");
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }

  const sql = `UPDATE cats SET cat_owner_id = ? WHERE id = ?;`;
  const params = [req.body.cat_owner_id, req.params.id];

  db.query(sql, params, (err, results) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    } else if (!results.affectedRows) {
      res.json({ message: "Can not find pet" });
    } else {
      res.json({
        data: req.body,
        changes: results.affectedRows,
        messages: "Successfully edited",
      });
    }
  });
});

module.exports = router;
