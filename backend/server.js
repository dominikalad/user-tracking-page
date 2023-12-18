const cors = require('cors');
const express = require('express');
const app = express();

require('./database');
const pageAccessRoutes = require('./routes/PageAccessRoutes');
const scrollEventRoutes = require('./routes/ScrollEventRoutes');
const reportRoutes = require('./routes/ReportRoutes');

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api', pageAccessRoutes);
app.use('/api', scrollEventRoutes);
app.use('/api', reportRoutes);

app.get('/', (req, res) => res.send('Listening...'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
