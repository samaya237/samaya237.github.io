// function myfunction(){
//     alert("This is an alert box");
// }
// function myfunction2(){
//     if (document.getElementById("demo").innerHTML=="New page")
//     document.getElementById("demo").innerHTML="First page of the website";

//     else 
//     document.getElementById("demo").innerHTML="New page";

//      }
//      function marvel(){
//          document.getElementById("wanda").style.fontSize="50px";
//      }``

function printAnswer(){

    function findanswer(answer){
        var radiob=document.getElementsByName(answer);
        var i;
        var j=0;
        for(i=0;i<=2;i=i+1){
            if(radiob[i].checked){
                j=Number(radiob[i].value);
            }
           
        }
        return j;
    }
    var score=findanswer('answer1')+findanswer('answer2')+findanswer('answer3')+findanswer('answer4')+findanswer('answer5')+findanswer('answer6');
    var fname=document.getElementById('box').value;
    document.getElementById('result').innerHTML='Your score is '+score;
    alert( 'Hello '+fname+ ' .Your score is '+score);
}

function box(){
    alert ("Welcome to my quiz")
}
