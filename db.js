const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const dbname = "chat-app";
const url = "mongodb+srv://sopadecaracol1:sopadecaracol1@cluster0.cnmg4.mongodb.net/chat-app?retryWrites=true&w=majority";
const mongoOptions = {useNewUrlParser:true};

const state = {
    db:null
}

const connect = (cb) => {
    if(state.db){
        cb();
    } else {
        MongoClient.connect(url,mongoOptions,(err,client)=>{
            if(err){
                cb(err);
            } else {
                    state.db = client.db(dbname);
                    cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}
const getDB = ()=>{
    return state.db;
}

module.exports={getDB,connect,getPrimaryKey};
