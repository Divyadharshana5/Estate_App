import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // HASH THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);
    //CREATE A NEW USER AND SAVE TO DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user!" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    const isPasswordValid = await bcrypt.compareSync(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    res.setHeader("Set-Cookie", "test=" + "myValue").json("Success");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to login!" });
  }
};

export const logout = (req, res) => {};
