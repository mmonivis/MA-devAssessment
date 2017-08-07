<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if(isset($_POST['email'])){
    $to = "mmonivis@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " would like to know more information. See below for the information provided: " . "\n\n"
        . "Company: " . $_POST['company'] . "\n\n"
        . "Email Address:" . $_POST['email'] . "\n\n"
        . "Company City: " . $_POST['companyCity'] . "\n\n"
        . "Phone number: " . $_POST['phone'];
    $message2 = "Thank you for your submission, " . $first_name . ". We will be in touch with you shortly.";

    $headers = "From: " . $from;
    $headers2 = "From: " . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    // echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    $response = new stdClass();
    $response->message = "Success!";
    echo json_encode($response);
}else{
    $response = new stdClass();
    $response->message = "Fail!";
    echo json_encode($response);
}
?>

