const compChoices = ['rock', 'paper', 'scissors'];
let secretFourthChoices = [

    'the end of the world',
    'strong breeze',
    "someone's sweet old grandmother",
    'the end of the world',
    "Godzilla but smaller and also he is more upset than usual but he won't say why"
]

let userScore = 0;
let cpuScore = 0;
let godzillaScore = false;

let clicks = 0;


let cpuText = document.querySelector(".cpu-text")
let secretThing = document.querySelector('.secret-thing')


function getCompChoice() {
    let index = Math.floor(Math.random() * 3);
    return compChoices[index];
}

function getSecretFourthThing() {
    let index = Math.floor(Math.random() * 6);
    return secretFourthChoices[index];
}

function runSecretThing() {

    const user = getSecretFourthThing();
    const myChoice = getCompChoice();


    switch (user) {
        case "Godzilla but smaller and also he is more upset than usual but he won't say why":
            goGodzilla(myChoice)
            break;
        case "falling piano":
            piano(myChoice)
            break;
        case 'strong breeze':
            strongBreeze(myChoice)
            break;
        case 'the end of the world':
            endOfWorld(myChoice)
            break;
        case "someone's sweet old grandmother":
            granny(myChoice)
            break;

    }

}

function piano(myChoice) {


    switch (myChoice) {

        case 'rock':
            typewriter('I chose rock, and you chose a falling piano. You fell on me but it hurt you more than it hurt me in the end. I win!')
            cpuScore++;
            break;
        case 'scissors':
            typewriter("I chose scissors, and you chose a falling piano. You fell on me and broke me, but you broke yourself too. It's a tie!")
            break;
        case 'paper':
            typewriter('I chose paper, and you chose a falling piano. Nothing really happened to me but you broke yourself. I win!')
            cpuScore++;
            break;

    }

    updateScore();

}

function strongBreeze(myChoice) {


    switch (myChoice) {

        case 'rock':
            typewriter("I chose rock, and you chose a strong breeze. It isn't strong enough to move me. I win!")
            cpuScore++;
            break;
        case 'scissors':
            typewriter("I chose scissors, and you chose a strong breeze. You didn't carry me away, but you did rattle me a little. It's a tie!")
            break;
        case 'paper':
            typewriter("I chose paper, you chose a strong breeze. You carried me very far away from everything I knew and loved. You win!")
            userScore++;
            break;

    }

    updateScore();


}

function endOfWorld(myChoice) {


    switch (myChoice) {

        case 'rock':
            typewriter("You chose the end of the world. I chose rock, but that doesn't seem to matter now. You win!")
            userScore++;
            break;
        case 'scissors':
            typewriter("I chose scissors, but you chose the end of the world, which doesn't seem totally fair. You win!")
            userScore++;
            break;
        case 'paper':
            typewriter("I chose paper, but you chose the end of the world. It wouldn't have mattered what I chose, everything ends one day. You win!")
            userScore++;
            break;

    }

    updateScore();


}

function granny(myChoice) {


    switch (myChoice) {

        case 'rock':
            typewriter("You chose someone's sweet old grandmother, and I chose rock. She takes it and puts it in her garden, where it fits in perfectly. You win!")
            userScore++;
            break;
        case 'scissors':
            typewriter("You chose someone's sweet old grandmother, and I chose scissors. She takes the scissors apart and uses them to knit me a very comfortable sweater. I win!")
            cpuScore++;
            break;
        case 'paper':
            typewriter("You chose someone's sweet old grandmother, and I chose paper. She uses the paper to write me a sweet note, wishing me a great first day of school. I do not go to school. It's a tie!")
            break;

    }

    updateScore();


}

