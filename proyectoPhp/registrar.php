<?php
include 'conexion.php';

$material = $_POST["material"];
$ftu = $_POST["ftu"];
$fcu = $_POST["fcu"];
$fyu = $_POST["fyu"];
$E = $_POST["E"];


$insertar = "INSERT INTO tblMateriales(material,ftu,fcu,fyu,ModuloYoung) VALUES ('$material',$ftu,$fcu,$fyu,$E)";

$verificar_material = mysqli_query($conexion, "SELECT * FROM tblMateriales WHERE material = '$material'");

if (mysqli_num_rows($verificar_material) > 0) {
    echo '<script>    
        alert("El material ya existe");
        window.history.go(-1);
        </script>';
    exit;
} else if (isset($material) or isset($ftu) or isset($fcu) or isset($fyu) or isset($E)) {
    echo '<script>    
        alert("Faltan campos por llenar.");
        window.history.go(-1);
        </script>';
    exit;
} 
$resultado = mysqli_query($conexion, $insertar);
if (!$resultado) {
    echo '<script> 
            alert("Error de registro");
            window.history.go(-1);
        </script>';
} else {
    echo '<script> 
            alert("Registro realizado correctamente");
            window.location.replace("./index.html");
        </script>';
}

mysqli_close($conexion);
