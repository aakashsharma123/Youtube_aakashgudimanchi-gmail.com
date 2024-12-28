import {Router} from 'express';

const router = Router();

router.get ('/getComments');
router.post ('/addComment');
router.put('/updateComment');
router.delete('/deleteComment');