function goGodzilla() {

    const scoreboard = document.querySelector('.score-counter')
    scoreboard.classList.add('hidden')
    cpuText.innerHTML = "";

    typewriter("Oh, look. You chose Godzilla, but smaller. You can tell he's more upset than usual but that he doesn't want to talk about it. What do you want to do now?");

    const godzilla = document.getElementById('godzilla-mode');
    godzilla.classList.remove('hidden')

    const buttons = document.querySelector('.game-buttons');
    buttons.classList.add('hidden')

    const askGodzilla = document.getElementById("ask")
    const feedGodzilla = document.getElementById("feed")
    const sing = document.getElementById("sing")
    const leave = document.getElementById("leave")


    askGodzilla.addEventListener('click', () => {
        askGodzilla.classList.add('hidden')
        typewriter("Congrats, you just made him feel even worse. Now he's even more upset, and even more unwilling to talk about it. What do you want to do now?")

    })

    feedGodzilla.addEventListener('click', () => {
        feedGodzilla.classList.add('hidden')
        typewriter("He isn't very hungry, because he is upset. He still does not want to talk about it, but he knows how much time and effort you spend cooking for him. He tries to smile at you, but it feels forced.")

    })

    leave.addEventListener('click', () => {
        leave.classList.add('hidden')
        typewriter("You can't leave right now. That would be rude.")
    })

    sing.addEventListener('click', () => {
        godzilla.classList.add('hidden')
        singToHim();
    })


}



function singToHim() {

    typewriter("Godzilla looks up, intrigued by your voice. The look in his eyes is...almost wistful. You sense a feeling of longing coming from deep within him.")

    const sing = document.getElementById('godzilla-sing')
    sing.classList.remove('hidden')

    const quieter = document.getElementById("quiet")
    const louder = document.getElementById("loud")
    const diffSong = document.getElementById("diff-song")
    const keepGoing = document.getElementById("same-song")



    quieter.addEventListener('click', () => {
        quieter.classList.add('hidden');
        typewriter('Godzilla looks upset again. Now he can barely hear you. Why did you think that would help? You begin to sing at a normal volume again.')


    })

    louder.addEventListener('click', () => {
        louder.classList.add('hidden');
        typewriter("He looks more irritated than upset now. The face he is making makes you feel insecure, like you shouldn't have gone for those big notes. You know he is right. You begin to sing at a normal volume again.")
    })

    diffSong.addEventListener('click', () => {
        diffSong.classList.add('hidden');
        typewriter('Godzilla does not like that song, and makes no attempt to hide that in his face. The new song is not good like the old song was. You begin to sing the old song once again.')
    })

    keepGoing.addEventListener('click', () => {
        sing.classList.add('hidden')
        breakingThru();
    })
}

function breakingThru() {

    typewriter('You can tell Godzilla is truly enchanted by the song and your voice. A tear rolls down his face, and then another. He is fully crying now.')

    const breakthru = document.getElementById('godzilla-breakthru');
    breakthru.classList.remove('hidden')

    const reach = document.getElementById('reach');
    const tissue = document.getElementById('tissue');
    const baby = document.getElementById('baby')
    const crying = document.getElementById('crying')

    reach.addEventListener('click', () => {
        reach.classList.add('hidden')
        typewriter("You reach for his hand, but he recoils. It is too much too soon.")
    })

    tissue.addEventListener('click', () => {
        breakthru.classList.add('hidden');
        gettingThere();
    })

    baby.addEventListener('click', () => {
        baby.classList.add('hidden');
        typewriter("I almost did not give you that choice, but I thought you wouldn't be cruel enough to use it. He is now crying harder, and kicking his legs in the air. Sort of like a wittle baby.")
    })

    crying.addEventListener('click', () => {
        crying.classList.add('hidden');
        typewriter("You begin crying, too. Godzilla looks put-off. This really isn't about you right now.")
    })


}

function gettingThere() {

    typewriter("Godzilla takes the tissue you offered and dabs at his eyes. He appreciates the gesture.")

    const getThere = document.getElementById('godzilla-gettingthere');
    getThere.classList.remove('hidden')

    const smile = document.getElementById('smile');
    const joke = document.getElementById('joke')
    const magic = document.getElementById('magic-trick')
    const wrongAgain = document.getElementById('wrong-again')


    smile.addEventListener('click', () => {
        smile.classList.add('hidden');
        typewriter("You force a smile at Godzilla. He gives a small smile back. You both continue like that for what feels like a century. It is awkward and horrible, and he looks like he might cry again.")

    })

    joke.addEventListener('click', () => {
        joke.classList.add('hidden');
        typewriter("Godzilla did not like your joke. He has heard better jokes on the evening news.")

    })

    magic.addEventListener('click', () => {
        getThere.classList.add('hidden')
        magicStuff();

    })

    wrongAgain.addEventListener('click', () => {
        wrongAgain.classList.add('hidden');
        typewriter("You ask Godzilla what is wrong again. He is still not ready to talk about it.")

    })

}

