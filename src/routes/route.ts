import express ,{Request, Response} from 'express';
import {getHome} from '../controllers/index';

const router=express.Router();

router.get('/home',getHome)

export {router}