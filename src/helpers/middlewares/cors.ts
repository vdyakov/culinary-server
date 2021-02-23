import cors from 'cors';

const options = {
	origin: '*',
	methods: ['GET', 'POST'],
	credentials: true,
	maxAge: 3600
};

export default cors(options);