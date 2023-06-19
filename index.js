let countHome=document.getElementById("homescore-id")
let countGuest=document.getElementById("guestscore-id")
let homeScore=0;
let guestScore=0;

function home1()
{
    homeScore++;
    countHome.textContent=homeScore;
    console.log(countHome)
    compareScores()
    
}
function home2()
{
    homeScore+=2;
    countHome.textContent=homeScore;
    console.log(countHome)

    compareScores()
   
}

function home3()
{
    homeScore+=3;
    countHome.textContent=homeScore;
    console.log(countHome)
    compareScores()
   
}
//GUEST SCORE
function guest1()
{
    guestScore++;
    countGuest.textContent=guestScore;
    console.log(countGuest)
    compareScores()
    
}

function guest2()
{
    guestScore+=2;
    countGuest.textContent=guestScore;
    console.log(countGuest)
    compareScores()
    
}

function guest3()
{
    guestScore+=3;
    countGuest.textContent=guestScore;
    console.log(countGuest)
    compareScores()
    
}

function compareScores() {
    if (homeScore > guestScore) {
      document.getElementById("homeLead").textContent = "Home is in the lead!";
      document.getElementById("guestLead").textContent = "";
    } else if (homeScore < guestScore) {
      document.getElementById("guestLead").textContent = "Guest is in the lead!";
      document.getElementById("homeLead").textContent = "";
    } else if(homeScore==guestScore){
      document.getElementById("homeLead").textContent = "Its a TIE!";
      document.getElementById("guestLead").textContent = "";
    }else
    {
        document.getElementById("homeLead").textContent = "";
        document.getElementById("guestLead").textContent = ""; 
    }
  }
// if(countHome>countGuest)
// {
//     document.getElementById("homeLead").textContent="Home is leading!"
// }
// else{
//     document.getElementById("guestLead").textContent="guest is leading!"
// }

//RESET THE GAME
document.getElementById("resetting").addEventListener('click',function(){
     homeScore=0;
     guestScore=0;
    countHome.textContent = homeScore;
    countGuest.textContent = guestScore;
});
