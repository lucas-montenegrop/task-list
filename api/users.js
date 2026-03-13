import express from "express";
import { createUser } from "#db/queries/users";
import { requirebody } from "#middleware/requirebody"
import { createToken} from "#utils/jwt";

const router = express.Router();
export default router;


router.post("/", requireBody(["username", "password"]), async (req, res) => {
    const { username, password } = req.body;
    const user = await createUser(username, password);
    const token = createToken ({id:user.id});
    res.status 201 send task
}
    
export default router;