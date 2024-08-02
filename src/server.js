const express = require('express');
const app = express();
const port = 3000;

// Statik dosyalar için public klasörünü ayarlayın
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Tüm diğer istekler için index.html'i gönderin
app.get('*', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
