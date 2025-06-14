import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  try {
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};
