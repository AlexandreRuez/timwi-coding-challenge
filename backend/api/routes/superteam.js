const express = require("express");
const router = express.Router();
const SuperteamController = require('../controllers/superteam');
const checkAuth = require('../middleware/check-auth');

router.post("/", checkAuth, SuperteamController.addHero);

router.get("/", checkAuth, SuperteamController.getAllHeroes);

router.get("/:id", checkAuth, SuperteamController.getHero);

router.delete("/:id", checkAuth, SuperteamController.removeHero);


module.exports = router;
