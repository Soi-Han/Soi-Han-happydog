<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HappyDog</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href='https://cdn-uicons.flaticon.com/uicons-bold-rounded/css/uicons-bold-rounded.css'>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/dropdown.js"></script>
    <script src="js/navgation.js"></script>
    <style>
        html {overflow:hidden;}
    </style>
</head>
<body>
    <div class="contianer">
        <video playinline autoplay muted loop>
            <source src="video/video.mp4">
        </video>
    
        <header>
            <nav>
                <div class="trigger">
                    <div class="trigger-click"></div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="index.html" id="main-logo"><h1>HappyDog</h1></a>
                <a href="index.html" id="main-symbol-logo"><img src="imgs/index/symbol-logo.png" alt="happydog"></a>
                

                <div class="nav-box">
                    <ul id="main-menu">
                        <li>
                            <a href="#">ABOUT</a>
                            <ul class="sub-menu">
                                <li><a href="process.html">분양과정</a></li>
                                <li><a href="types.html">분양견종류</a></li>
                            </ul>
                        </li>
                        <li><a href="#">VISIT</a></li>
                    </ul><!-- main-menu : end -->

                    <ul class="top-menu">
                        <li>
                            <div class="search-box">
                                <input type="search" name="search" placeholder="검색" class="search-txt">
                                <a href="#" class="search-btn"><i class="fi fi-br-search"></i></a>         
                              </div>
                        </li>
                    </ul>
                </div> <!-- nav-box : end -->            
            </nav>
        </header>
        <div class="clear"></div>