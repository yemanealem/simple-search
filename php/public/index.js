<?php

$url="https://jsonplaceholder.typicode.com/comments?postId=3"
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION,     true); 
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

   $a = curl_exec($ch); 

   $url = curl_getinfo($ch,         CURLINFO_EFFECTIVE_URL); 


      return json_encode($url);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");