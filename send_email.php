<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Retrieve form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $mobile = $_POST['mobile'];
  $message = $_POST['message'];

  // Set up email parameters
  $to = "ADRENALINE.admin@protonmail.com"; // Replace with your own email address
  $subject = "Name: $name ;New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nMobile: $mobile\nMessage: $message";

  // Send email
  if (mail($to, $subject, $body)) {
    echo "Thank you! Your message has been sent.";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
