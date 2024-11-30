const express = require("express");
const {
  createShortUrl,
  getShortUrl,
  deleteShortUrl,
  getUrlAnalytics,
  updateShortUrl,
} = require("../controllers/Url.controller.js");
const authenticate = require("../middleware/auth.js");
const router = express.Router();

router.post("/", authenticate, createShortUrl);
router.get("/:shortUrl", getShortUrl);
router.post("/:shortUrl", authenticate, updateShortUrl);
router.delete("/:shortUrl", authenticate, deleteShortUrl);

module.exports = router;
