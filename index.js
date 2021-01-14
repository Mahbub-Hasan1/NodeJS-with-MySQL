var mysql = require('mysql');

var DataConnectionConfig = { host: "localhost", user: "root", password: "", database: "school", }

var con = mysql.createConnection(DataConnectionConfig);

con.connect(function (error) {
    if (error) {
        console.log("Connection File");
    }
    else {
        console.log("Connection Successfully");

        InsertData(con)
    }
})

function InsertData(con) {

    let SQLQuery="INSERT INTO `student_list`( `name`, `class`, `phone`, `city`) VALUES ('mahbub', 'ten', '01700000000', 'Daka')"
    con.query(SQLQuery, function(error){
        if(error){
            console.log("Data insert File")
        }
        else{
            console.log("Data insert Successfully")
        }
    })

}