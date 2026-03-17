import db from "#db/client";
import bcrypt from "bcrypt";

export async function getUserById(id) {
  const sql = `
    SELECT *
    FROM users
    WHERE id = $1
  `;
  const { rows: [user],
  } = await db.query(sql, [id]);
  return user;
}

export async function createUser(username, password) {
  const sql = `
Insert INTO users
  (username, password) 
VALUES ($1, $2) 
RETURNING *;
`;
  const smoothie = await bcrypt.hash(password, 10);
  const {
    rows: [user],
  } = await db.query(sql, [username, smoothie]);
  return user;
}
export async function getUsernameAndPassword(username, password) {
  const sql = `
  SELECT *
  FROM users 
  WHERE username = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [username]);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;
  return user;
}

export async function getUserByUsernameAndPassword(username, password) {
  const sql = `
  SELECT *
  FROM users
  WHERE username = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [username]);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;
  return user;
}
