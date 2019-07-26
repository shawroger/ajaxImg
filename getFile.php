<?php
$url=$_POST['imgSrc'];
date_default_timezone_set("Asia/Shanghai");
$filename=date("Ymd").date("_hisa").rand(1000,9999);
file_put_contents("img/".$filename, file_get_contents($url));
?>  
