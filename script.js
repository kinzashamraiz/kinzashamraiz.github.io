<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 50px;
      background: #f4f6f8;
    }
    button {
      padding: 12px 20px;
      font-size: 16px;
      border: none;
      border-radius: 6px;
      background: #007bff;
      color: white;
      cursor: pointer;
    }
  </style>
</head>

<body>

  <h1>Welcome to My Website 🌸</h1>

  <p id="msg">Button dabao</p>

  <button onclick="changeText()">Click Me</button>

  <!-- JavaScript START -->
  <script>
    function changeText() {
      document.getElementById("msg").innerText =
        "JavaScript bilkul sahi kaam kar rahi hai 🚀";
    }
  </script>
  <!-- JavaScript END -->

</body>
</html>
