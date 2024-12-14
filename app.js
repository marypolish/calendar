const express = require('express');
const {sequelize} = require('./config/config.js');  // Використовуємо конфігурацію з одного файлу
const eventRoutes = require('./routes/events.js'); //Підключення маршруту
const userRoutes = require('./routes/user.js');
const groupRoutes = require('./routes/group.js');
const departmentRoutes = require('./routes/department.js');

const app = express();
app.use(express.json()); // Підключаємо middleware для парсингу JSON

// Підключаємо маршрути
app.use('/api', eventRoutes);
app.use('/api', userRoutes);
app.use('/api', groupRoutes);
app.use('/api', departmentRoutes);

// Синхронізація бази даних
sequelize.sync({ alter: true })
  .then(() => console.log('База даних синхронізована'))
  .catch((error) => console.error('Помилка при синхронізації:', error));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});