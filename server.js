const express = require('express');
const connectDb = require('./config/db')


const app = express();

// Connect Database with mongoose!!!
connectDb()

// Init middleware 
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ msg: 'Server home' })
})

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/wallet', require('./routes/wallet'))
app.use('/api/fiat', require('./routes/fiat'))
app.use('/api/profile', require('./routes/profile'))


app.listen(PORT, (() => console.log(`Server started on ${PORT}`)))


