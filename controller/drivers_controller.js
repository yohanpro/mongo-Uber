const Driver = require('../models/driver');


module.exports = {
    greeting(req, res) {
        res.send({
            name: 'john'
        });
    },
    // greeting: function(req,res){
    //     res.send({});
    // } 위의 함수는  이것과 같음.
    create (req, res) {
        console.log(req);
        res.send({
            안녕: 'hihi'
        });
    }
};