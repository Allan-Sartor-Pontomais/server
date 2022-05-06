import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

// Antes da rota verificar se existe um request em JSON
app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running');
});

