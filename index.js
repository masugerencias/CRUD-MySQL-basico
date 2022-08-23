
    const mysql = require('mysql');
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'pruebaCRUD'
    });



        
    connection.connect((err)=> {
        if(!err){
            console.log('Connection Established Successfully');
           // connection.end();
        }else{
            console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        }
    });


  /*     //consulta simple  
    let query = 'SELECT * from tabla1';   //con conectar CONECTION END es suficiente para cerrar el servidor.
    connection.query(query, (err, rows) => {
        if(err) throw err;
        console.log('Datos de tabla1: \n', rows);
        //connection.end();
    });
*/
   /*      //INSERCION CON PARAMETROS
    let insertQuery = 'INSERT INTO ?? (??) VALUES (?)'; //con al interrogacion son los posibles valores q ue pueden tomar, ya nos lo contará.
    let query2 = mysql.format(insertQuery,["tabla1","campoTexto","Añadido desde Node segunda vez"]);
    
    connection.query(query2, (err, response) => {
        if(err) throw err;
        console.log(response.insertId);
        connection.end();
    });   */


/* //igual pero con SELECT
       
    let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    let query3 = mysql.format(selectQuery,["tabla1","campoTexto", "Añadido desde Node"]);
    connection.query(query3, (err, data) => {
        if(err) throw err;
        console.log(data);
        connection.end();
    }); 
 */
     
    
    
    let pQuery = 'CALL ??';
    let pName ="todoTabla1"
    let query6 = mysql.format(pQuery,[pName]);
    connection.query(query6, (err, response) => {
        if(err) throw err;
        console.log(response);
        console.log(query6);
        //connection.end();

    });

    let query7 = 'SELECT primerID()';

    connection.query(query7, (err, response) => {
        if(err) throw err;
        console.log(response);
        console.log(query7);
        connection.end();
    });
