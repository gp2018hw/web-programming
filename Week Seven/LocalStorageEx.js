if (localStorage) {
    function savewb() {
        var txt = document.getElementById('sName').value;
        localStorage.setItem("name", txt);
        alert("Your name is saved.");
    }

    function accesswb() {
        alert("Hi" + localStorage.getItem("name"));

    }
} else {
    alert("Sorry, your browser does not support local storage")
}