import { Router } from "express";
import { registerSchema, loginSchema } from "../validators/auth.schema.js";
import * as AuthCtrl from '../controllers/auth.controller.js';
import { requireAuth } from "../middlewares/auth.js";
import { validateBody } from "../middlewares/validate.js";

const router = Router();

router.post('/register', validateBody(registerSchema), AuthCtrl.register);
router.post('/login', validateBody(loginSchema), AuthCtrl.login);
router.post('/me', requireAuth, AuthCtrl.me);

export default router;