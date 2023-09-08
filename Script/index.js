let tekst = [];
tekst[0] = "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series. It is the ninth installment in the series, the ninth chronologically, and the sequel to 2018's God of War. Loosely based on Norse mythology, the game is set in ancient Scandinavia and features series protagonist, Kratos, and his teenage son, Atreus. Concluding the Norse era of the series, the game covers Ragnarök, the eschatological event which is central to Norse mythology and was foretold to happen in the previous game after Kratos killed the Aesir god Baldur.";
tekst[1] = "Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. Directed by Hidetaka Miyazaki with worldbuilding provided by fantasy writer George R. R. Martin, it was released for PlayStation 4, PlayStation 5, Windows, Xbox One, and Xbox Series X/S on February 25. In the game, players control a customizable player character on a journey to repair the titular Elden Ring and become the new Elden Lord.";
tekst[2] = "Horizon Forbidden West is a 2022 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The sequel to 2017's Horizon Zero Dawn, the game is set in a post-apocalyptic version of the Western United States recovering from the aftermath of an extinction event caused by a rogue robot swarm. The player can explore the open world and complete quests using ranged and melee weapons against hostile machine creatures.";
tekst[3] = "Stray is a 2022 adventure game developed by BlueTwelve Studio and published by Annapurna Interactive. The story follows a stray cat who falls into a walled city populated by robots, machines, and mutant bacteria, and sets out to return to the surface with the help of a drone companion, B-12. The game is presented through a third-person perspective. The player traverses the game world by leaping across platforms and climbing up obstacles, and can interact with the environment to open new paths. Using B-12, they can store items found throughout the world and hack into technology to solve puzzles. Throughout the game, the player must evade the antagonistic Zurks and Sentinels, which attempt to kill them.";

let header = [];
header[0] = "Quizzie";
header[1] = "Bestel Je Maaltijd";
header[2] = "Villa Te Koop";
header[3] = "Minor project";

/*let video = [];
video[0] = "media/gowrvid.mp4";
video[1] = "media/ervid.mp4";
video[2] = "media/hfwvid.mp4";
video[3] = "media/strayvid.mp4";*/



function project1() {
    document.getElementById("tekst").innerHTML = tekst[0];
    document.getElementById("header").innerHTML = header[0];
    /*document.getElementById("video").src = video[0];*/
    document.getElementById("project1").style.filter = "brightness(0.6)";
    document.getElementById("project2").style.filter = "brightness(1)";
    document.getElementById("project3").style.filter = "brightness(1)";
    document.getElementById("project4").style.filter = "brightness(1)";
    }

function project2() {
    document.getElementById("tekst").innerHTML = tekst[1];
    document.getElementById("header").innerHTML = header[1];
    /*document.getElementById("video").src = video[1];*/
    document.getElementById("project1").style.filter = "brightness(1)";
    document.getElementById("project2").style.filter = "brightness(0.6)";
    document.getElementById("project3").style.filter = "brightness(1)";
    document.getElementById("project4").style.filter = "brightness(1)";
}

function project3() {
    document.getElementById("tekst").innerHTML = tekst[2];
    document.getElementById("header").innerHTML = header[2];
    /*document.getElementById("video").src = video[2];*/
    document.getElementById("project1").style.filter = "brightness(1)";
    document.getElementById("project2").style.filter = "brightness(1)";
    document.getElementById("project3").style.filter = "brightness(0.6)";
    document.getElementById("project4").style.filter = "brightness(1)";
}

function project4() {
    document.getElementById("tekst").innerHTML = tekst[3];
    document.getElementById("header").innerHTML = header[3];
    /*document.getElementById("video").src = video[3];*/
    document.getElementById("project1").style.filter = "brightness(1)";
    document.getElementById("project2").style.filter = "brightness(1)";
    document.getElementById("project3").style.filter = "brightness(1)";
    document.getElementById("project4").style.filter = "brightness(0.6)";
}


function stopss(){
    window.location.href = "index.html"
}