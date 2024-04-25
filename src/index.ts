import express from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(`Running ${ENV}`);
});
