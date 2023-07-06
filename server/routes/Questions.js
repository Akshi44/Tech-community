import express from 'express';
import Auth from '../middlewares/Auth.js';
import { AskQuestion,getAllquestions ,deleteQuestion} from '../controllers/Questions.js'
import { voteQuestion } from '../../client/src/api/index.js';

const router = express.Router()

router.post("/Ask", Auth, AskQuestion);
router.get('/get',getAllquestions);
router.delete("/delete/:id", auth, deleteQuestion);
router.patch('/vote/:id',voteQuestion)
export default router