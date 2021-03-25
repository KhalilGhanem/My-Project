

var userName = prompt('What is Your name?');
alert ('Welcom to my site '+userName );

var yourTeam = prompt('which team do you support ?!!' ,'Real Madrid , Barcelona , Bayern Munich');

if (yourTeam==='Real Madrid'){
    document.write('<img src="Images/RM.jpg" height="200px" width="200px"/>');
}else if (yourTeam==='Bayern Munich'){
    document.write('<img src="Images/BAYERN.jpg" height="200px" width="200px"/>');
}else if (yourTeam==='Barcelona'){
    document.write('<img src="Images/Barca.jpg" height="200px" width="200px"/>');
}else {
    document.write('<h3>Good Team</h3>');
}