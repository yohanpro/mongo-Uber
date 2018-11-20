const app = require('./app');

app.get('/api',(req,res)=>{
    res.send('hi')
})
app.listen(3000, ()=>{
    console.log('app is now on 3000');
});