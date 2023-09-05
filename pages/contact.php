<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../Styling/contact.css">
    <link rel="icon" href="../media/logo1.png">
    <link rel="stylesheet" href="../Styling/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
</head>
<body>
    <nav class="main">
        <div class="header">
            <img src="../media/logo2.png" class="logo" alt="">
            <a class="active" href="contact.php">Contact</a>
            <a href="projects.html">Projects</a>
            <a href="aboutme.html">About me</a>
            <a href="../Root/index.html">Home</a>
        </div>
    </nav>


    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $company = $_POST["company"];
        $message = $_POST["message"];
       
        $to = "hamzaozel66@gmail.com"; 
        $subject = "Nieuw formulier ingediend";
        $body = "Naam: $name\n";
        $body .= "E-mail: $email\n";
        $body .= "Telefoonnummer: $phone\n";
        $body .= "Bedrijfsnaam: $company\n";
        $body .= "Bericht:\n$message";
       
        // Stuur de e-mail
        mail($to, $subject, $body);
       
        // Toon een succesbericht
        echo "<p style='color:rgb(226, 226, 226); text-align:center;'>Bedankt! Je formulier is succesvol ingediend.</p>";
    }
    ?>
        <div class="contact1">
            <h1>Contact Me</h1>
            
            <P>I hope we can do great things together in the future </P>
            <p class="email">My e-mail adress: hamzaozel66@gmail.com</p>
        </div>


                
    <div class="contactform">
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
            <label for="name">Name:</label><br>
            <input type="text" name="name" id="name" required><br><br>

            <label for="email">Email:</label><br>
            <input type="email" name="email" id="email" required><br><br>

            <label for="phone">(Optional)Phone number:</label><br>
            <input type="tel" name="phone" id="phone"><br><br>

            <label for="company">(Optional)Company:</label><br>
            <input type="text" name="company" id="company"><br><br>

            <label for="message">Message:</label><br>
            <textarea name="message" id="message" rows="auto" required></textarea><br>

            <button class="submit" type="submit" value="Submit">submit</button>
        </form>
    </div>

</body>
</html>