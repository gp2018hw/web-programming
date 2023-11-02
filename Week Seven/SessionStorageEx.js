function savewb() {
    var key = document.getElementById("sKey").value;
    if ( key != "" )
        sessionStorage[key] = document.getElementById("sValue").value;
}
function accesswb() {
    var s = "";
    for (var i=0; i<sessionStorage.length; i++) {
        var key = sessionStorage.key(i);
        s += key + " = " + sessionStorage.getItem(key) + "\n";
    }
    alert( s );
}
function clearwb() {
    sessionStorage.clear();
}