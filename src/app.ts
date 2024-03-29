import express from 'express';
import { router } from './routes';
import "reflect-metadata";
import './database/connection';

const app = express();

app.use(express.json());
app.use(router);

export { app }