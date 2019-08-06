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
var readFile = "Goal: planet G2V-S3 <br> One known to be full of life, but lost life approximately 50,000 years ago. Reasons unknown, but the Fleet still hopes that we will be able to restore the planet to the habitable paradise it once was. "
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

//panicButtons()
var panic = "My spoon drops in the oatmeal, the room going silent. Only for a moment, as the ship rockets to the other side again. We better start figuring out how to solve the problem. "
var mainBrig = "I immediately stand up, setting my oatmeal back in the fridge, and set off to the main brig. We might have to do a full inspection of the engines to see what the situation is. 'Let&apos;s get on this, team!' Riza says, sounding confident. Erwin was at the pilot chair, his hands now white on the joysticks. The tension in his shoulders seemed to relax a little when he realized that the whole team was now present, and he immediately starts lending orders. The order I got was fairly straightforward, to check the ship&apos;s systems to make sure that we were running in order."

//CheckEngine()
var checkEngine = "There is a hit to the main engine, and one of the turbines. You will have to fix it as soon as you get to a safe spot. Especially the Tachyon bearings. 'We have issues with a few things, but we can&apos;t fix them now.' Erwin blinked, and nodded, now maneuvering with a certain skill that can only be achieved with years of training. When we got out of the debris, the ship slowed gently, and all eyes went on me. 'I&apos;ll get right to that engine, huh?' I chuckled, retrieving my tools, and zipping up my spacesuit. Fixing the Tachyon bearings was a simple task, you learned how to do that very early in spacecraft safety. Without the bearings, we could have easily been lost in the depths of space."
  var engineFixed = "The system diagnostics look in shape, all systems running fully functionally. We should be good to go."
var checkSystem = "Online systems seem to be working, there are no glitches or malfunctions. Oxygen levels are steady, and there is no damage to fuel cells. It seems like everything is ok with the online systems, and you give Erwin a 'Systems are a go'."
//(When they get out of the asteroid belt and travel, they die)
var jumpFail = "The engine was never fixed, so the jump failed. The entire crew died. Game over. "
var jump = "DAY 5: No anomalies detected"
var gotonextday = "DAY 6: We were all resting in the living quarters. Kyoya and Riza were arguing over what&apos;s the best way to travel if you couldn&apos;t travel faster than light, while Erwin and Yoruichi and are trying to figure out what to do. I was trying to read up on the latest news from home planet when I heard the space alert, and started to walk toward the control panel to see what&apos;s happening; We&apos;re heading towards a black hole!! We all got into position to try and leave the black hole but it's no use. There was a simple rule with blackholes: you start to sink in faster the closer you get. Everyone is panicking, 'We are getting nowhere, what should we do?!'' said Kyoya, clearly agitated by the situation. While chaos ensues, I start to feel dizzy and lightheaded along with a nagging pain in my chest and not being able to breathe. I let out a soft curse, I was having a panic attack!!"

var calm = "I remember grabbing my pills. I never told the Fleet about my anxiety, so they forgot to provide my pills. Good thing I had them on hand. I throw my head back and swallow the pill dry. It takes a little, but the idea of the pill being in your system helps clear up my thoughts. I tried gritting my teeth and closing my eyes. The alarm blaring in the background. I remembered learning something in Galaxy Garrison about black holes. A minuscule beat in the pull- where there was just a minute of nothing. Enough time for the thrusters to pull you out. I rush forward, pulling up the scan of the black hole in front of us, and look at the graph of the pulses of high energy leaving it. I think I got it. I turn back to my team, and Erwin gives me a nod. 'Everyone, get a hold of yourselves and get in position!!!' said Erwin. Everyone gets up and go back to their station. 'Kyoya, you need to navigate us through this,' said Erwin. Kyoya nodded, 'Ok, I think I found the gap but it&apos;s pretty far' 'How far?' said Erwin worried.'Around 100 miles,' Kyoya said while staring at Erwin. 'Ok, we are going to need to boost yourselves toward the gap and out but there&apos;s a risk,' said Erwin 'What is the risk?' said Yoruichi. 'The ship might fall apart in the process'; everyone gasps. I steeled my nerves, 'It&apos;s ok. I&apos;ll activate boosters when I have to.'"



