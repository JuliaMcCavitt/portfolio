<?php
if($_POST["Message"]) {
mail("juliamccavitt@gmail.com", "Message recived",
$_POST["Insert Your Message"]. "From: juliamaccavitt@gmail.com");
}
?>
