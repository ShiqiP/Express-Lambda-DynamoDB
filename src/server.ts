import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { errorHandler, routerNotFoundHandler } from './common/utils';
import './common/aws.connect';
import userRoutes from './users/users.router';


const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(json());

app.use('/', userRoutes);

app.use(routerNotFoundHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on 3000`));
