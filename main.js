var Limes = 0;

function LimeClick(number){           //this function adds a lime each time you click the lime
    Limes = Limes + number;
    document.getElementById("Limes").innerHTML = Limes;
};



//_______________________________________________________________________________________________________________________

var ones = 0;

function buyone(){
    var oneCost = Math.floor(10 * Math.pow(1.1,ones));     //works out the cost of this cursor
    if(Limes >= oneCost){                                   //checks that the player can afford the cursor
        ones = ones + 1;                                   //increases number of cursors
    	Limes = Limes - oneCost;                          //removes the cookies spent
        document.getElementById('ones').innerHTML = ones;  //updates the number of cursors for the user
        document.getElementById('Limes').innerHTML = Limes;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,ones));       //works out the cost of the next cursor
    document.getElementById('oneCost').innerHTML = nextCost;  //updates the cursor cost for the user
};





//______________________________________________________________________________________________________________________

var twos = 0;

function buytwo(){
    var twoCost = Math.floor(100 * Math.pow(1.1,twos));     //works out the cost of this Farm
    if(Limes >= twoCost){                                   //checks that the player can afford the Farm
        twos = twos + 1;                                   //increases number of Farms
    	Limes = Limes - twoCost;                          //removes the Limes spent
        document.getElementById('twos').innerHTML = twos;  //updates the number of Farms for the user
        document.getElementById('Limes').innerHTML = Limes;  //updates the number of Limes for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,twos));       //works out the cost of the next Farm
    document.getElementById('twoCost').innerHTML = nextCost;  //updates the Farm cost for the user
};



function maketwosVisible(Limes) {
    if(Limes >= 100) {
        document.getElementById("two").style.visibility="visible";
    }
}

//_______________________________________________________________________________________________________________________
var threes = 0;

function buythree(){
    var threeCost = Math.floor(1000 * Math.pow(1.1,threes));     //works out the cost of this Farm
    if(Limes >= threeCost){                                   //checks that the player can afford the Farm
        threes = threes + 1;                                   //increases number of Farms
    	Limes = Limes - threeCost;                          //removes the Limes spent
        document.getElementById('threes').innerHTML = threes;  //updates the number of Farms for the user
        document.getElementById('Limes').innerHTML = Limes;  //updates the number of Limes for the user
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,threes));       //works out the cost of the next Farm
    document.getElementById('threeCost').innerHTML = nextCost;  //updates the Farm cost for the user
};



function makethreesVisible(Limes) {
    if(Limes >= 1000) {
        document.getElementById("three").style.visibility="visible";
    }
}
//_______________________________________________________________________________________________________________________

var fours = 0;

function buyfour(){
    var fourCost = Math.floor(10000 * Math.pow(1.1,fours));     //works out the cost of this Acre
    if(Limes >= fourCost){                                   //checks that the player can afford the Acre
        fours = fours + 1;                                   //increases number of Acres
    	Limes = Limes - fourCost;                          //removes the Limes spent
        document.getElementById('fours').innerHTML = fours;  //updates the number of Acres for the user
        document.getElementById('Limes').innerHTML = Limes;  //updates the number of Limes for the user
    };
    var nextCost = Math.floor(10000 * Math.pow(1.1,fours));       //works out the cost of the next Farm
    document.getElementById('fourCost').innerHTML = nextCost;  //updates the Farm cost for the user
};



function makefoursVisible(Limes) {
    if(Limes >= 10000) {
        document.getElementById("four").style.visibility="visible";
    }
}

//_______________________________________________________________________________________________________________________

var fives = 0;

function buyfive(){
    var fiveCost = Math.floor(100000 * Math.pow(1.1,fives));     //works out the cost of this Acre
    if(Limes >= fiveCost){                                   //checks that the player can afford the Acre
        fives = fives + 1;                                   //increases number of Acres
    	Limes = Limes - fiveCost;                          //removes the Limes spent
        document.getElementById('fives').innerHTML = fives;  //updates the number of Acres for the user
        document.getElementById('Limes').innerHTML = Limes;  //updates the number of Limes for the user
    };
    var nextCost = Math.floor(100000 * Math.pow(1.1,fives));       //works out the cost of the next Farm
    document.getElementById('fiveCost').innerHTML = nextCost;  //updates the Farm cost for the user
};



function makefivesVisible(Limes) {
    if(Limes >= 100000) {
        document.getElementById("five").style.visibility="visible";
    }
}

//_______________________________________________________________________________________________________________________
var sixes = 0;

function buysix(){
    var sixCost = Math.floor(1000000 * Math.pow(1.1,sixes));     //works out the cost of this Acre
    if(Limes >= sixCost){                                   //checks that the player can afford the Acre
        sixes = sixes + 1;                                   //increases number of Acres
    	Limes = Limes - sixCost;                          //removes the Limes spent
        document.getElementById('sixes').innerHTML = sixes;  //updates the number of Acres for the user
        document.getElementById('Limes').innerHTML = Limes;  //updates the number of Limes for the user
    };
    var nextCost = Math.floor(1000000 * Math.pow(1.1,sixes));       //works out the cost of the next Farm
    document.getElementById('sixCost').innerHTML = nextCost;  //updates the Farm cost for the user
};



