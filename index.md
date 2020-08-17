<!DOCTYPE html>
<html lang="en-us" class="h-100">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sys/reboot</title>
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- Google font -->
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body class="d-flex flex-column h-100">
    <!-- Music by Eric Matyas - www.soundimage.org -->
    <iframe src="assets/Security-Breach_Looping.mp3" allow="autoplay" style="display:none" id="iframeAudio"></iframe>
    <audio autoplay loop id="playaudio">
        <source src="assets/Security-Breach_Looping.mp3" type="audio/mpeg">
    </audio>

    <main role="main" class="container">
        <h1 class="page-header">sys/reboot</h1>
        <h2>Input correct password to initiate manual reboot</h2>
        <div class="container mt-5">
            <p>Wrong Guesses: <span id="wrong-guesses"></span></p>
            <p><span id="win-counter"></span> Wins</p>
            <p><span id="loss-counter"></span> Losses</p>
        </div>
        <div class="mt-5 text-center">
            <p><span id="guesses-left"></span> attempts until critical system failure.</p>
            <p id="puzzle-state"></p>
        </div>
    </main>

    <div class="footer mt-auto">
        <p class="float-right mr-3">/created by <a href="https://github.com/herrenchek">herrenchek</a></p>
    </div>

    <script src="js/logic.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>