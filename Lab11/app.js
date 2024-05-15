const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')
const app = express();
const path = require("path")

app.use(express.urlencoded(
    {
        extended: true
    }
));

app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(productRouter);
app.use(userRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


app.listen(3000, () => console.log('listening on 3000...'));