function magicStuff() {

    typewriter("You wiggle your fingers and pull a dime out from behind Godzilla's ear. Godzilla is elated. He loves magic tricks. You give him the dime.")

    const magic = document.getElementById('godzilla-magic');
    magic.classList.remove('hidden')

    const photos = document.getElementById('photo-album');
    const anotherTrick = document.getElementById('another-trick');
    const cheese = document.getElementById('cheese');
    const dime = document.getElementById('dime');

    photos.addEventListener('click', () => {
        magic.classList.add('hidden');
        willThey();

    })

    anotherTrick.addEventListener('click', () => {
        anotherTrick.classList.add('hidden')
        typewriter("You tell Godzilla to pick a random card from the deck. You try to guess what it is, but you aren't even close. You overestimated your magic skills. Godzilla looks disappointed.")

    })

    cheese.addEventListener('click', () => {
        cheese.classList.add('hidden')
        typewriter("You offer Godzilla a carefully curated cheese plate, but he is lactose intolerant. He politely refuses.")

    })

    dime.addEventListener('click', () => {
        dime.classList.add('hidden')
        typewriter("You ask Godzilla for your dime back, even though you just gave it to him. He looks uncomfortable, but hands it back to you anyway. You feel a little embarrassed for asking.")

    })



}

function willThey() {

    typewriter("You and Godzilla spend hours pouring over your old family photo albums as you share smiles, laughter, and your lifetime of memories with him. He loves getting to see what you were like growing up because it makes him feel closer to you. You realize for the first time how beautiful Godzilla looks in this light.")

    const maybe = document.getElementById('godzilla-willthey');
    maybe.classList.remove('hidden')

    const hair = document.getElementById('hair');
    const tryLeave = document.getElementById('try-leave');
    const takePic = document.getElementById('take-pic');
    const hand = document.getElementById('reach-again')

    hair.addEventListener('click', () => {
        hair.classList.add('hidden');
        typewriter("You go to brush a stray hair behind Godzilla's ear, but he does not have hair. You accidentally poke him in the eye.")

    })

    tryLeave.addEventListener('click', () => {
        tryLeave.classList.add('hidden');
        typewriter("You get up to leave, overwhelmed by your newfound feelings. Something tells you to turn around one more time when you make it to the door. You look back at Godzilla. His eyes are pleading for you to stay. You do.")

    })

    takePic.addEventListener('click', () => {
        takePic.classList.add('hidden');
        typewriter("You get out your Polaroid camera and take a picture of Godzilla. He is shy, but the photo turns out perfect. He smiles as you pin it in your family photo album.")

    })

    hand.addEventListener('click', () => {
        maybe.classList.add('hidden');
        wontThey();

    })
}

function wontThey() {

    typewriter("You reach for Godzilla's hand and hold it in yours. You realize you are holding everything you ever wanted.")

    const love = document.getElementById('godzilla-wontthey');
    love.classList.remove('hidden');

    const marry = document.getElementById('marry');

    marry.addEventListener('click', () => {
        love.classList.add('hidden');
        altar();
    })

}

function altar() {


    const header = document.querySelector('header')
    header.textContent = "Your Dream Wedding Planner"
    header.classList.add('cursive')


    typewriter("You and Godzilla proposed to each other at the same time. You can't believe how lucky you are, but you can't dwell on that for long. You have to plan your wedding for your marriage to Godzilla! What do you want your wedding theme to be?")

    const altar = document.getElementById('wedding-altar');
    altar.classList.remove('hidden')

    const beach = document.getElementById('beach');
    const beachPic = document.getElementById('beach-pic');
    const backyard = document.getElementById('backyard')
    const backyardPic = document.getElementById('backyard-pic')
    const traditional = document.getElementById('traditional')
    const traditionalPic = document.getElementById('traditional-pic')
    const pinkWhite = document.getElementById('pink-white')
    const pinkWhitePic = document.getElementById('pink-white-pic');

    beach.addEventListener('click', () => {
        beachPic.classList.remove('hidden');
        altar.classList.add('hidden');
        colorWedding();
    })

    backyard.addEventListener('click', () => {
        backyardPic.classList.remove('hidden');
        altar.classList.add('hidden');
        colorWedding();
    })

    traditional.addEventListener('click', () => {
        traditionalPic.classList.remove('hidden');
        altar.classList.add('hidden');
        colorWedding();
    })

    pinkWhite.addEventListener('click', () => {
        pinkWhitePic.classList.remove('hidden');
        altar.classList.add('hidden');
        colorWedding();
    })


}

