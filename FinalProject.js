//test javascript using:
//javascript:alert("hello world");
//use <br> to make a break line
var section1 = "Section 1: The Beginning"
var start = "I woke up to the tinny noise of the alarm going off." +
" I was about to reach over to slap the alarm off, but to my surprise, it was actually the ship&apos;s alarm blaring..." +
"Probably a message from the commander.<br>" + "There&apos;s stuff on my bedside table, and in my stupor, I reach out and grab the first thing my hand lands on:"

var outsideRoom = "I head out of my room toward the living quarter, I notice the other crew member, Erwin also awake along with Riza standing by the control panels. The control panel is growing, as a message from Commander Integra Hellsing loads. "

//greetCrew()
var hiErwin = "Erwin talks a lot about being excited about going to 'G2V-S3', this is going to be his second mission as the pilot. "
var hiRiza = "Riza talks about how boring the food is. "
var ignore = "I watch whatever on my console. While watching my show, Kyoya and Yoruichi emerge from their rooms. I get ready to read the message Commander Hellsing sent. "
var greetCrewText = "The message finally loads on the big screen, and a peppy automated voice greets us. 'Hello crewmates, this is the day! You guys are heading towards G2V-S3. I hope you guys can find out more about this planet. What we know, this planet used to have sight of live about 2,000 years ago. But now it is full of dangerous air pollution and greenhouse gasses. Along with it almost being completely covered in water but yet it&apos;s really hot. You need to investigate the planet and try to restore the planet. You only have a limited amount of water supplies. Good luck and don&apos;t die.'"+ "I stared at the blank screen, bewildered. Things like this just don&apos;t get thrown at you out of the blue. I look down at the wristwatch that has been placed expertly on the surface of your space wear. "

//checkWatch()
//Are we supposed to have actual file info here? maybe we could just upload a pic or smth"
var readFile = "INSERT FILE INFORMATION "
var contactCommander = "Commander Hellsing tells me that someone needs to go there first to see if the planet is safe for life. "
var checkWatchText = "My team and I start to head towards the control room to talk about who is going to go; they decide that I should go. "

//escapeMethod()
var pod = "I am now in the ship. "
var airlock = "You die lolz and your crewmates just look at you in disappointment. (You&apos;re stupid.) " //welp guess we're keeping this in?

//SECTION 2: THE SHIP start
var section2 = "Section 2: The Ship"
//continueToPart2()
var theShip = "The ship is one of the sleeker, new models. Fitted with thrusters, and the wings are light and durable. Clearly an exploration ship, with only one ion cannon for emergencies. I ran my hand under the belly of the ship, marveling the clean cuts on the paneling, and the material it was made out of. Silica, to handle damage. I had only one bag with me, with only the necessary items. A photograph of my family, and (item they picked up). It should be enough, after all, we are being provided by the main command."

//insideShip()
var explore = "The main brig is set with controls, automated for the most part. Though it&apos;s always necessary to keep a human element in case of errors. That&apos;s signified by the steering wheel in the middle of the helm. There are other seats, elevated as you went away from the pilot&apos;s seat. The window was tinted to block harmful rays, but you could still see outside. The ship itself was inherently spacious. More than it looked like on the outside."
  var inspect = "The ship&apos;s engine is something that I am quite interested in. Specifically, which sort of engine, the makers of this ship have decided to use. Each engine is different as if they have individual personalities, it&apos;s important to know how to care for them. The main propulsion engines seemed to be running on hydrocarbons- something that I could really work with. I slide on my back, popping open one of the panels to check the more vital parts of the ship. Gingerly brushing away wires. My nose wrinkled when I found a loose-ish canister. It was the tachyon-balls set in a bearing that would provide power for the ship. They let the ship travel Faster Than Light. The ship&apos;s engine appears to be broken. "
    //(If OP had ‘worktools’ they could fix the engine, else they have to live with that on their conscience) //conscience? maybe this should have bigger consequences ****
    //need variable for if engine fixed?*
    var yesTools = "Thankfully I took my worktools with me; now I can fix the ship."
    var noTools = "If only I had taken my worktools, then I would have been able to fix the ship."
    var isEngineFixed = false;
