<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    $to = 'rishabhmenasinakayi@gmail.com'; // Enter your email address here
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\n\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo '<p>Thank you for contacting me. I will get back to you soon!</p>';
    } else {
        echo '<p>Sorry, there was an error sending your message. Please try again later.</p>';
    }
} else {
    // If it's not a POST request, redirect to the contact form page
    header("Location: contact.html");
    exit;
}
?>
