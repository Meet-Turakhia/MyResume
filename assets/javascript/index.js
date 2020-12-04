function knowmore() {
    var result = confirm("Do you want to view additional details?");
    if (result == true) {
        var x = document.getElementById("cvLink");
        var y = document.getElementById("activityLink");
        if (x.style.display == "none" && y.style.display == "none") {
            x.style.display = "inline";
            y.style.display = "inline";
            document.getElementById("knowmore").innerHTML = "Hide Link";
        } else {
            x.style.display = "none";
            y.style.display = "none";
            document.getElementById("knowmore").innerHTML = "Know More";
        }
    }
}