var backToRoom = "I was pleasantly surprised that the command ship had managed to load my handprint into the ship&apos;s systems. All I had to do was press my hand against the control panel, and the metal door slid open to reveal my room. The setup was bare, simple. One bed with an overhang for storage. A desk, and a chiffarobe for me to set my clothes and other miscellaneous items. "
var team = "Erwin Smith (Pilot) <br> Kyoya Ootori (Navigator) <br>	Riza Hawkeye (Medic) <br>	Yoruichi Shihoyin (Expedition) "

//*after clicking one option, blastOff option appears
var blastOff = "Going to be making a stop in a nebulae 5,000 light-years away (5-hour trip). We all strap into our perspective seats, readying for the rocketing of the jump. The only person on this ship that hasn&apos;t experienced FTL travel is possibly Kyoya, our navigator. Though, he seems to be doing pretty well for a first-timer. "

//afterBlast()
var exploreTwo = "While the ship makes it to the first rest stop, I suppose it should be best to try to do my job. I looked through the drawers in the main hangar and was able to find better tools to provide for me. I looked through the tools and was pleasantly surprised by the selection. Aside from the main hanger, I decided to check the loading bay, which was full of our food and water for the trip. It seems like the ship was stocked for a good few days. Two weeks max. Possibly for the roundtrip. "
//must rest
var rest = "The five hours pass easily, everyone trying to get into pace with the ship. <br>" + "DAY 1: Success <br>" + "DAY 2: No mishaps, refueled <br>" + "DAY 3: finally realized how good dried (insert food) tastes <br>"+ "DAY 4: There is a jolt that hits the side of our ship, sending me crashing into my breakfast. 'What was that?' Riza asked, looking up at me from her novel. 'I don&apos;t know, let me check it out,' said Yoruichi. She comes back from the helm looking quite distressed. Apparently, flight plans didn&apos;t know we were running through an asteroid belt. "

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
    document.getElementById("inside-ship-buttons").style.display = "none";
    document.getElementById("BlastOff").style.display = "none";
    document.getElementById("after-blast-buttons").style.display = "none";
}

function chooseWeapon(choice)
{
  if (choice == 1){
    item = 1;
  } else if (choice == 2){
    item = 2;
  } else if (choice == 3){
    item = 3;
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
  document.getElementById("heading").innerHTML = section2;
  document.getElementById("part1-end-button").style.display = "none";
  document.getElementById("inside-ship-buttons").style.display = "block";
  document.getElementById("Inspect").style.display = "none";
  document.getElementById("BlastOff").style.display = "none";
  document.getElementById("game").innerHTML = theShip;
  //add buttons 8/4/2019...line 33 of organized info

}

function insideShip(choice)
{
    if (choice == 1){
      document.getElementById("game").innerHTML = explore;
      document.getElementById("Explore").style.display = "none";
      document.getElementById("Inspect").style.display = "block";

    } else if (choice == 2){
      document.getElementById("game").innerHTML = backToRoom;
    } else if (choice == 3){
      document.getElementById("game").innerHTML = team;
    }
    document.getElementById("BlastOff").style.display = "block";
    if (choice == 4){ //inspect engine
      //(If OP had ‘worktools’ they could fix the engine, else they have to live with that on their conscience) //conscience? maybe this should have bigger consequences ****
      //*if (item == worktools){Thankfully I took my worktools with me; now I can fix the ship.}
      //*else {If only I had taken my worktools, then I would have been able to fix the ship.}
      //need variable for if engine fixed?*
      if (item == 3){ //chooses Worktools in chooseWeapon()
        document.getElementById("game").innerHTML = inspect + yesTools;
        isEngineFixed = true;
      } else {
        document.getElementById("game").innerHTML = inspect + noTools;
      }
    }
    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
    //only for next function blastOff(): document.getElementById("inside-ship-buttons").style.display = "none";
    //document.getElementById("check-watch-buttons").style.display = "block";
}

function blastOffNow() {
  document.getElementById("inside-ship-buttons").style.display = "none";
  document.getElementById("game").innerHTML = blastOff;
  document.getElementById("BlastOff").style.display = "none";
    document.getElementById("after-blast-buttons").style.display = "block";
}

function afterBlast(choice)
{
    document.getElementById("BlastOff").style.display = "none";
    if (choice == 1){
      document.getElementById("game").innerHTML = rest;
      document.getElementById("after-blast-buttons").style.display = "none";
    } else if (choice == 2){
      document.getElementById("game").innerHTML = exploreTwo;
      document.getElementById("ExploreHanger").style.display = "none";
      //document.getElementById("startover").style.display = "block";
    }

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
}
