const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Отдаём index.html на все запросы
app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AI Guardian запущен на порту ${PORT}`);
});