var quitstr = "Thank you for playing this game!"

var item

var yesJump

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

    //document.getElementById("other-buttons").style.display = "none";
    //document.getElementById("choose-weapon-buttons").style.display = "block";

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
    document.getElementById("panic-buttons").style.display = "none";
    document.getElementById("check-engine-buttons").style.display = "none";
    document.getElementById("Jump").style.display = "none";
    document.getElementById("NextDay").style.display = "none";
    document.getElementById("panic-attack-options").style.display = "none";
    document.getElementById("live-or-die-buttons").style.display = "none";

}

function chooseWeapon(choice)
{
  if (choice == 1){
    item = 1; //pills
  } else if (choice == 2){
    item = 2;
  } else if (choice == 3){
    item = 3;
  }
    var element = document.getElementById("game");
    element.innerHTML = outsideRoom;

    var image = document.getElementById("image");
    image.src = "download.jpg";

    document.getElementById("greet-crew-buttons").style.display = "block";
    document.getElementById("choose-weapon-buttons").style.display = "none";

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
  document.getElementById("panicButtons").style.display = "none";
  document.getElementById("CheckEngine").style.display = "none";
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
      document.getElementById("panic-buttons").style.display = "block";
    } else if (choice == 2){ //explore hanger
      document.getElementById("game").innerHTML = exploreTwo;
      document.getElementById("ExploreHanger").style.display = "none";
    }

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
}

function panicButtons(choice)
{
    document.getElementById("Rest").style.display = "none";
    if (choice == 1){ //panic
      document.getElementById("game").innerHTML = panic;
      document.getElementById("Panic").style.display = "none";
    } else if (choice == 2){ //mainbrig
      document.getElementById("game").innerHTML = mainBrig;
      document.getElementById("panic-buttons").style.display = "none";
      document.getElementById("check-engine-buttons").style.display = "block";
      //document.getElementById("startover").style.display = "block";
    }

    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
}

function CheckEngine(choice)
{
    document.getElementById("MainBrig").style.display = "none";
    if (choice == 1){ //check engin
      if (isEngineFixed == true){
        document.getElementById("game").innerHTML = engineFixed;
      } else {
        document.getElementById("game").innerHTML = checkEngine;
      }
      yesJump = 1;
    } else if (choice == 2){ //check system
      document.getElementById("game").innerHTML = checkSystem;
      yesJump = 2;
    }
   document.getElementById("check-engine-buttons").style.display = "none";
   document.getElementById("Jump").style.display = "block";
    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
}

function fastForward() {
  if (yesJump == 2){ //checked system, dies if attempts to jump
    document.getElementById("game").innerHTML = jumpFail;
    document.getElementById("startover").style.display = "block";
  } else if (yesJump == 1){//checked engine, continue game
    document.getElementById("game").innerHTML = jump;
  }
  document.getElementById("Jump").style.display = "none";
  document.getElementById("NextDay").style.display = "block";
}

function goToNextDay(){
  document.getElementById("game").innerHTML = gotonextday;
  document.getElementById("NextDay").style.display = "none";
  document.getElementById("panic-attack").style.display = "block";
}

function panicAttack() {
  if (item == 1){ //taken pills
    document.getElementById("game").innerHTML = calm;
  } else {
    document.getElementById("game").innerHTML = options;
    document.getElementById("startover").style.display = "none";
    //document.getElementById("check-engine-buttons").style.display = "block";
  }
  document.getElementById("panic-attack-options").style.display = "none";
}

function liveOrDie(choice)
{
    document.getElementById("MainBrig").style.display = "none";
    if (choice == 1 && choice == 2){ //click option one
        document.getElementById("game").innerHTML = optionFailed;
      } else {
        document.getElementById("game").innerHTML = optionSaved;
      }
   document.getElementById("live-or-die-buttons").style.display = "none";
   document.getElementById("").style.display = "block";
    var image = document.getElementById("image");
    image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
}
