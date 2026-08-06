const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Connection - apna password yahan daal dena
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // <-- apna mysql password yahan
  database: 'sms_db'
});

db.connect(err => {
  if(err) throw err;
  console.log('MySQL Connected...');
});

// 1. Sab students dekhna
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

// 2. Naya student add karna
app.post('/students', (req, res) => {
  const { name, roll, course } = req.body;
  db.query('INSERT INTO students (name, roll, course) VALUES (?,?,?)', [name, roll, course], (err, result) => {
    if(err) throw err;
    res.send({ message: 'Student Added' });
  });
});

// 3. Student delete karna
app.delete('/students/:id', (req, res) => {
  db.query('DELETE FROM students WHERE id = ?', [req.params.id], (err, result) => {
    if(err) throw err;
    res.send({ message: 'Student Deleted' });
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});