function colorWedding() {


    typewriter("What a lovely theme for a lovely couple! Next up: what color do you want your wedding to be?")

    const colors = document.getElementById('wedding-colors');
    colors.classList.remove('hidden')

    const pink = document.getElementById('pink');
    const purple = document.getElementById('purple');
    const blue = document.getElementById('blue');
    const orange = document.getElementById('orange')

    pink.addEventListener('click', () => {
        colors.classList.add('hidden')
        document.body.style.backgroundColor = 'lightpink';
        document.body.style.color = 'black'
        flowers();
    })

    purple.addEventListener('click', () => {
        colors.classList.add('hidden')
        document.body.style.backgroundColor = 'mediumpurple';
        document.body.style.color = 'black'
        flowers();
    })

    blue.addEventListener('click', () => {
        colors.classList.add('hidden')
        document.body.style.backgroundColor = 'cornflowerblue';
        document.body.style.color = 'black'
        flowers();
    })

    orange.addEventListener('click', () => {
        colors.classList.add('hidden')
        document.body.style.backgroundColor = 'orange';
        document.body.style.color = 'black'
        flowers();
    })


}


function flowers() {

    typewriter("That color is so stunning for your wedding! What kind of flowers would you like to have?")

    const flower = document.getElementById('wedding-flowers');
    flower.classList.remove('hidden')


    const rose = document.getElementById('roses');
    const rosePic = document.getElementById('rose-pic')
    const daisy = document.getElementById('daisies');
    const daisyPic = document.getElementById('daisy-pic')
    const tulip = document.getElementById('tulips')
    const tulipPic = document.getElementById('tulip-pic')
    const stick = document.getElementById('sticks')
    const stickPic = document.getElementById('sticks-pic')


    rose.addEventListener('click', () => {
        flower.classList.add('hidden');
        rosePic.classList.remove('hidden');
        food();
    })

    daisy.addEventListener('click', () => {
        flower.classList.add('hidden');
        daisyPic.classList.remove('hidden');
        food();
    })

    tulip.addEventListener('click', () => {
        flower.classList.add('hidden');
        tulipPic.classList.remove('hidden');
        food();
    })

    stick.addEventListener('click', () => {
        flower.classList.add('hidden');
        stickPic.classList.remove('hidden');
        food();
    })

}

function food() {

    typewriter("Everything is coming together so beautifully! The last question before the big day: what kind of food do you want to be served during your wedding to Godzilla?")

    const foods = document.getElementById('wedding-food');
    foods.classList.remove('hidden');

    const chicken = document.getElementById('chicken');
    const chickenPic = document.getElementById('chicken-pic')
    const pancake = document.getElementById('pancake');
    const pancakePic = document.getElementById('pancake-pic')
    const burger = document.getElementById('burger');
    const burgerPic = document.getElementById('burger-pic')
    const nothing = document.getElementById('nothing')
    const nothingPic = document.getElementById('nothing-pic')

    chicken.addEventListener('click', () => {
        chickenPic.classList.remove('hidden');
        foods.classList.add('hidden');
        weddingTime();
    })

    pancake.addEventListener('click', () => {
        pancakePic.classList.remove('hidden');
        foods.classList.add('hidden');
        weddingTime();
    })

    burger.addEventListener('click', () => {
        burgerPic.classList.remove('hidden');
        foods.classList.add('hidden');
        weddingTime();
    })

    nothing.addEventListener('click', () => {
        nothingPic.classList.remove('hidden');
        foods.classList.add('hidden');
        weddingTime();
    })

}

