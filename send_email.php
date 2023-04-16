<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $to = 'dandan284@gmail.com';
    $subject = 'New message from ' . $name;
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";
    if (mail($to, $subject, $body, $headers)) {
        echo '<p>Thank you for your message!</p>';
    } else {
        echo '<p>Sorry, there was a problem sending your message. Please try again later.</p>';
    }
}
?>
