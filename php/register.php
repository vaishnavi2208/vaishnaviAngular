<?php

require "data.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$name = $request -> name;
$email = $request -> email;
$pwd = $request -> password;


$sql = "insert into user (name,password, email ) values ('$name', 
$pwd,'$email') ";

if(mysqli_query($conn,$sql)) 
{
echo json_encode("new user added successfully");
}

?>