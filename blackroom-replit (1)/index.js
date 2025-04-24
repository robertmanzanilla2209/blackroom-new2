
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/registro', async (req, res) => {
  try {
    const response = await fetch('https://faycuokgzldprmeclvsw.supabase.co/rest/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheWN1b2tnemxkcHJtZWNsdnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NjU5MDYsImV4cCI6MjA2MTA0MTkwNn0.FeZYtC-WHAOl4POiM154Gjl8xrciREsn5DON2auLJ_k',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheWN1b2tnemxkcHJtZWNsdnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NjU5MDYsImV4cCI6MjA2MTA0MTkwNn0.FeZYtC-WHAOl4POiM154Gjl8xrciREsn5DON2auLJ_k'
      },
      body: JSON.stringify(req.body)
    });

    if (response.ok) {
      res.status(200).json({ message: 'Registro exitoso' });
    } else {
      res.status(500).json({ error: 'Error al registrar' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
