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

    function findanswer(answer,question){
        var radiob=document.getElementsByName(answer);
        var i;
        var j=0;
        for(i=0;i<=2;i=i+1){
            if(radiob[i].checked){
                j=Number(radiob[i].value);
            }
           
        }
        if(j==1){
            document.getElementById(question).style.color="#138a4b";
        }
       else{
           document.getElementById(question).style.color="red"
       }
        return j;
    }
    var score=findanswer('answer1','ques1')+findanswer('answer2','ques2')+findanswer('answer3','ques3')+findanswer('answer4','ques4')+findanswer('answer5','ques5')+findanswer('answer6','ques6');
    var fname=document.getElementById('box').value;
    document.getElementById('result').innerHTML='Your score is '+score;
        if(score>3){
            document.getElementById('result').style.color="#138a4b"
        }
        else{
            document.getElementById('result').style.color="red"
        }
    alert( 'Hello '+fname+ ' .Your score is '+score);
}

function box(){
    alert ("Welcome to my quiz")
    var d=new Date();
    document.getElementById('newDate').innerHTML=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    document.getElementById('newDate').style.color="white"
}

