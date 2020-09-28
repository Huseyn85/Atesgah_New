// For TAB MENU

function openTab(evt, topicName) {
    var i,
        tabcontent,
        tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i]
            .className
            .replace(" active", "");
    }
    document
        .getElementById(topicName)
        .style
        .display = "block";
    evt.currentTarget.className += " active";
}

// Tab2

function openTopic(evt, topicName) {
    var i,
        tabcontent,
        tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i]
            .className
            .replace(" active", "");
    }
    document
        .getElementById(topicName)
        .style
        .display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function () {
    $(".light_box1").click(function () {
        $(".light_box1").addClass("active_light");
        $(".light_box2").removeClass("active_light");
    });

    $(".light_box2").click(function () {
        $(".light_box2").addClass("active_light");
        $(".light_box1").removeClass("active_light");
    });
});

// Dark Mode
function toggleDarkMode(el) {

    const element = document.getElementsByTagName("section")[0];
    const className = "dark-mode";
    let arr = element
        .className
        .split(" ");

    if (arr.indexOf(className) == -1) {
        element
            .classList
            .add(className);
    } else {
        element
            .classList
            .remove(className);
    }
}

function toggleLightMode(ell) {

    const element = document.getElementsByTagName("section")[0];
    const className = "light-mode";
    let arr = element
        .className
        .split(" ");

    if (arr.indexOf(className) == -1) {
        element
            .classList
            .add(className);
    } else {
        element
            .classList
            .remove(className);
    }
}

// Fullwidth Screen

function fullWidth() {
    document
        .getElementById("fullScreen_left")
        .style
        .opacity = "0"
    document
        .getElementById("fullScreen_right")
        .style
        .width = "100%"
}

// Sidenav - Media

function openNav() {
    document
        .getElementById("mySidenav")
        .style
        .width = "250px";
    document
        .getElementById("main")
        .style
        .marginLeft = "250px";
}

function closeNav() {
    document
        .getElementById("mySidenav")
        .style
        .width = "0";
    document
        .getElementById("main")
        .style
        .marginLeft = "0";
}