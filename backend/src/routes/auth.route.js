import {Router} from "express";

const router = Router();

router.get("/", (req,res) => {
    res.send("Auth Router get route")
})

export default router;