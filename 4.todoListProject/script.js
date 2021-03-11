var nodelist = document.getElementsByTagName("LI");

var i;

var textInput = document.getElementById("myInput");

textInput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("myBtn").click();
    }

});

for(i = 0; i < nodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");

var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;

        div.style.display ="none";
    }
}

function newElement(){

    var li = document.createElement("LI");

    var inputValue = document.getElementById("myInput").value;

    var text = document.createTextNode(inputValue);
    li.append(text);

    if(inputValue === ""){
        alert("You must write somenthing");
    }else{
        document.getElementById("myList").appendChild(li);
        li.className = "list-group-item"; 
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";

    span.appendChild(text);
    li.appendChild(span);

    for(i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}