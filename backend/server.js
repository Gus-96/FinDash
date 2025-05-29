const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Habilita CORS

// Rota do IBOVESPA
app.get('/api/ibovespa', async (req, res) => {
  try {
    const response = await axios.get('https://query1.finance.yahoo.com/v8/finance/chart/%5EBVSP');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar IBOVESPA' });
  }
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));