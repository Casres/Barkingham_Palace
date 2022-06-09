const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");



router.put("/updateDogsName/:id", (req, res) => {
    const errors = inputCheck(req.body, "name");
    if (errors) {
        res.status(400).json({ error: errors });
    }

    const sql = `UPDATE dogs SET name = ? WHERE id = ?`;
    const params = [req.body.name, req.params.id];

    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message});
            return;
        } else if (!results.affectedRows) {
            res.json({ message: "dog not found"});
        } else {
            res.json({
                data: req.body,
                changes: results.affectedRows,
                message: "Dogs name changed!!"
            });
        }
    });
});

router.put("/updateDogsBreed/:id", (req, res) => {
    const errors = inputCheck(req.body, "breed");
    if (errors) {
        res.status(400).json({ error: errors });
        // why don't we 'return;' ??
    }

    const sql = `UPDATE dogs SET breed = ? WHERE ID = ?`;
    const params = [req.body.breed, req.params.id];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        } else if (!results.affectedRows) {
            res.json({ message: "Dog breed not found, please try again"});
        } else {
            res.json({
                data: req.body,
                change: results.affectedRows,
                message: "Successfully changed dogs breed"
            });
        }
    });
});

router.put("/updateDogsSize/:id", (req, res) => {
    const errors = inputCheck(req.body, "size");
    if (errors) {
        res.status(400).json({ error: errors });
        // why don't we 'return;' ??
    }

    const sql = `UPDATE dogs SET size = ? WHERE ID = ?`;
    const params = [req.body.size, req.params.id];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        } else if (!results.affectedRows) {
            res.json({ message: "Dog size not found, please try again"});
        } else {
            res.json({
                data: req.body,
                change: results.affectedRows,
                message: "Successfully changed dogs size"
            });
        }
    });
});

router.put("/updateDogsDescription/:id", (req, res) => {
    const errors = inputCheck(req.body, "description");
    if (errors) {
        res.status(400).json({ error: errors });
        // why don't we 'return;' ??
    }

    const sql = `UPDATE dogs SET description = ? WHERE ID = ?`;
    const params = [req.body.description, req.params.id];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        } else if (!results.affectedRows) {
            res.json({ message: "Dog description not found, please try again"});
        } else {
            res.json({
                data: req.body,
                change: results.affectedRows,
                message: "Successfully changed dogs description"
            });
        }
    });
});

router.put("/updateDogsOwnerId/:id", (req, res) => {
    const errors = inputCheck(req.body, "dog_owner_id");
    if (errors) {
        res.status(400).json({ error: errors });
        // why don't we 'return;' ??
    }

    const sql = `UPDATE dogs SET dog_owner_id = ? WHERE ID = ?`;
    const params = [req.body.dog_owner_id, req.params.id];
    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        } else if (!results.affectedRows) {
            res.json({ message: "Dog dog_owner_id not found, please try again"});
        } else {
            res.json({
                data: req.body,
                change: results.affectedRows,
                message: "Successfully changed dogs dog_owner_id"
            });
        }
    });
});

module.exports = router;