import { Cipher } from "crypto";
import { v4 as uuidv4 } from "uuid";
import executeQuery from "./db";
import moment from "moment";

export async function createUser({ email, password }) {
  const salt = Cipher.randomBytes(16).toString("hex");
  const hash = Cipher.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString(
    "hex"
  );
  const user = {
    id: uuidv4(),
    createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    email,
    hash,
    salt,
  };

  try {
    const result = await executeQuery({
      query:
        "INSERT INTO users (id, createdAt, email, hash, salt) VALUES(?, ?, ?, ?, ?)",
      values: [
        user.id,
        user.createdAt.toString(),
        user.email,
        user.hash,
        user.salt,
      ],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  return user;
}
