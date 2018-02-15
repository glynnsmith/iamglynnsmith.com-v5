// greeting.js

var greetingTarget = document.getElementById('greeting'); // Grab the <span> element in the HTML

var messageTarget = document.getElementById('message'); // Grab the <span> element in the HTML

var hr = new Date().getHours(); //get hours of the day in 24Hr format (0-23)

var greeting;
var message;
var time;

var counter = -1;

var exclamationList = [
	'Whoa! ',
	'Yeesh! ',
	'Cor! ',
	'Egads! ',
	'Whew! ',
	'Holy hotdogs! ',
	'Gee whizz! ',
	'Crikey! ',
	"Flippin' heck! ",
	'Jimminy Christmas! '
];

var greetingList01 = [
	'Well hey',
	'Hello',
	'Hi there',
	'Hey hey',
	'Well hi',
	"G'day",
	'Greetings',
	'Howdy',
	'Hey up'
];

var greetingList02 = [
	'Ah, you made it',
	'Hey up, sausage',
	"Oh hey, it's you",
	'Hellooooooooo there',
	'Welcome one, welcome all',
	'Salutations, human',
	'Nice to see ya'
];

var greetingList03 = [
	'Howdy doody, ding dang pow',
	'Wubba lubba dub dub', // Rick & Morty
	'Beep boop',
	'Bippety boppity bacon',
	'< complicated handshake sequence >',
	'Shmow-zow', // Adventure Time
	'Oh my glob', // Adventure Time
	'Mathematical', // Adventure Time
	'0110100001100101011011000110110001101111', // Binary
	'68 65 6c 6c 6f 20 68 65 6c 6c 6f' // Hexidecimal
];

var greetingList = greetingList01;

var messageList = [
	'a great',
	'a brill',
	'an ace',
	'an awesome',
	'a decent',
	'a smashing',
	'a bodacious',
	'a totally tubular'
];

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

var oldGreeting = 0;
var olderGreeting = 0;

function greetingMaker() {
	var i = getRandomInt(0, greetingList.length);

	if (oldGreeting === i || olderGreeting === i) {
		greetingMaker();
	} else {
		greeting = greetingList[i];
		olderGreeting = oldGreeting;
		oldGreeting = i;
		// console.log("Old: " + oldGreeting + " - Older: " + olderGreeting);
		// console.log(counter);
		counter++;
	}

	var messageWarn = 7;

	if (counter % messageWarn || counter === 0) {
		greetingTarget.innerHTML = greeting + '.';
	} else {
		if (counter == messageWarn) {
			greetingTarget.innerHTML =
				"You've hit this link " + counter + ' times. Pretty neat.';
		} else if (counter == messageWarn * 2) {
			greetingTarget.innerHTML =
				'Nice! ' + counter + ' clicks. Solid display of link twiddling.';
		} else if (counter == messageWarn * 3) {
			greetingTarget.innerHTML = counter + ' link hits, now. Slow day?';
		} else if (counter == messageWarn * 4) {
			greetingTarget.innerHTML =
				'We offer no prizes for link-clicking, by the way. Though, you have hit this link ' +
				counter +
				" times, incase you thought I wasn't counting.";
		} else if (counter == messageWarn * 5) {
			greetingTarget.innerHTML =
				'I totally am counting, though. ' + counter + ' link clicks, now.';
		} else if (counter == messageWarn * 6) {
			greetingTarget.innerHTML =
				"Status reports show you've hit this link " +
				counter +
				" times. Please don't break my link.";
		} else if (counter == messageWarn * 7) {
			greetingTarget.innerHTML =
				"You've hit this link " +
				counter +
				" times, and I think you should stop. There definitely aren't any more unique messages after this one.";
		} else if (counter == messageWarn * 8) {
			greetingTarget.innerHTML =
				"Ok. So you're not a listener, and now you've hit this link " +
				counter +
				" times. Fair enough. I can respect that. You don't follow the rules. I applaud your tenacity. Kudos, you rebel. Bravo.";
		} else if (counter == messageWarn * 9) {
			greetingTarget.innerHTML =
				"All right. I get it. You've programmed a robotic arm to keep clicking this link. Your programmable robotic arm has hit this link " +
				counter +
				' times, and that is flipping awesome, actually.';
		} else if (counter == messageWarn * 10) {
			greetingTarget.innerHTML =
				'Way to go, robo! Your click tally is ' + counter;
		} else if (counter == messageWarn * 11) {
			greetingTarget.innerHTML =
				'Maybe go outside? Or read a book? Perhaps that new, terrible Ben Stiller movie would provide you with better entertainment than clicking this link for a total of ' +
				counter +
				' hot damn times.';
		} else if (counter == messageWarn * 12) {
			greetingTarget.innerHTML =
				"You're just showing off now. " + counter + ' clicks.';
		} else if (counter == messageWarn * 13) {
			greetingTarget.innerHTML =
				"You're still just showing off now. " + counter + ' clicks.';
		} else if (counter == messageWarn * 14) {
			greetingTarget.innerHTML =
				"Okay. Okay! You win! Wow. Just wow. You've hit this link " +
				counter +
				" times, you crazyperson-with-a-programmable-link-clicking-robo-arm. You win the prize. You hit the bullseye. You are a click-master. You are a champion, and a scholar. I've called the police whilst you were reading this message.";
		} else if (counter > messageWarn * 14) {
			var k = getRandomInt(0, exclamationList.length);
			var exclamation = exclamationList[k];
			greetingTarget.innerHTML = exclamation + '(' + counter + ' clicks)';
		} else if (counter == messageWarn * 40) {
			greetingTarget.innerHTML =
				"Okay. Okay! You win! Wow. Just wow. You've hit this link " +
				counter +
				" times, you crazyperson-with-a-programmable-link-clicking-arm. You win the prize. You hit the bullseye. You are a click-master. You are a champion, and a scholar. I've called the police.";
		}
	}

	if (counter > messageWarn * 5) {
		greetingList = greetingList02;
	}

	if (counter > messageWarn * 10) {
		greetingList = greetingList03;
	}
}

var oldMessage = 25;

var messageMaker = function() {
	var i = getRandomInt(0, messageList.length);

	if (oldMessage !== i) {
		oldMessage = i;
		message = messageList[i];
		// console.log("Old: " + oldMessage);
	} else {
		messageMaker();
	}
};

var timeDecide = function() {
	if (hr >= 0 && hr < 12) {
		time = 'morning';
	} else if (hr >= 12 && hr < 18) {
		time = 'afternoon';
	} else {
		time = 'evening';
	}
};

greetingMaker();
messageMaker();
timeDecide();

messageTarget.innerHTML += 'Have ' + message + ' ' + time + '. ';
