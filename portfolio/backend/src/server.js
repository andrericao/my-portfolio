import * as dotenv from 'dotenv';
dotenv.config();

import {app} from './app.js';

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));