function weddingTime() {

    typewriter("Wow, that looks delicious! I can't believe the big day is finally here. All that's left to do now is wait for Godzilla to get here, so you can start your beautiful life together.")

    const weddingDay = document.getElementById('godzilla-wedding-day');
    weddingDay.classList.remove('hidden');

    const weddingNight = document.getElementById('godzilla-wedding-night')
    const weddingDisplay = document.getElementById('wedding-display')

    const allGodzilla = document.getElementById('all-godzilla');


    const waitBtn = document.getElementById('wait');
    const secondWait = document.getElementById('wait2');
    const thirdWait = document.getElementById('wait3');
    const fourthWait = document.getElementById('wait4');
    const wave = document.getElementById('wave')
    const doug = document.getElementById('doug')
    const sadDoug = document.getElementById('doug2')
    const runaway = document.getElementById('runaway')
    const rainyPic = document.getElementById('rainy')
    const breathe = document.getElementById('stop');
    const leavingPic = document.getElementById('leaving');
    const letGo = document.getElementById('let-go')
    const oceanPic = document.getElementById('ocean')
    const goodbye = document.getElementById('bye')

    waitBtn.addEventListener('click', () => {
        waitBtn.classList.add('hidden')
        secondWait.classList.remove('hidden')
        typewriter("Your heart races as you wait for the love of your life, Godzilla, to walk down the aisle to you. You are so nervous, but so at peace. You have never felt more sure of anything in your whole life.")

    })

    secondWait.addEventListener('click', () => {
        secondWait.classList.add('hidden')
        thirdWait.classList.remove('hidden')
        typewriter("You keep waiting, your stomach in knots, your heart aflutter.")

    })

    thirdWait.addEventListener('click', () => {
        thirdWait.classList.add('hidden')
        fourthWait.classList.remove('hidden')
        typewriter("You're starting to get nervous now. It's been quite a long time, and Godzilla is nowhere in sight. It isn't like him to be late like this...")

    })

    fourthWait.addEventListener('click', () => {
        fourthWait.classList.add('hidden')
        wave.classList.remove('hidden')
        typewriter("Just as you start to lose hope, you see someone approaching from the distance. You breathe a sigh of relief. You knew Godzilla would never leave you.")
    })

    wave.addEventListener('click', () => {
        wave.classList.add('hidden');
        const dougPic = document.getElementById('sad-pic');
        dougPic.classList.remove('hidden')
        doug.classList.remove('hidden')
        typewriter("You wave to Godzilla, but as the figure gets closer, you realize it isn't Godzilla at all. It's his brother, Doug. He doesn't look happy.")
    })

    doug.addEventListener('click', () => {
        doug.classList.add('hidden')
        sadDoug.classList.remove('hidden')
        typewriter("He doesn't answer you at first, but you can see in his eyes that Godzilla isn't coming. Your world begins to crumble around you. You need to hear him say it out loud.")
    })

    sadDoug.addEventListener('click', () => {
        sadDoug.classList.add('hidden');
        runaway.classList.remove('hidden')
        typewriter("You grab Doug by his shirt and shake him, demanding he tell you where Godzilla is. 'He isn't coming,' he tells you. 'He couldn't do it. He couldn't learn to love. If he could have loved anyone, it would have been you. I'm so sorry.'")

    })

    runaway.addEventListener('click', () => {
        weddingDisplay.classList.add('hidden')
        weddingNight.classList.remove('hidden')
        runaway.classList.add('hidden');
        typewriter("You start running and you don't stop for what feels like forever. You think it's raining out, but you can't be sure if it's really rain or if it's just your tears. You're not sure where you are, but the sand beneath your feet tells you it's some kind of beach. ually you start to get winded and need to stop to catch your breath.")

    })

    breathe.addEventListener('click', () => {
        rainyPic.classList.add('hidden');
        breathe.classList.add('hidden');
        leavingPic.classList.remove('hidden');
        letGo.classList.remove('hidden');
        typewriter("You stop running and fall onto the sandy shore. As you do, you hear something in the ocean. You look toward the sound and watch as Godzilla descends into the water and heads back to where he came from (Michigan).  You want to call out to him, you know he'd hear you. But something stops you. You know what you need to do now.")

    })

    letGo.addEventListener('click', () => {
        leavingPic.classList.add('hidden');
        letGo.classList.add('hidden');
        oceanPic.classList.remove('hidden');
        goodbye.classList.remove('hidden')
        typewriter("You watch him leave. He takes with him all of the hopes and dreams of the life you could have built together. You know that it's over forever. You want to be mad at him, but you can't. He is the only thing you have ever loved more than yourself. A tear rolls down your cheek as you head back toward the life you had before him.")

    })

    goodbye.addEventListener('click', () => {
        allGodzilla.classList.add('hidden');
        const header = document.querySelector('header')
        header.textContent = "Rock, Paper, Scissors, Secret Fourth Thing"
        header.classList.remove('cursive');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'cornflowerblue'
        const buttons = document.querySelector('.game-buttons');
        buttons.classList.remove('hidden')
        secretFourthChoices.pop();
        secretFourthChoices.push("falling piano")
        typewriter("Welcome back!")
        godzillaScore = true;
        updateScore();
        const scoreboard = document.querySelector('.score-counter')
        scoreboard.classList.remove('hidden')

    })

}

