import prisma from "../lib/prisma.js";

export const addMessage = async (req, res) => {
  try {
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to add messages!" });
  }
};
