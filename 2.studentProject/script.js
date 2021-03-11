function cambiaFailed(){
    document.getElementById("pass").style.color = '#FF0000';
}
function cambiaPassed(){
    document.getElementById("pass").style.color = '#008000';
}

function getMarks(){
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var english = Number(document.getElementById("english").value);
   
    var totalMarks = 400;
    var average = (maths + physics + chemistry + english) / totalMarks;
    var percentage = average * 100;
    var grade = "";
    document.getElementById("percentage").innerHTML = percentage + "%";

    if(percentage >= 90 ){
        grade = "A+";
    }else if(percentage < 90 && percentage >= 80){
        grade = "A";
    }else if(percentage < 80 && percentage >= 75){
        grade = "B+";
    }else if(percentage < 75 && percentage >= 70){
        grade = "B";
    }else if(percentage < 70 && percentage >= 65){
        grade = "C+";
    }else if(percentage < 65 && percentage >= 60){
        grade = "C";
    }else if(percentage < 60 && percentage >= 55){
        grade = "D+";
    }else if(percentage < 55 && percentage >= 50){
        grade = "D";
    }else if(percentage < 50 && percentage >= 40){
        grade = "E";
    }else if(percentage < 40 && percentage >= 0){
        grade = "F";
    }

    document.getElementById("grade").innerHTML = grade;

    if(percentage < 60){
        cambiaFailed();
        document.getElementById("pass").innerHTML = "Sorry! You failed! Please try next time";
    }else {
        cambiaPassed();
        document.getElementById("pass").innerHTML = "Congratuletions! you have passed";

    }
}

