<?php  
require_once "connect.php";


header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));
// $param = json_decode($_REQUEST);
// print_r('param:' .$param);


$photo = $data->photo;

// $photo = base64_decode($photo64);
// $photo = imagecreatefromsstring($photo64);




$birth = $data->birth;
$longitude = $data->longitude;
$latitude = $data->latitude;
$sector = $data->sector;
$square = $data->square;
$row = $data->row;
$number = $data->number;
$numberOfPlace = $data->numberOfPlace;
$surname = $data->surname;
$name = $data->name;
$patronimyc = $data->patronimyc;
$die = $data->die;
$numberBook = $data->numberBook;
$numberReg = $data->numberReg;
$other = $data->other;


$sql = "INSERT INTO cemetery_users (photo,latitude, longitude, sector, square, row, number, numberOfPlace, surname, name, patronimyc, birth, die, numberBook, numberReg, other, time) VALUES ('$photo','$latitude','$longitude','$sector','$square','$row', '$number', '$numberOfPlace', '$surname', '$name', '$patronimyc', '$birth', '$die', '$numberBook', '$numberReg', '$other', NOW())";

// Создаем соединение
$conn = mysqli_connect($servername, $username, $password, $database);
// Проверяем соединение
if (!$conn) {
    echo ("Произошла ошибка при подключении к базе данных " . mysqli_connect_error());
} else {
    echo ("Соединение установленно");
    echo '<br />';
    mysqli_set_charset($conn, "utf8");
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        echo ("Произошла ошибка при выполнении запроса ". mysqli_error($conn));
        echo '<br />';
        echo json_encode($response);
    } else {
        echo ("Данные занесены");
        
    }
}

mysqli_close($conn);
  
?>
