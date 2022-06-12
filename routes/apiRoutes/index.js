const express = require("express");
const router = express.Router();

router.use(require("./dogsRoutes"));
router.use(require("./dogsUpdateRoutes"));
router.use(require("./catsRoutes"));
router.use(require("./catsUpdateRoutes"));
router.use(require("./ownersRoutes"));

module.exports = router;
