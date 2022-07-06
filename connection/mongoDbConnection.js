let mongoose = require("mongoose")


function mongoDbConnection(){
    mongoose.connect("mongodb://localhost/amazon"),{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

module.exports = {
    mongoDbConnection
}