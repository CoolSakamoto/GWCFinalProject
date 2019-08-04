//test javascript using:
//javascript:alert("hello world");

var section1 = "Section 1: The Beginning"
var start = "I woke up to the tinny noise of the alarm going off." +
" I was about to reach over to slap the alarm off, but to my surprise, it was actually the ship&apos;s alarm blaring..." +
"Probably a message from the commander.\n\n" + "There&apos;s stuff on my bedside table, and in my stupor, I reach out and grab the first thing my hand lands on:"

var outsideRoom = "I head out of my room toward the living quarter, I notice the other crew member, Erwin also awake along with Riza standing by the control panels. The control panel is growing, as a message from Commander Integra Hellsing loads. "

//greetCrew()
var hiErwin = "Erwin talks a lot about being excited about going to 'G2V-S3', this is going to be his second mission as the pilot. "
var hiRiza = "Riza talks about how boring the food is. "
var ignore = "I watch whatever on my console. While watching my show, Kyoya and Yoruichi emerge from their rooms. I get ready to read the message Commander Hellsing sent. "
var greetCrewText = "The message finally loads on the big screen, and a peppy automated voice greets us. 'Hello crewmates, this is the day! You guys are heading towards G2V-S3. I hope you guys can find out more about this planet. What we know, this planet used to have sight of live about 2,000 years ago. But now it is full of dangerous air pollution and greenhouse gasses. Along with it almost being completely covered in water but yet it's really hot. You need to investigate the planet and try to restore the planet. You only have a limited amount of water supplies. Good luck and don&apos;t die.'"+ "I stared at the blank screen, bewildered. Things like this just don&apos;t get thrown at you out of the blue. I look down at the wristwatch that has been placed expertly on the surface of your space wear. "

//checkWatch()
//Are we supposed to have actual file info here? maybe we could just upload a pic or smth"
var readFile = "INSERT FILE INFORMATION "
var contactCommander = "Commander Hellsing tells me that someone needs to go there first to see if the planet is safe for life. "
var checkWatchText = "My team and I start to head towards the control room to talk about who is going to go; they decide that I should go. "

//escapeMethod()
var pod = "I am now in the ship. "
var airlock = "You die lolz and your crewmates just look at you in disappointment. (You&apos;re stupid.) " //welp guess we're keeping this in?

//SECTION 2: THE SHIP start
//continueToPart2()
var theShip = "The ship is one of the sleeker, new models. Fitted with thrusters, and the wings are light and durable. Clearly an exploration ship, with only one ion cannon for emergencies. I ran my hand under the belly of the ship, marveling the clean cuts on the paneling, and the material it was made out of. Silica, to handle damage. I had only one bag with me, with only the necessary items. A photograph of my family, and (item they picked up). It should be enough, after all, we are being provided by the main command."


var quitstr = "Thank you for playing this game!"

var item

function quit()
{
    var element = document.getElementById("game");
    element.innerHTML = quitstr;

    var image = document.getElementById("image");
    image.src = "https://www.visitmelbourne.com/-/media/images/mornington-peninsula/things-to-do/nature-and-wildlife/ashcombe-maze_mp_r_106550_1150x863.jpg?ts=20180904590120";

    var startover = document.getElementById("startover");
    startover.style.display = "none";
}


function startgame()
{
    document.getElementById("heading").innerHTML = section1;

    var element = document.getElementById("game");
    element.innerHTML = start;

    var image = document.getElementById("image");
    image.src = "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC81NzQvb3JpZ2luYWwvbmdjMzA3OS1jaGFuZHJhLXNwYWNlLWJ1YmJsZXMuanBn";

    var lrbuttons = document.getElementById("choose-weapon-buttons");
    lrbuttons.style.display = "block";

    var buttons = document.getElementById("greet-crew-buttons");
    buttons.style.display = "none";

    var startover = document.getElementById("startover");
    startover.style.display = "none";

    var ynbuttons = document.getElementById("check-watch-buttons");
    ynbuttons.style.display = "none";

    document.getElementById("escape-method-buttons").style.display = "none";
    document.getElementById("part1-end-button").style.display = "none";
}

function chooseWeapon(choice)
{
  if (choice == 1){
    item = "Pills";
  } else if (choice == 2){
    item = "SpaceGun";
  } else if (choice == 3){
    item = "Worktools";
  }
    var element = document.getElementById("game");
    element.innerHTML = outsideRoom;

    var image = document.getElementById("image");
    image.src = "download.jpg";

    document.getElementById("choose-weapon-buttons").style.display = "none";
    document.getElementById("greet-crew-buttons").style.display = "block";
}

//sound option
function greetCrew(choice)
{
    if (choice == 1){
      document.getElementById("game").innerHTML = hiErwin + greetCrewText;
    } else if (choice == 2){
      document.getElementById("game").innerHTML = hiRiza + greetCrewText;
    } else if (choice == 3){
      document.getElementById("game").innerHTML = ignore + greetCrewText;
    }

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";

    document.getElementById("greet-crew-buttons").style.display = "none";
    document.getElementById("check-watch-buttons").style.display = "block";
}

function checkWatch(choice)
{
    if (choice == 1){
      document.getElementById("game").innerHTML = readFile + checkWatchText;
    } else if (choice == 2){
      document.getElementById("game").innerHTML = contactCommander + checkWatchText;
    }

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";

    document.getElementById("check-watch-buttons").style.display = "none";
    document.getElementById("escape-method-buttons").style.display = "block";
}

function escapeMethod(choice)
{
    document.getElementById("escape-method-buttons").style.display = "none";
    if (choice == 1){
      document.getElementById("game").innerHTML = pod;
      document.getElementById("part1-end-button").style.display = "block";
    } else if (choice == 2){
      document.getElementById("game").innerHTML = airlock;
      document.getElementById("startover").style.display = "block";
    }

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
}

function continueToPart2(){
  document.getElementById("part1-end-button").style.display = "none";
  document.getElementById("game").innerHTML = theShip;
  //add buttons 8/4/2019...line 33 of organized info

}
