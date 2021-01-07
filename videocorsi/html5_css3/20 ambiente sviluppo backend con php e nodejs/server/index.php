<?php
// for GET data
/*
if(!empty($_GET)){
    echo json_encode($_GET);
}

//POST
if(!empty($_POST)){
    echo json_encode($_POST);
}*/
// both GET POST

if(!empty($_REQUEST)){
    echo json_encode($_REQUEST);
}
