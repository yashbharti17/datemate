<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Here, you would need to use the Google Sheets API to send the data to Google Sheets.
  // This involves authentication and setting up the API properly.

  // Example:
  // $data = array($name, $email, $message);
  // $sheetService->writeToGoogleSheet($data); // This is a placeholder for your Google Sheets writing logic.

  // Redirect user after submission
  header("Location: thank-you.html");
  exit();
}
?>
