//Learning basic methods and functions in JS.

var gotName = false;
    while(gotName == false){
    var userName = prompt("Whats your name?");
    if(confirm("Are you sure your name is " + userName + "?")){
        alert("Hello " + userName + "!");
    gotName = true;
    }
}