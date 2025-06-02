const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
app.use(bodyParser.json());

// Конфигурация подключения к SQL Server
const GG = {
    user: 'Admin',
    password: '123',
    server: 'DESKTOP-MGHH224\SQLEXPRESS', // или IP сервера
    database: 'GG',
    options: {
        encrypt: true, // для Azure
        trustServerCertificate: true // для локальной разработки
    }
};

// API endpoint для обработки заказов
app.post('/api/orders', async (req, res) => {
    try {
        const { Имя, Телефон, Email, Комментарии } = req.body;
        
        // Подключаемся к SQL Server
        await sql.connect(GG);
        
        // Сохраняем заказ в базу данных
        const result = await sql.query`
            INSERT INTO Заказы (Имя, Телефон, Email, ID_veshi, Комментарии,)
            VALUES (${Имя}, ${Телефон}, ${Email}, ${Комментарии} 
                   (SELECT ID_client FROM Каталог WHERE Название = ${ID_M_veshi}, ${ID_W_veshi}), 
                   ${Комментарии}, GETDATE(), 'Новый')
        `;
        
        res.json({ success: true, message: 'Заказ успешно сохранен' });
    } catch (err) {
        console.error('Ошибка при сохранении заказа:', err);
        res.status(500).json({ success: false, message: err.message });
    } finally {
        sql.close();
    }
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});