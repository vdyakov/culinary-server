import express, { Express as IExpress } from 'express';
import mongoose from 'mongoose';
import config from 'config';
import bodyParser from 'body-parser';
import ApiRouter from './routes/api.router';
import cors from './helpers/middlewares/cors';

const app: IExpress = express();

const PORT: number = config.get('PORT') || 8000;
const MONGO_URL: string = config.get('MONGO_URL');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}));

// parse application/json
app.use(bodyParser.json())

app.use('/api', cors, ApiRouter);

async function start() {
	try {
		await mongoose.connect(MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true
		});

		app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));
	} catch (e) {
		console.log('Server error', e);
		process.exit(1);
	}
}

start();
