<?php 

header('Access-Control-Allow-Origin:*');
header("Content-Type:application/json; charset = UTF-8");
header("Access-Control-Allow-Method : PUT, GET, POST, DELETE");
header("Access-Control-Allow-Header : Origin, X-Requested-With, Content-Type, Accept");

$servername = "127.0.0.1:3306 ";
$dbname="angdb ";
$username=" root ";
$password=  "   ";

$conn = new musqli($servername, $username , $password,   $dbname);

?>
