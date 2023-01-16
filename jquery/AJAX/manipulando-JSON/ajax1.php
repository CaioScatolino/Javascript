<?php
$user = $_POST['user'];
$password = $_POST['password'];

$array= array('status' => '');

if($user == 'Caio' && $password == '123') {
    $array['status'] = 'ok';
}else {
    $array['status'] = 'Login ou senha incorretos';
}


echo json_encode($array);