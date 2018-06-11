module.exports = (app) => {
    app.get('/try', (req, res)=>{
        res.send('hello world');
    })

    
}
