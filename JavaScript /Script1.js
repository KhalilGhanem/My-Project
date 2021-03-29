
function greating(){
    var userName = prompt('What is Your name?');
    alert ('Welcom to my site '+userName );
}
greating();

function pickteam(){
var yourTeam = prompt('which team do you support ?!!' ,'Real Madrid , Barcelona , Bayern Munich');
while (yourTeam !=='Real Madrid' && yourTeam !=='Bayern Munich' && yourTeam !=='Barcelona'){
    yourTeam= prompt('please enter a team from the list' ,'Real Madrid , Barcelona , Bayern Munich');
}
 
if (yourTeam==='Real Madrid'){
    document.write('<img src="Images/RM.jpg" height="200px" width="200px"/>');
}else if (yourTeam==='Bayern Munich'){
    document.write('<img src="Images/BAYERN.jpg" height="200px" width="200px"/>');
}else if (yourTeam==='Barcelona'){
    document.write('<img src="Images/Barca.jpg" height="200px" width="200px"/>');
}
var image =''
var titles =0;
titles= prompt('how many champions league titles your team have !!');
for(var i=0;i<titles;i++ ){
image+='<img src="Images/trophy.jpg" height="200px" width="200px"/>';
}
console.log(image);
document.write(image);
 }
 pickteam();
// else {
//     document.write('<h3>Good Team</h3>');
// }