function makesixesVisible(Limes) {
    if(Limes >= 1000000) {
        document.getElementById("six").style.visibility="visible";
    }
}

//_______________________________________________________________________________________________________________________

var sevens = 0;

function buyseven(){
    var sevenCost = Math.floor(100000000 * Math.pow(1.1,sevens));     //works out the cost of this Acre
    if(Limes >= sevenCost){                                   //checks that the player can afford the Acre
        sevens = sevens + 1;                                   //increases number of Acres
    	Limes = Limes - sevenCost;                          //removes the Limes spent
        document.getElementById('sevens').innerHTML = sevens;  //updates the number of Acres for the user
        document.getElementById('Limes').innerHTML = Limes;  //updates the number of Limes for the user
    };
    var nextCost = Math.floor(100000000 * Math.pow(1.1,sevens));       //works out the cost of the next Farm
    document.getElementById('sevenCost').innerHTML = nextCost;  //updates the Farm cost for the user
};



function makesevensVisible(Limes) {
    if(Limes >= 100000000) {
        document.getElementById("seven").style.visibility="visible";
    }
}

//_______________________________________________________________________________________________________________________



function Win() {
    if(Limes >= 3000000000000000000000000000000000000000000000000000000) {
    window.location.href = 'Win.html';
    }
}


window.setInterval(function(){                  //This whole thing calls each function within the curly brackets every 1000ms
	
	LimeClick(ones);
	
}, 1000);

window.setInterval(function(){                  //This whole thing calls each function within the curly brackets every 100ms
	
	LimeClick(twos);
	
}, 100);

window.setInterval(function(){                  //This whole thing calls each function within the curly brackets every 10ms
	
LimeClick(threes)
	
}, 10);

function five(){
    LimeClick(fives)
    LimeClick(fives)
    LimeClick(fives)
    LimeClick(fives)
    LimeClick(fives)
}

function six(){
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
    LimeClick(sixes)
}

function sevenone(){
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
    LimeClick(sevens)
}

function seventwo(){
    sevenone()
    sevenone()
    sevenone()
    sevenone()
    sevenone()
}

window.setInterval(function(){                  //This whole thing calls each function within the curly brackets every millisecond
	
	maketwosVisible(Limes)
	makethreesVisible(Limes)
    makefoursVisible(Limes)
    Win()
    LimeClick(fours)
    makefivesVisible(Limes)
    five()
    six()
    makesixesVisible(Limes)
    seventwo()
    makesevensVisible(Limes)
}, 1);


var Limes = Limes;
var ones = ones;
var twos = twos;
var twos = twos;
var threes = threes;
var fours = fours;
var fives = fives;
var sixes = sixes;
var sevens = sevens;
var oneCost = oneCost;
var twoCost = twoCost;
var threeCost = threeCost;

function save() {
    localStorage.setItem('Limes', JSON.stringify(Limes));
    localStorage.setItem('ones', JSON.stringify(ones));
    localStorage.setItem('twos', JSON.stringify(twos));
    localStorage.setItem('threes', JSON.stringify(threes));
    localStorage.setItem('fours', JSON.stringify(fours));
    localStorage.setItem('fives', JSON.stringify(fives));
    localStorage.setItem('sixes', JSON.stringify(sixes));
    localStorage.setItem('sevens', JSON.stringify(sevens));
    localStorage.setItem('oneCost', JSON.stringify(oneCost));
    localStorage.setItem('twoCost', JSON.stringify(twoCost));
    localStorage.setItem('threeCost', JSON.stringify(threeCost));
    localStorage.setItem('fourCost', JSON.stringify(fourCost));
    localStorage.setItem('fiveCost', JSON.stringify(fiveCost));
    localStorage.setItem('sixeCost', JSON.stringify(sixeCost));
    localStorage.setItem('sevenCost', JSON.stringify(sevenCost));
  }

  function load() {
    Limes = JSON.parse(localStorage.getItem('Limes'));
    ones = JSON.parse(localStorage.getItem('ones'));
    twos = JSON.parse(localStorage.getItem('twos'));
    threes = JSON.parse(localStorage.getItem('threes'));
    fours = JSON.parse(localStorage.getItem('fours'));
    fives = JSON.parse(localStorage.getItem('fives'));
    sixes = JSON.parse(localStorage.getItem('sixes'));
    sevens = JSON.parse(localStorage.getItem('sevens'));
    oneCost = JSON.parse(localStorage.getItem('oneCost'));
    twoCost = JSON.parse(localStorage.getItem('twoCost'));
    threeCost = JSON.parse(localStorage.getItem('threeCost'));
    fourCost = JSON.parse(localStorage.getItem('fourCost'));
    fiveCost = JSON.parse(localStorage.getItem('fiveCost'));
    sixCost = JSON.parse(localStorage.getItem('sixCost'));
    sevenCost = JSON.parse(localStorage.getItem('sevenCost'));
  }