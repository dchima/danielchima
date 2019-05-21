<?php
$errors = '';
$myemail = 'chimasinc@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['email']) ||
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = $subject;
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers, '-fchimasinc@gmail.com');
	//redirect to the 'thank you' page
	header('thank-you.html');
}
?>
<!--
<!DOCTYPE html>
<html>
<head>
	<title>mail</title>
</head>

<body>
  <h2>this is an error page</h2>
<?php
echo nl2br($errors);
?>


</body>
</html>
-->
