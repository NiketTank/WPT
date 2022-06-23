const mysql = require('mysql2');
JSON.stringify(result)
//http://localhost:8081/poc2?xyz=3
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
	port:3306
});
var result ="";
connection.query("select * from chair where leg = ?", [req.body.xyz.pqr], (err, res1) => {
        if (err) {
            result = err;
			console.log("trouble " + err);
        } else {
            result = res1;
			console.log("success" + result)
        }
		console.log("38 " + );
        res.send(result);
    });
	 connection.query('update chair set leg = ? , leg2 = ? where leg3 = ?', [req.body.inp3, req.body.inp2, req.query.body.inp3], (err, res1) => {
        if (err) {
            result = err;
        } else {
            result = {
                concept: "so what",
                rws: res1.affectedRows
            };
        }
        res.send(result);
    });

    
$('Add a book').click(()=>)
{
    console.log("Add a book button clicked")
}
