const express = require('express');
const routes = require('./routes');
const cors = require('cors')
/**
 * Tipos de paramentros?
 * 
 * Query: Paramentros nomeados enviados na rota apos "?" (Filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);