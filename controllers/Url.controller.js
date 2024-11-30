const db = require("../models/index.js");
const Url = db.Url;
const { nanoid } = require("nanoid");
// Create Url Api
const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortUrl = nanoid(8);
    const url = await Url.create({
      originalUrl,
      shortUrl,
      userId: req.user.id,
    });
    res.status(201).json(url);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Get Url Api
const getShortUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ where: { shortUrl } });
    if (!url) return res.status(404).json({ message: "URL not found" });
    console.log(url);
    url.clickCount += 1;
    await url.save();
    res.redirect(url.originalUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Update Url Api
const updateShortUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const { originalUrl } = req.body;

    // Find the URL entry using the shortUrl
    const url = await Url.findOne({ where: { shortUrl, userId: req.user.id } });
    if (!url) {
      return res.status(404).json({ message: "URL not found or unauthorized" });
    }

    // Update the original URL
    url.originalUrl = originalUrl;
    await url.save();

    res.status(200).json(url);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Delete Url Api
const deleteShortUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.destroy({ where: { shortUrl, userId: req.user.id } });
    if (!url)
      return res.status(404).json({ message: "URL not found or unauthorized" });

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createShortUrl,
  getShortUrl,
  deleteShortUrl,
  updateShortUrl,
};
