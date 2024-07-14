<?php
$con=mysqli_connect("localhost","root","","inform");
$p=$_POST["p"];
$u=$_POST["u"];
$pf=$_POST["pf"];
$req="INSERT INTO `informa` (`mdp`, `platform`, `nom`) VALUES ('$p', '$u', '$pf')";
mysqli_query($con,$req);
?>