function updateScore() {

    const scoreboard = document.querySelector('.score-counter')

    if (godzillaScore === false) {
        scoreboard.textContent = ("User score: " + userScore + "  |  CPU score: " + cpuScore);
    } else {
        scoreboard.textContent = ("User score: " + userScore + "  |  CPU score: " + cpuScore + "  |  Godzilla score: 1");

    }

}

function typewriter(str) {

    cpuText.innerHTML = "";

    let godzillaGame = document.getElementById("all-godzilla")
    let mainGame = document.querySelector(".game-buttons");

    //gives the cpu text the typewriter effect by rendering one character at a time
    for (let i = 0; i < str.length; i++) {
    //making the buttons unclickable so the full text can render; otherwise new and old text both start rendering and it becomes gibberish 
        mainGame.classList.add("unclickable");
        godzillaGame.classList.add("unclickable")
        setTimeout(() => {
            cpuText.innerHTML += str.charAt(i);
        }, 42 * i);

    }

    //making the buttons clickable again once the text has finished rendering
    setTimeout(() => {
        mainGame.classList.remove("unclickable");
        godzillaGame.classList.remove("unclickable")
    }, 42 * str.length);


}


function runGame(button) {

    const myChoice = getCompChoice();

    //keep track of clicks here; after 4 then the secret fourth thing button appears 
    clicks++;

    if (clicks > 4) {
        secretThing.classList.remove('hidden')
    }

    switch (button.textContent) {
        case 'Rock':
            if (myChoice == 'rock') {
                typewriter("We both chose rock! It's a tie.")
            } else if (myChoice == 'scissors') {
                typewriter("I chose scissors, so you crushed me! Congrats!")
                userScore++;
            } else {
                typewriter("I chose paper and covered you up. Nice try!")
                cpuScore++;
            }
            break;

        case 'Paper':
            if (myChoice == 'paper') {
                typewriter("We both chose paper! It's a tie.")
            } else if (myChoice == 'rock') {
                typewriter("I chose rock and you covered me up! Nice one!")
                userScore++;
            } else {
                typewriter("I chose scissors and chopped you. Better luck next time!")
                cpuScore++;
            }
            break;

        case 'Scissors':
            if (myChoice == 'scissors') {
                typewriter("We both chose scissors! It's a tie.")
            } else if (myChoice == 'paper') {
                typewriter("I chose paper and you chopped me! Nice moves!")
                userScore++;
            } else {
                typewriter("I chose rock and crushed you. Can't win 'em all!")
                cpuScore++;
            }
            break;

    }
    updateScore();
}


document.addEventListener('DOMContentLoaded', () => {

    updateScore();

    typewriter('Welcome!')

    let btns = document.querySelectorAll('.standard');

    btns.forEach((btn) => {

        btn.addEventListener('click', (event) => {
            runGame(event.target)
        })
    })

    secretThing.classList.add("hidden")

    secretThing.addEventListener('click', () => {
        runSecretThing();
    })



})