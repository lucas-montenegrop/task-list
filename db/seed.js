import db from "#db/client";

import { createTask } from "#db/queries/tasks";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const user = await createUser("Example", "123")
  console.log(user)
  const task = await createTask("title", true, user.id)
  console.log(task)
}
