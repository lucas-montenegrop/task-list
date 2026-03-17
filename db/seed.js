import db from "#db/client";

import { createTask } from "#db/queries/tasks";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  const user = await createUser("Example", "123");
  console.log(user);

  const task1 = await createTask("title 1", true, user.id);
  const task2 = await createTask("title 2", false, user.id);
  const task3 = await createTask("title 3", true, user.id);

  console.log(task1);
  console.log(task2);
  console.log(task3);
}
