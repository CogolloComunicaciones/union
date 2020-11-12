<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);

$alert = '';

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  $service = $_POST['service'];

  try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'danielrojas243@gmail.com'; 
    $mail->Password = 'dalis@2019'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = '587';

    $mail->setFrom('danielrojas243@gmail.com'); 
    $mail->addAddress('danielrojas243@gmail.com'); 

    $mail->isHTML(true);
    $mail->Subject = 'Mensaje recibido (Pagina Union Capital)';
    $mail->Body = "<div style='background: url(https://cogollocomunicaciones.github.io/union/dist/images/footer.jpg); margin-top: 50px; padding: 50px; background-size: cover; background-position: center; color: #fff; font-weight: 100;'><img src='https://cogollocomunicaciones.github.io/union/dist/images/logo-union-capital.png' alt='Union Capital' width='287'> <br> <p>Nombre : $name <br> Apellidos : $lastname <br> Email: $email <br> Servicio : $service</p></div>";

    $mail->send();
    $alert = '<div class="alert-success">
      <span>¡Mensaje enviado! Gracias por contactarnos.</span>
    </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
      <span>'.$e->getMessage().'</span>
    </div>';
  }
}
?>
