var start = "I woke up to the tinny noise of the alarm going off." +
" I was about to reach over to slap the alarm off, but to my surprise, it was actually the ship&apos;s alarm blaring..." +
"Probably a message from the commander.\n\n" + "There&apos;s stuff on my bedside table, and in my stupor, I reach out and grab the first thing my hand lands on:"
var quitstr = "Thank you for playing this game!"
var item

function quit()
{
    var element = document.getElementById("game");
    element.innerHTML = quitstr;
    var startover = document.getElementById("startover");
    startover.style.display = "none";
}


function startgame()
{
    var element = document.getElementById("game");
    element.innerHTML = start;
    document.getElementById("startover").style.display = "none";
    //New:
    document.getElementById("part2-end-button").style.display = "block";
    document.getElementById("see-planet-buttons").style.display = "none";
    //New^

}

//NEW:
//Section 3: Fuel Stop
var section3 = "Section 3: Fuel Stop"
var maybeDie = "The entire team seems agitated after the mishap during the jump, and there are glances thrown at each other as the blinking symbol on the screen grows brighter. Our supplies are starting to dwindle, leaving us with supplies to last us for another two weeks. That&apos;s if we ration. 'I&apos;ll go,' Yoruichi decides, already pulling on the gloves for her spacesuit. There is a pause, and Kyoya shakes his head viciously, 'Absolutely not, there is a good chance that the ship&apos;s engine could make a jump at any time. We should wait and try to fix the engine first.' Kyoya screams 'But if we take too long, there will be no power to run the O2. We could all die!!'"

//Section 4: The Ending
var section4 = "Section 4: The Ending"
var arrive = "The ship is practically rattling as it slows out of FTL, we were hardly awake. Our reserves were down to the last box, and we are hoping that we&apos;ll be able to find something sustainable on the planet we&apos;d been sent to. I stood up, walking over to the large window that was on the side of the ship. <br> My breath caught in my chest. There was debris everywhere, practically floating, only held by the planet&apos;s gravity. A solid shade of blue disrupted only by little spots of what it looked like land that poked out of the ocean. "

//seePlanet()
var check = "CO2 levels are off the charts, it&apos;s super hot, possibly acid in the atmosphere "
var orbit = "Through the debris, there is a large screen. And I mean large; it seems to be tethered to a large satellite. Both flickering faintly. Solar-powered, I presume. <br>" + "Riza gives me a look, 'Should we check out what it is? It obviously works.' <br>" +
"I swallow quickly, planet G2V-S3 is starting to give me a bad feeling. This planet should have been habitable, but it&apos;s flooded itself. Practically overheated. After a moment, I nodded, agreeing with Riza. <br>" + "'Let&apos;s check that out.' <br>" + "We find a place to land and land the ship. I get off the ship and noticed that we are surrounded by water yet find fire in the distance. I also notice how the ground looks really dry and is mixed with trash and plastic. You look up at the sky and it looks like a bright orange color. I then look down at the water that&apos;s surrounding us and also how there&apos;s trash everywhere. <br>" + "Yoruichi was already strapping up to go hook the cable of the screen to the ship. After all, it was solar-powered, and the sun was on the other side. [ basically, the transmission is like 'yo this used to be earth and uhhh... We ruined it lolz please don&apos;t do this to your own planets XD' ]"

function continuetoPart3(){ //NOT DONE
  document.getElementById("heading").innerHTML = section3;
  document.getElementById("game").innerHTML = maybeDie;
  //document.getElementById("part3-end-button").style.display = "none";
  //document.getElementById("see-planet-buttons").style.display = "block";
}

function continuetoPart4() {
  document.getElementById("heading").innerHTML = section4;
  document.getElementById("game").innerHTML = arrive;
  document.getElementById("part3-end-button").style.display = "none";
  document.getElementById("see-planet-buttons").style.display = "block";
}

function seePlanet(choice) {
  if (choice == 1){ //checkPlanet
      document.getElementById("game").innerHTML = check;
      document.getElementById("checkPlanet").style.display = "none";
  } else if (choice == 2){ //orbitPlanet
      document.getElementById("game").innerHTML = orbit;
      document.getElementById("see-planet-buttons").style.display = "none";
  }
    var image = document.getElementById("image");
    image.src = "";
    //image.src = "https://img.newatlas.com/star-communications-35.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C2%2C1557%2C876&w=616&s=0ceb7b6be7eab4c4063f24f8a76aaed7";
}
