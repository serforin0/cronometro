import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import projectRoutes from './routes/project';
import chronomeRoutes from './routes/chronometer';

const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/chronometer', chronomeRoutes);

export default app;