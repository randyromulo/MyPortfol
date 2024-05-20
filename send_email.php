<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sender_name = $_POST["sender-name"];
    $sender_email = $_POST["sender-email"];
    $message = $_POST["message"];

    $to = "romulorandy65@gmail.com";
    $subject = "Message from Portfolio Contact Form";
    $body = "Sender Name: $sender_name\n";
    $body .= "Sender Email: $sender_email\n";
    $body .= "Message: $message\n";

    $headers = "From: $sender_name <$sender_email>";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Error sending message.";
    }
}
?>