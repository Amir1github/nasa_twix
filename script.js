
const inactivityTimeout = 60000; // 5 minutes (adjust as needed)

let inactivityTimer; // Variable to hold the reference to the setTimeout function

// Function to reload the page
function reloadPage() {
    window.location.reload();
}

// Function to reset the inactivity timer
function resetInactivityTimer() {
    // Clear the existing timer, if any
    clearTimeout(inactivityTimer);

    // Set a new timer to reload the page after the specified duration of inactivity
    inactivityTimer = setTimeout(reloadPage, inactivityTimeout);
}

// Event listeners to track user activity and reset the inactivity timer
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);
document.addEventListener('scroll', resetInactivityTimer);

// Initial setup: Start the inactivity timer when the page loads
resetInactivityTimer();


// Check if the browser is Chrome
if (navigator.userAgent.indexOf("Chrome") != -1) {
    console.log("You are using Chrome!");
}

// Check if the browser is Firefox
else if (navigator.userAgent.indexOf("Firefox") != -1) {
    console.log("You are using Firefox!");
}

// Check if the browser is Safari
else if (navigator.userAgent.indexOf("Safari") != -1) {
    console.log("You are using Safari!");
}

// Check if the browser is Internet Explorer
else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) {
    console.log("You are using Internet Explorer!");
}

// Check if the browser is Edge
else if (navigator.userAgent.indexOf("Edge") != -1) {
    console.log("You are using Edge!");
}

// If none of the above, assume it's some other browser
else {
    console.log("You are using some other browser!");
}

window.addEventListener('load', toggleOrbit)



let hamburger = document.querySelector('.hamburger-menu')
let lineTop = document.querySelector('.line-top')
let lineMiddle = document.querySelector('.line-middle')
let lineBottom = document.querySelector('.line-bottom')
let mobileNav = document.querySelector('.mobile-nav-menu')

hamburger.addEventListener('click', mobileMenuPopup)

function mobileMenuPopup() {
    mobileNav.classList.toggle('mobile-hidden')
    hamburger.classList.toggle('hamburger-menu-move')
    lineTop.classList.toggle('line-top-move')
    lineMiddle.classList.toggle('line-middle-move')
    lineBottom.classList.toggle('line-bottom-move')
}

let mobilePopupBtn = document.querySelector('.mobile-popup-btn')
let mobilePopup = document.getElementById('mobile-popup')

mobilePopupBtn.addEventListener('click', closeMobilePopup)

function closeMobilePopup() {
    mobilePopup.style.opacity = "0"
    modalInfo.classList.add('display-none')
    spaceship.classList.add('display-none')
    gradientMask.classList.add('display-none')
    setTimeout(function () {
        mobilePopup.style.display = "none"
        controlsContainer.style.opacity = "0.75"
    }, 1000)
    playMusic()
}


let musicBtn = document.querySelector('.music-btn')
let isMusicOn = false
let musicIcon = document.querySelector('.music-icon')


musicBtn.addEventListener('click', playMusic)


function playMusic() {


    var soundtrack = document.getElementById("music");
    if (!isMusicOn) {
        soundtrack.play();
        soundtrack.loop = true;
        musicIcon.src = "./assets/volume-up.png"
        isMusicOn = true
    } else {
        soundtrack.pause();
        soundtrack.loop = true;
        musicIcon.src = "./assets/no-sound.png"
        isMusicOn = false
    }

}





let liftOffActive = false
let liftOffBtn = document.querySelector('.lift-off-btn');
let spaceship = document.querySelector('.rocket-modal')
let modalInfo = document.querySelector('.modal-info')
let gradientModal = document.querySelector('.gradient-bg')
let rocketInfoContainer = document.querySelector('.rocket-modal-info')
let gradientMask = document.querySelector('.gradient-mask')
let controlsContainer = document.querySelector('.orbit-controls-container')



liftOffBtn.addEventListener('click', liftOff);



function liftOff() {
    // Check if the browser is Safari
    if (!liftOffActive) {
        console.log("You are using Safari!");
        modalInfo.style.opacity = "0"
        spaceship.classList.add('takeoff-animation');
        gradientMask.classList.add('modal-move')
        playMusic()
        setTimeout(displayNone, 4000)
        // setTimeout(toggleOrbit, 1000)
        liftOffActive = true
    }

}

function displayNone() {
    spaceship.classList.add('display-none')
    rocketInfoContainer.classList.add('display-none')
    gradientModal.classList.add('display-none')
    controlsContainer.style.opacity = "0.75"
}

/* ===========================      DECLARATIONS        =========================== */

/* ===========================       MENU BUTTONS       =========================== */
let mercuryMenuBtn = document.getElementById("mercury-menu")
let venusMenuBtn = document.getElementById("venus-menu")
let earthMenuBtn = document.getElementById("earth-menu")
let marsMenuBtn = document.getElementById("mars-menu")
let jupiterMenuBtn = document.getElementById("jupiter-menu")
let saturnMenuBtn = document.getElementById("saturn-menu")
let uranusMenuBtn = document.getElementById("uranus-menu")
let neptuneMenuBtn = document.getElementById("neptune-menu")
let sunMenuBtn = document.getElementById("sun-menu")
let moonMenuBtn = document.getElementById("moon-menu")
let cometMenuBtn = document.getElementById("comet-menu")
let asteroidMenuBtn = document.getElementById("asteroid-menu")
let meteorMenuBtn = document.getElementById("meteor-menu")
let satelliteMenuBtn = document.getElementById("satellite-menu")
let alienMenuBtn = document.getElementById("alien-menu")

let mercuryMobileMenuBtn = document.getElementById("mobile-mercury-menu")
let venusMobileMenuBtn = document.getElementById("mobile-venus-menu")
let earthMobileMenuBtn = document.getElementById("mobile-earth-menu")
let marsMobileMenuBtn = document.getElementById("mobile-mars-menu")
let jupiterMobileMenuBtn = document.getElementById("mobile-jupiter-menu")
let saturnMobileMenuBtn = document.getElementById("mobile-saturn-menu")
let uranusMobileMenuBtn = document.getElementById("mobile-uranus-menu")
let neptuneMobileMenuBtn = document.getElementById("mobile-neptune-menu")
let sunMobileMenuBtn = document.getElementById("mobile-sun-menu")
let moonMobileMenuBtn = document.getElementById("mobile-moon-menu")



/* ===========================        INDIVIDUAL PLANETS            ===================== */


let mercury = document.getElementById('mercury');
let venus = document.getElementById('venus');
let earth = document.getElementById('earth');
let mars = document.getElementById('mars');
let jupiter = document.getElementById('jupiter');
let saturn = document.getElementById('saturn');
let neptune = document.getElementById('neptune');
let uranus = document.getElementById('uranus');
let sun = document.getElementById('sun')
let moon = document.getElementById('moon')

/* =========================                PLANET ROTATION              ======================== */


let mercuryRotate = document.querySelector('.mercury-rotate')
let venusRotate = document.querySelector('.venus-rotate')
let earthRotate = document.querySelector('.earth-rotate')
let marsRotate = document.querySelector('.mars-rotate')
let jupiterRotate = document.querySelector('.jupiter-rotate')
let saturnRotate = document.querySelector('.saturn-rotate')
let uranusRotate = document.querySelector('.uranus-rotate')
let neptuneRotate = document.querySelector('.neptune-rotate')
let moonRotate = document.querySelector('.moon-rotate')

/* =========================              PLANET SLIDE MOTION           ======================== */


let mercurySlide = document.querySelector('.mercury-slide')
let venusSlide = document.querySelector('.venus-slide')
let earthSlide = document.querySelector('.earth-slide')
let marsSlide = document.querySelector('.mars-slide')
let jupiterSlide = document.querySelector('.jupiter-slide')
let saturnSlide = document.querySelector('.saturn-slide')
let uranusSlide = document.querySelector('.uranus-slide')
let neptuneSlide = document.querySelector('.neptune-slide')

/* ========================= Planet Shadow Motion ======================== */
let mercuryShadow = document.getElementById('mercury-shadow')
let venusShadow = document.getElementById('venus-shadow')
let earthShadow = document.getElementById('earth-shadow')
let marsShadow = document.getElementById('mars-shadow')
let jupiterShadow = document.getElementById('jupiter-shadow')
let saturnShadow = document.getElementById('saturn-shadow')
let uranusShadow = document.getElementById('uranus-shadow')
let neptuneShadow = document.getElementById('neptune-shadow')
let moonShadow = document.getElementById('moon-shadow')

/* ============ Star Background ========================== */
let stars = document.querySelector('.star-map')



/* =========== Setting Up Landing Page ====================== */
/* =========== Array of stars with randomized position, size and opacity  ====================== */



for (let i = 0; i < 700; i++) {
    let star = document.createElement('span');
    let randomSize = Math.ceil((Math.random() * 2));
    if (window.innerWidth < 600) {
        randomSize = Math.ceil((Math.random() * 1));
    }
    let width = window.innerWidth;
    let starPos = (Math.random() * width);
    let randomSpeed = 0
    while (randomSpeed < 200) {
        randomSpeed = Math.ceil((Math.random() * 100) * 25);
    }
    star.classList.add('star');
    star.style.opacity = (Math.random());
    star.style.top = (Math.random() * 100) + '%';
    star.style.left = starPos + 'px';
    star.style.width = randomSize + 'px';
    star.style.height = randomSize + 'px';
    stars.appendChild(star);
    star.style.animation = `cometMoveRight ${randomSpeed}s linear infinite`;
}

for (let i = 0; i < 200; i++) {
    let star = document.createElement('span');
    let randomSize = Math.ceil((Math.random() * 3));
    if (window.innerWidth < 600) {
        randomSize = (Math.random() * 1);
    }
    let width = window.innerWidth;
    let starPos = (Math.random() * width);
    star.classList.add('star');
    star.style.opacity = (Math.random());
    star.style.top = (Math.random() * 100) + '%';
    star.style.left = starPos + 'px';
    star.style.width = randomSize + 'px';
    star.style.height = randomSize + 'px';
    star.style.animation = `twinkle 7s linear infinite`;
    star.style.animationDelay = (Math.random() * 400) + 's';
    stars.appendChild(star);
}

for (let i = 0; i < 700; i++) {
    let star = document.createElement('span');
    let randomSize = Math.ceil((Math.random() * 2));
    if (window.innerWidth < 600) {
        randomSize = Math.ceil((Math.random() * 1));
    }
    let width = window.innerWidth;
    let starPos = (Math.random() * width) * -1;
    let randomSpeed = 0
    while (randomSpeed < 100) {
        randomSpeed = Math.ceil((Math.random() * 100) * 25);
    }

    star.classList.add('star');
    star.style.opacity = (Math.random());
    star.style.top = (Math.random() * 100) + '%';
    star.style.left = starPos + 'px';
    star.style.width = randomSize + 'px';
    star.style.height = randomSize + 'px';
    stars.appendChild(star);
    star.style.animation = `cometMoveRight ${randomSpeed}s linear infinite`;
}

/* ============== Shooting Star ================ */



setInterval(shootingStarLeft, 30000);

function shootingStarLeft() {
    let comet = document.createElement('span');
    let randomSpeed = (Math.random() * 2);
    comet.classList.add('asteroid');
    cometXPos = 105;
    cometYPos = (Math.random() * 100);
    comet.style.left = cometXPos + "vw";
    comet.style.top = cometYPos + "vh";
    stars.appendChild(comet)
}



/* =============== Initial Function for animating orbits =================== */
// window.addEventListener('load', orbit);


/* ======== This is the default orbit animation =============== */
function orbit() {

}

/* ==========         ORBIT CONTROLS            =============== */
let currentOrbit = 1;
let slideSpeed = 6;
let rotationSpeed = 12;

let orbitControlBtn = document.querySelector('.orbit-control-btn')
let orbitActive = false

let planetRotate = document.querySelectorAll('.rotate')
let planetSlide = document.querySelectorAll('.slide')
let shadowRotate = document.querySelectorAll('.shadow-rotate')
let planet = document.querySelectorAll('.planet')

orbitControlBtn.addEventListener("click", function () {
    toggleOrbit()
});



function toggleOrbit() {
    if (orbitActive) {
        orbitActive = false
        orbitControlBtn.innerHTML = '<h3>Resume Orbit</h3>';
        for (let i = 0; i < planetRotate.length; i++) {
            planetRotate[i].style.animationPlayState = "paused"
            planetSlide[i].style.animationPlayState = "paused"
            shadowRotate[i].style.animationPlayState = "paused"
            planet[i].style.animationPlayState = "paused"
        }
        moonRotate.style.animationPlayState = "paused"
        sun.style.animationPlayState = "paused"


    } else {
        orbitActive = true
        for (let i = 0; i < planetRotate.length; i++) {
            planetRotate[i].style.animationPlayState = "running"
            planetSlide[i].style.animationPlayState = "running"
            shadowRotate[i].style.animationPlayState = "running"
            planet[i].style.animationPlayState = "running"
        }
        orbitControlBtn.innerHTML = '<h3>Pause Orbit</h3>'
        moonRotate.style.animationPlayState = "running"
        sun.style.animationPlayState = "running"
    }

    console.log('click')
}

/* ====================        QUIZ         ================ */
let quizBtn = document.querySelector('.quiz-btn')
let quizModal = document.querySelector('.quiz-modal-bg')
let chosenQuestions = []
let answer = ''
let userGuess = ''
let userChosenAnswer = false
let currentQuestionNumber = 1;
let questionAnswered = false;
let isUserCorrect = false;
let quizQuestion = document.querySelector('.quiz-question')
let questionNumber = document.querySelector('.question-number')
let quizOptionBtn = document.querySelectorAll('.quiz-answer')
let optionA = document.querySelector('.a')
let optionB = document.querySelector('.b')
let optionC = document.querySelector('.c')
let optionD = document.querySelector('.d')
let quizAnswerBtn = document.querySelector('.quiz-answer-btn')
let rocketProgressLine = document.querySelector('.quiz-rocket-line')
let rocketProgress = document.querySelector('.quiz-rocket')
let progressNumber = 0
let quizModalContainer = document.querySelector('.quiz-modal')
let quizSun = document.querySelector('.quiz-sun')
let quizContent = document.querySelector('.quiz-content')
let quizProgressContainer = document.querySelector('.quiz-progress-container')
let quizDestination = document.querySelector('.quiz-destination')
let landingRocket = document.querySelector('.landing-rocket-container')
let winQuizStatement = document.querySelector('.win-quiz-statement')
let flame = document.querySelector('.flame')
let quizCLoseBtn = document.querySelector('.close-quiz-btn')
let quizWinBtn = document.querySelector('.quiz-win-btn')
let nextQuizBtn = document.querySelector('.next-quiz-btn')
let makemakeBtn = document.querySelector('.makemake-btn')






quizBtn.addEventListener('click', startQuiz)
quizAnswerBtn.addEventListener('click', nextQuestion)
quizCLoseBtn.addEventListener('click', closeQuiz)
quizWinBtn.addEventListener('click', closeQuizWin)
nextQuizBtn.addEventListener('click', nextQuiz)
makemakeBtn.addEventListener('click', makemakeBtnFunction)

function nextQuiz() {
    quizContent.classList.remove('full-opacity')
    quizProgressContainer.classList.remove('full-opacity')
    winQuizStatement.classList.remove('fade-in')
    quizContent.classList.remove('fade-out')
    quizProgressContainer.classList.remove('fade-out')
    quizDestination.classList.remove('move-up')
    landingRocket.classList.remove('move-down')
    flame.classList.remove('flame-animation')
    flame.classList.add('flame-on')
    quizSun.classList.remove('full-opacity')
    setTimeout(startQuiz, 500)

    if (categoryNum > 5) {
        setTimeout(function () {
            makemakeBtn.classList.remove('display-none')
            nextQuizBtn.classList.add('display-none');
        }, 12000)
    }

}
function makemakeBtnFunction() {
    quizContent.classList.remove('full-opacity')
    quizProgressContainer.classList.remove('full-opacity')
    winQuizStatement.classList.remove('fade-in')
    quizContent.classList.remove('fade-out')
    quizProgressContainer.classList.remove('fade-out')
    quizDestination.classList.remove('move-up')
    landingRocket.classList.remove('move-down')
    flame.classList.remove('flame-animation')
    flame.classList.add('flame-on')
    quizSun.classList.remove('full-opacity')
    categoryNum = 0
    category = planetTriviaList[categoryNum]
    closeQuiz()
    setTimeout(makemakeInteraction, 2500)
    for (let i = 0; i < planetDestination.length; ++i) {
        planetDestination[i].innerHTML = planetDestinationName[categoryNum]
    }
    setTimeout(function() {
        makemakeBtn.classList.add('display-none')
    nextQuizBtn.classList.remove('display-none');
    }, 2000)
    
}


function closeQuiz() {
    quizContent.classList.remove('full-opacity')
    quizProgressContainer.classList.remove('full-opacity')
    quizSun.classList.remove('full-opacity')
    quizModalContainer.classList.remove('quiz-modal-animation')


    setTimeout(function () {

        quizModal.classList.remove('full-opacity')
    }, 2000)
    setTimeout(function () {

        quizModal.classList.add('display-none')
    }, 5000)

}

function closeQuizWin() {
    quizContent.classList.remove('full-opacity')
    quizProgressContainer.classList.remove('full-opacity')
    quizSun.classList.remove('full-opacity')
    winQuizStatement.classList.remove('fade-in')
    quizContent.classList.remove('fade-out')
    quizProgressContainer.classList.remove('fade-out')
    quizDestination.classList.remove('move-up')
    landingRocket.classList.remove('move-down')
    flame.classList.remove('flame-animation')
    flame.classList.add('flame-on')
    setTimeout(function () {
        quizModalContainer.classList.remove('quiz-modal-animation')
    }, 1500)

    setTimeout(function () {

        quizModal.classList.remove('full-opacity')
    }, 3000)

    setTimeout(function () {
        flame.classList.remove('flame-on')
        quizModal.classList.add('display-none')
        quizSun.classList.remove('sun-move')
        flame.classList.remove('flame-on')
    }, 5000)
}



quizOptionBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        for (let i = 0; i < quizOptionBtn.length; ++i) {
            quizOptionBtn[i].classList.remove('active-answer')
        }
        this.classList.add('active-answer')
        userGuess = this.value
        userChosenAnswer = true;
    })

});
let planetTriviaList = ["general_trivia", "moon_trivia", "mars_trivia", "jupiter_trivia", "saturn_trivia", "uranus_trivia", "neptune_trivia"]

let categoryNum = 0
let category = planetTriviaList[categoryNum]

function startQuiz() {
    if (progressNumber >= 100) {
        progressNumber = 0
        rocketProgressLine.style.width = (progressNumber + 4) + '%'
        rocketProgress.style.left = progressNumber + '%'
    }
    quizModal.classList.remove('display-none')
    if (categoryNum > 6) {
        categoryNum = 0
        category = planetTriviaList[categoryNum]
    }


    
    setTimeout(function () {
        populateQuestion(category, categoryNum)
        quizModal.classList.add('full-opacity')
        quizModalContainer.classList.add('quiz-modal-animation')

    }, 10)

    setTimeout(function () {
        quizProgressContainer.classList.add('full-opacity')
        quizSun.classList.add('full-opacity')
        quizSun.classList.remove('sun-move')
        quizContent.classList.add('full-opacity')
    }, 2500)

}

let quizEarth = document.querySelector('.quiz-earth')
let quizMoon = document.querySelector('.quiz-moon')
let quizStarted = false
let quizLocationPlanet = ["./assets/planets/earth.png", "./assets/planets/moon.png", "./assets/planets/mars.png", "./assets/planets/jupiter.png", "./assets/planets/saturn.png", "./assets/planets/uranus.png", "./assets/planets/neptune.png"]
let quizDestinationPlanet = ["./assets/planets/moon.png", "./assets/planets/mars.png", "./assets/planets/jupiter.png", "./assets/planets/saturn.png", "./assets/planets/uranus.png", "./assets/planets/neptune.png", "./assets/planets/makemake.png"]
let planetDestinationName = ["The Moon", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "The Mystery Planet"]
let planetDestination = document.querySelectorAll('.planet-destination-name')
let quizAnimationPlanet = document.querySelector('.quiz-destination')
let quizAnimationDestinationName = document.querySelector('.quiz-animation-destination-name')


function populateQuestion(category, categoryNum) {
    for (let i = 0; i < quizOptionBtn.length; ++i) {
        quizOptionBtn[i].classList.remove('active-answer')
        quizOptionBtn[i].classList.remove('correct-answer')
        quizOptionBtn[i].classList.remove('wrong-answer')
    }
    rocketProgressLine.style.width = (progressNumber + 4) + '%'
    rocketProgress.style.left = progressNumber + '%'
    quizStarted = true
    quizEarth.src = quizLocationPlanet[categoryNum]
    quizMoon.src = quizDestinationPlanet[categoryNum]
    for (let i = 0; i < planetDestination.length; ++i) {
        planetDestination[i].innerHTML = planetDestinationName[categoryNum]
    }

    setTimeout(function () {
        quizAnimationPlanet.src = quizDestinationPlanet[categoryNum]
    }, 1500)

    let num = 0
    
    fetch('quiz.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {

            do {
                num = Math.floor(Math.random() * 14);
            } while (chosenQuestions.includes(num));
            chosenQuestions.push(num)
            quizQuestion.innerHTML = data.trivia[categoryNum][category][num].question
            optionA.innerHTML = '<h2>' + data.trivia[categoryNum][category][num].options.a + '</h2>'
            optionB.innerHTML = '<h2>' + data.trivia[categoryNum][category][num].options.b + '</h2>'
            optionC.innerHTML = '<h2>' + data.trivia[categoryNum][category][num].options.c + '</h2>'
            optionD.innerHTML = '<h2>' + data.trivia[categoryNum][category][num].options.d + '</h2>'
            answer = data.trivia[categoryNum][category][num].correct_answer
        })
        .catch(error => {
            console.error('There was an error', error)
        })

}



function nextQuestion() {

    if (!userChosenAnswer) {
        if (quizContent) {
            quizContent.classList.add('no-answer');
        }
    } else {
        if (!questionAnswered) {
            currentQuestionNumber += 1
            questionAnswered = true;
            quizContent.classList.remove('no-answer');
            if (userGuess == answer) {
                for (let i = 0; i < quizOptionBtn.length; ++i) {
                    if (quizOptionBtn[i].value == answer) {
                        quizOptionBtn[i].classList.remove('active-answer')
                        quizOptionBtn[i].classList.add('correct-answer')
                        progressNumber += 20
                        rocketProgressLine.style.width = (progressNumber + 4) + '%'
                        rocketProgress.style.left = progressNumber + '%'
                    }
                }
            } else {
                for (let i = 0; i < quizOptionBtn.length; ++i) {
                    if (quizOptionBtn[i].value == answer) {
                        quizOptionBtn[i].classList.remove('active-answer')
                        quizOptionBtn[i].classList.add('correct-answer')
                    } else if (quizOptionBtn[i].value == userGuess) {
                        quizOptionBtn[i].classList.remove('active-answer')
                        quizOptionBtn[i].classList.add('wrong-answer')
                    }
                }
            }
            if (progressNumber >= 100) {
                quizAnswerBtn.innerHTML = "<h2>Fly To " + planetDestinationName[categoryNum] + "</h2>"
            } else {
                quizAnswerBtn.innerHTML = "<h2>Next Question</h2>"
            }
        } else {
            quizContent.classList.remove('no-answer');
            if (progressNumber >= 100) {
                winningAnimation()
                for (let i = 0; i < quizOptionBtn.length; ++i) {
                    quizOptionBtn[i].classList.remove('active-answer')
                    quizOptionBtn[i].classList.remove('correct-answer')
                    quizOptionBtn[i].classList.remove('wrong-answer')
                }
            } else {
                for (let i = 0; i < quizOptionBtn.length; ++i) {
                    quizOptionBtn[i].classList.remove('active-answer')
                    quizOptionBtn[i].classList.remove('correct-answer')
                    quizOptionBtn[i].classList.remove('wrong-answer')
                }

                isUserCorrect = false
                questionAnswered = false
                quizAnswerBtn.innerHTML = "<h2>Submit Answer</h2>"
                populateQuestion(category, categoryNum)
            }
            userChosenAnswer = false;
        }
    }
    userGuess = ''
}

function winningAnimation() {
    quizAnimationDestinationName.innerHTML = planetDestinationName[categoryNum]
    if (categoryNum == 4 || categoryNum == 3) {
        quizDestination.style.width = '700px'
    } else {
        quizDestination.style.width = '550px'
    }
    if (categoryNum > 6) {
        categoryNum = 0;
    } else {
        categoryNum += 1;
    }
    
    chosenQuestions = []
    answer = ''
    userGuess = ''
    progressNumber = 0
    category = planetTriviaList[categoryNum]
    quizAnswerBtn.innerHTML = "<h2>Submit Answer</h2>"
    questionAnswered = false
    quizSun.classList.add('sun-move')
    quizContent.classList.add('fade-out')
    flame.classList.remove('flame-on')
    quizProgressContainer.classList.add('fade-out')
    quizDestination.classList.add('move-up')
    landingRocket.classList.add('move-down')
    flame.classList.add('flame-animation')
    setTimeout(function () {
        winQuizStatement.classList.add('fade-in');
    }, 5000);
    for (let i = 0; i < planetDestinationName.length; ++i) {
        planetDestination[i].innerHTML = planetDestinationName[categoryNum]
    }
}
/*======= This is a list of objects for all the planets, objects, moon and sun within the site. They contain the information that is used to populate the modal when the user interacts with the menu or inidivudal planet ========= */


const planets = [
    {
        name: "Mercury",
        info1: "<strong>Closest to the Sun:</strong> Mercury is the closest planet to the Sun in our solar system. It's only about 36 million miles (58 million kilometers) away!",
        info2: "<strong>Rapid Orbit:</strong> Mercury zooms around the Sun faster than any other planet. It completes an orbit roughly every 88 Earth days.",
        info3: "<strong>No Atmosphere:</strong> Unlike Earth, Mercury doesn't have much of an atmosphere. This means there's no air to breathe, and temperatures can be extremely hot during the day and very cold at night.",
        info4: "<strong>Extreme Temperatures:</strong> Because Mercury is so close to the Sun, its surface can get incredibly hot, reaching up to 800 degrees Fahrenheit (427 degrees Celsius). But at night, temperatures can plunge to around -290 degrees Fahrenheit (-179 degrees Celsius).",
        info5: "<strong>Rocky and Cratered:</strong> Mercury is a rocky planet, similar to Earth, Mars, and Venus. Its surface is covered in craters, which are scars from impacts with space rocks.",
        info6: "<strong>Tiny Planet, Big Core:</strong> Even though Mercury is smaller than many moons in our solar system, it has an enormous iron core that makes up about 60% of its mass.",
        info7: "<strong>Short Days, Long Years:</strong> A day on Mercury (from one sunrise to the next) is much longer than a day on Earth, lasting about 176 Earth days. However, a year on Mercury is only about 88 Earth days long!",
        info8: "<strong>No Moons or Rings:</strong> Mercury doesn't have any moons or rings like some other planets in our solar system. It's a bit of a loner in that regard!",
        info9: "<strong>Named After a Speedy Messenger:</strong> The planet Mercury is named after the ancient Roman messenger god, known for his speed. This name was chosen because of how quickly Mercury moves across the sky.",
        info10: "<strong>Visited by a Spacecraft:</strong> The only spacecraft to visit Mercury so far is NASA's MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) mission. It orbited the planet for over four years, providing a wealth of information about this hot, little world.",
        funFact: "Mercury has a crater named after Dr.Seuss",
        diameter: "4,879 km",
        orbit: "88 days",
        rotation: "1,408 hours",
        moons: "0",
        temp: "167&deg;C",
        link: "",
        image: "./assets/planets/mercury.png"
    },
    {
        name: "Venus",
        info1: "<strong>Morning and Evening Star:</strong> Venus is often called the 'Morning Star' or the 'Evening Star' because it's one of the brightest objects in the sky and can be seen just before sunrise or just after sunset.",
        info2: "<strong>Similar Size, Different World:</strong> Venus is similar in size to Earth, which is why it's often called Earth's 'sister planet.' However, it has a very different environment.",
        info3: "<strong>Extreme Greenhouse Effect:</strong> Venus has an incredibly thick atmosphere made mostly of carbon dioxide. This creates a powerful greenhouse effect, making Venus the hottest planet in our solar system, even hotter than Mercury!",
        info4: "<strong>A Day Longer Than a Year:</strong> Venus has an extremely slow rotation on its axis, taking about 243 Earth days to complete one rotation. This means a day on Venus (one spin) is actually longer than a year on Venus (orbit around the Sun), which only takes about 225 Earth days!",
        info5: "<strong>No Moons or Rings:</strong> Like Mercury, Venus doesn't have any moons or rings. It's a bit of a cosmic loner in that regard.",
        info6: "<strong>Volcanic Activity:</strong> Venus is thought to be a very volcanically active planet. It has more volcanoes than any other planet in our solar system. Some of these volcanoes might still be active!",
        info7: "<strong>Heavy Metal Surface:</strong> Venus' surface is rocky and covered with plains, mountains, and highland regions. It's also believed to have a lot of metal in its composition.",
        info8: "<strong>Runaway Greenhouse Effect:</strong> The thick atmosphere of Venus traps heat so effectively that its surface can reach temperatures of about 900 degrees Fahrenheit (475 degrees Celsius), which is hotter than the surface of Mercury!",
        info9: "<strong>Russian Landers:</strong> The Soviet Union's Venera program was the first to successfully send spacecraft to Venus. They landed a series of landers on Venus in the 1970s and early 1980s.",
        info10: "<strong>Named After the Goddess of Love:</strong> Venus is named after the Roman goddess of love and beauty. It's one of the five planets visible to the naked eye and has fascinated people for centuries.",
        childSource: "",
        funFact: "",
        diameter: "12,104 km",
        orbit: "225 days",
        rotation: "5,832 km",
        moons: "0",
        temp: "464&deg;C",
        link: "",
        image: "./assets/planets/venus.png"
    },
    {
        name: "Earth",
        info1: "<strong>Third Rock from the Sun:</strong> Earth is the third planet from the Sun in our solar system. It's just the right distance from the Sun to have the perfect conditions for life.",
        info2: "<strong>Blue Planet:</strong> Earth is often called the 'Blue Planet' because about 70% of its surface is covered in water. That's why it looks blue from space!",
        info3: "<strong>Home to Many Creatures:</strong> Earth is home to a huge variety of creatures, from tiny ants to enormous elephants, and from colorful fish to soaring birds. It's like a big, bustling house for all living things!",
        info4: "<strong>The Only Planet with Life:</strong> As far as we know, Earth is the only planet in our solar system that has life. That's what makes it so special!",
        info5: "<strong>Amazing Ecosystems:</strong> Earth has different kinds of environments called ecosystems. For example, a forest is an ecosystem, and so is a desert. Each one is like a unique neighborhood for plants and animals.",
        info6: "<strong>The Moon's Buddy:</strong> Earth has a special friend called the Moon. It's the only natural satellite we have, and it orbits around us. Sometimes, you can see it really bright in the night sky!",
        info7: "<strong>Earth's Layers:</strong> Just like an onion, Earth has layers. The outer layer is called the crust, then comes the mantle, and finally the core. It's like having a hidden treasure deep inside!",
        info8: "<strong>Tectonic Plates:</strong> The Earth's crust is divided into big pieces called tectonic plates. They float on the semi-molten mantle below. Sometimes they move, causing earthquakes and building mountains.",
        info9: "<strong>Weather Wonders:</strong> Earth's atmosphere is like a big blanket of air that surrounds the planet. It's what gives us weather - rain, snow, wind, and sunshine!",
        info10: "<strong>Beautiful Landforms:</strong> Earth has some amazing features like mountains, valleys, rivers, and oceans. The Grand Canyon, for example, is a gigantic gorge carved by the Colorado River. It's like nature's artwork!",
        childSource: "",
        funFact: "",
        diameter: "12,742 km",
        orbit: "365 days",
        rotation: "24 hours",
        moons: "1",
        temp: "15&deg;C",
        link: "",
        image: "./assets/planets/earth.png"
    },
    {
        name: "Mars",
        info1: "<strong>Fourth Planet from the Sun:</strong> Mars is the fourth planet from the Sun in our solar system, making it Earth's neighbor.",
        info2: "<strong>Nickname - The Red Planet:</strong> Mars gets its reddish color from iron oxide, which is like rust, covering its surface. This gives it a distinct and easily recognizable appearance.",
        info3: "<strong>Olympus Mons - The Tallest Volcano:</strong> Mars is home to the largest volcano in the solar system, called Olympus Mons. It's about 13.6 miles (22 kilometers) high, which is nearly three times the height of Mount Everest!",
        info4: "<strong>Valles Marineris - The Grand Canyon of Mars:</strong> Mars also hosts a canyon called Valles Marineris, which is about 2,500 miles (4,000 kilometers) long, making it much longer and deeper than the Grand Canyon on Earth.",
        info5: "<strong>Frozen Polar Caps:</strong> Just like Earth, Mars has polar ice caps, but they're made of water and carbon dioxide. During the winter, they expand, and in the summer, they shrink.",
        info6: "<strong>Thin Atmosphere:</strong> Mars has a very thin atmosphere, which is mostly carbon dioxide. This means there's not enough air for humans to breathe, and the surface pressure is only about 0.6% of Earth's.",
        info7: "<strong>Dusty Storms:</strong> Mars experiences enormous dust storms that can cover the entire planet and last for weeks or even months. These storms can sometimes make it difficult for spacecraft to communicate with Earth.",
        info8: "<strong>Possible Water on Mars:</strong> Scientists have found evidence suggesting that there might be water, either in liquid or frozen form, under the surface of Mars. This raises the possibility of life, past or present.",
        info9: "<strong>Mars Rovers:</strong> NASA has sent several rovers to Mars to explore its surface. Rovers like Curiosity and Perseverance have been busy studying rocks, soil, and even searching for signs of ancient life.",
        info10: "<strong>Inspiration for Stories:</strong> Mars has captured the imagination of people for centuries, and it's often featured in science fiction stories as a place where humans might one day explore and even colonize.",
        childSource: "",
        funFact: "",
        diameter: "6,779 km",
        orbit: "365 days",
        rotation: "24 hours",
        moons: "2",
        temp: "-65&deg;C",
        link: "",
        image: "./assets/planets/mars.png"
    },
    {
        name: "Jupiter",
        info1: "<strong>Giant of the Solar System:</strong> Jupiter is the largest planet in our solar system. It's so big that over 1,300 Earths could fit inside it!",
        info2: "<strong>King of Moons:</strong> Jupiter has a whopping 79 known moons, including the four largest: Io, Europa, Ganymede, and Callisto, which are known as the Galilean moons.",
        info3: "<strong>Famous Red Spot:</strong> Jupiter has a giant storm called the Great Red Spot. This storm has been raging for over 350 years and is so big that it could fit about three Earths inside it!",
        info4: "<strong>Rapid Rotation:</strong> Jupiter spins very quickly on its axis, completing one rotation in about 10 hours. This rapid rotation causes it to have a flattened shape at the poles.",
        info5: "<strong>Strongest Magnetic Field:</strong> Jupiter has the strongest magnetic field of any planet in our solar system. This magnetic field is over 20,000 times stronger than Earth's!",
        info6: "<strong>Gas Giant:</strong> Jupiter is mainly composed of gases like hydrogen and helium, similar to the Sun. It doesn't have a solid surface like Earth.",
        info7: "<strong>Rings of Jupiter:</strong> Although not as prominent as Saturn's rings, Jupiter does have a faint ring system made up of dust particles.",
        info8: "<strong>Famous Discoverer:</strong> Jupiter was named after the king of the Roman gods. It was one of the five planets visible to the naked eye and was known to ancient civilizations.",
        info9: "<strong>Exploration by Spacecraft:</strong> Several spacecraft have visited Jupiter, including the famous Galileo spacecraft and the more recent Juno mission, which is currently studying the planet in detail.",
        info10: "<strong>Mini Solar System:</strong> Jupiter is sometimes called a 'mini solar system' because it has its own set of planets, its moons. Ganymede, the largest moon in the solar system, is even bigger than the planet Mercury!",
        childSource: "",
        funFact: "",
        diameter: "139,820 km",
        orbit: "4,333 days",
        rotation: "10 hours",
        moons: "75",
        temp: "-110&deg;C",
        link: "",
        image: "./assets/planets/jupiter.png"
    },
    {
        name: "Saturn",
        info1: "<strong>Ringed Wonder:</strong> Saturn is famous for its spectacular ring system, which is made up of icy particles and dust. These rings make Saturn one of the most recognizable planets in the solar system.",
        info2: "<strong>Gorgeous Gases:</strong> Like Jupiter, Saturn is a gas giant, meaning it's mostly composed of hydrogen and helium. It doesn't have a solid surface like Earth.",
        info3: "<strong>Many, Many Rings:</strong> Saturn's rings are divided into thousands of smaller ringlets. They're not solid like a hula hoop but are made up of countless individual particles, each orbiting the planet.",
        info4: "<strong>Tilted Rings:</strong> Saturn's rings are tilted relative to the planet's equator. This gives them a unique appearance when viewed from different angles.",
        info5: "<strong>Moon Magnet:</strong> Saturn has more than 80 known moons, and its largest moon, Titan, is even bigger than the planet Mercury. Titan is the only moon in our solar system with a substantial atmosphere.",
        info6: "<strong>Fast Spinner:</strong> Saturn is a speedy spinner! It completes one rotation on its axis in about 10.5 hours. However, its equator spins faster than its poles, making it a bit squished.",
        info7: "<strong>Named After a Roman God:</strong> Saturn is named after the Roman god of agriculture and wealth. It's one of the five planets visible to the naked eye and was known to ancient civilizations.",
        info8: "<strong>Cassini-Huygens Mission:</strong> The Cassini spacecraft, along with the Huygens probe, spent over 13 years studying Saturn and its moons. It provided us with a wealth of information about this incredible planet.",
        info9: "<strong>Hexagonal Storm:</strong> Saturn's north pole has a strange, hexagonal-shaped storm that's been observed by the Cassini spacecraft. It's a massive, persistent cloud pattern.",
        info10: "<strong>Low Density:</strong> Despite being very large, Saturn is less dense than water. If you could find a bathtub big enough to hold it, Saturn would float!",
        childSource: "",
        funFact: "",
        diameter: "116,460 km",
        orbit: "10,759 days",
        rotation: "11 hours ",
        moons: "53",
        temp: "-140&deg;C",
        link: "",
        image: "./assets/planets/saturn.png"
    },
    {
        name: "Uranus",
        info1: "<strong>Tilted on Its Side:</strong> Uranus is unique among the planets because it spins on its side. This means its poles experience long periods of sunlight followed by long periods of darkness.",
        info2: "<strong>Coldest Planet in the Solar System:</strong> Uranus is the coldest planet in our solar system, even though it's not the farthest from the Sun. Its average temperature is about -224 degrees Celsius (-371 degrees Fahrenheit).",
        info3: "<strong>Ice Giant:</strong> Like Neptune, Uranus is classified as an ice giant, which means it's mostly made up of ices like water, ammonia, and methane, along with a small rocky core.",
        info4: "<strong>Faint Rings:</strong> Uranus has a system of rings, but they're much fainter and less prominent than Saturn's dazzling rings. They were first discovered in 1977.",
        info5: "<strong>Weird Magnetic Field:</strong> Uranus has a magnetic field that's tilted at an extreme angle - about 98 degrees from its axis of rotation! This is very different from the other planets.",
        info6: "<strong>27 Known Moons:</strong> As of my last knowledge update in September 2021, Uranus has 27 known moons. The five largest moons are Miranda, Ariel, Umbriel, Titania, and Oberon.",
        info7: "<strong>Named After a Greek God:</strong> Uranus is named after the ancient Greek god of the sky. It's the only planet named after a Greek god, while the others are named after Roman deities.",
        info8: "<strong>Voyager 2 Mission:</strong> The only spacecraft to have visited Uranus is NASA's Voyager 2. It flew by the planet in 1986 and provided valuable data about this mysterious world.",
        info9: "<strong>Retrograde Rotation of Moons:</strong> Most of Uranus's moons orbit in the opposite direction of the planet's rotation, which is quite unusual in our solar system.",
        info10: "<strong>Long, Long Years:</strong> A year on Uranus (the time it takes to orbit the Sun) is about 84 Earth years. This means that a person on Uranus would have a very long birthday cycle!",
        childSource: "",
        funFact: "",
        diameter: "50,724 km",
        orbit: "30,687 days",
        rotation: "17 hours",
        moons: "127",
        temp: "-195&deg;C",
        link: "",
        image: "./assets/planets/uranus.png"
    },
    {
        name: "Neptune",
        info1: "<strong>Eighth Planet from the Sun:</strong> Neptune is the eighth planet from the Sun in our solar system, making it the farthest known planet from our star.",
        info2: "<strong>Giant Ice Ball:</strong> Neptune is an ice giant, which means it's mostly made of icy substances like water, ammonia, and methane. It's so cold there that these elements are frozen solid!",
        info3: "<strong>Stormy Weather:</strong> Neptune is known for having the most violent and powerful storms in the solar system. The biggest storm on Neptune is called the Great Dark Spot.",
        info4: "<strong>Bluish Glow:</strong> Neptune appears a beautiful deep blue color because its atmosphere contains a lot of methane, which absorbs red light and reflects blue light.",
        info5: "<strong>Far, Far Away:</strong> Neptune is incredibly far from Earth. If you could travel at the speed of light, it would still take over four hours to reach Neptune from Earth!",
        info6: "<strong>Ringed World:</strong> Just like Saturn, Neptune has rings. However, they're not as bright and noticeable as Saturn's. They are made of dust and ice particles.",
        info7: "<strong>Triton:</strong> A Mysterious Moon: Neptune has a large moon called Triton. It's one of the coldest places in the solar system, even colder than Pluto! Triton is also unique because it orbits Neptune in the opposite direction of most moons.",
        info8: "<strong>Strong Winds:</strong> The winds on Neptune are incredibly fast, reaching speeds of up to 1,200 miles per hour (about 1,900 kilometers per hour). That's faster than the strongest hurricane winds on Earth!",
        info9: "<strong>Thirteen Hours of Daylight:</strong> A day on Neptune is about 16 hours and 6 minutes long, which is only a little longer than a day on Earth. However, a year on Neptune is much longer, lasting about 165 Earth years!",
        info10: "<strong>Unexplored and Mysterious:</strong> We've only visited Neptune once, when the spacecraft Voyager 2 flew by in 1989. There's still so much we don't know about this distant and fascinating planet!",
        funFact: "Surface winds can measure 2,100km/hr",
        diameter: "49,244 km",
        orbit: "60,190 days",
        rotation: "16 hours",
        moons: "14",
        temp: "-200&deg;C",
        link: "",
        image: "./assets/planets/neptune.png"
    }
    ,
    {
        name: "The Sun",
        info1: "<strong>Solar Sizzle:</strong> The Sun is so hot that you could cook a pizza in just a few seconds if it were close enough (though, I wouldn't recommend trying!).",
        info2: "<strong>Cosmic Ballerina:</strong> Despite its massive size, the Sun rotates at different rates at its equator and poles. This causes a sort of 'cosmic dance'!",
        info3: "<strong>Sunny Day Out:</strong> If you could drive a car to the Sun at a steady speed of 60 mph (97 km/h), it would take you about 193 years to get there. Don't forget the sunscreen!",
        info4: "<strong>Fluffy Clouds, Fiery Sun:</strong> Despite its appearance, the Sun isn't a solid object. It's a gigantic ball of super-hot gas that's held together by its own gravity!",
        info5: "<strong>Nuclear Disco Party:</strong> The Sun throws an enormous nuclear party every second, releasing energy equivalent to a trillion atomic bombs!",
        info6: "<strong>Ancient Star Wisdom:</strong> Every beam of sunlight you see is like a time-traveling messenger from the past. The light you're seeing now actually started its journey about 8 minutes ago!",
        info7: "<strong>Stellar Teenager:</strong> The Sun is like a cosmic teenager, having been around for about 4.6 billion years. Scientists estimate it has about 5 billion years of 'teenage' rebellion left before it transforms into a red giant!",
        info8: "<strong>Celestial DJ:</strong> The Sun emits a constant stream of charged particles, creating a sort of solar wind. This cosmic DJ sometimes causes mesmerizing light shows called auroras on Earth!",
        info9: "<strong>Sunstronaut Dreams:</strong> If you could stand on the Sun (which, for the record, you can't because it's not a solid surface), you'd weigh about 27 times what you do on Earth. That's like strapping a bunch of your friends onto your back!",
        info10: "<strong>Super Solar Sunflower:</strong> Plants on Earth need sunlight to grow, but the Sun is so powerful that it could grow a sunflower over 100 feet (30 meters) tall in just one month! Imagine a garden with those!",
        funFact: "",
        diameter: "1,400,000 km",
        orbit: "0 days",
        rotation: "27 days",
        moons: "0",
        temp: "5,600&deg;C",
        link: "",
        image: "./assets/planets/sun.png"
    }
    ,
    {
        name: "The Moon",
        info1: "<strong>Earth's Only Natural Satellite:</strong> The Moon is the only natural satellite of Earth. It's about 1/6th the size of Earth.",
        info2: "<strong>Close Neighbor:</strong> The Moon is relatively close to Earth, about 238,855 miles (384,400 kilometers) away on average.",
        info3: "<strong>Tidally Locked:</strong> The Moon is tidally locked to Earth, which means it always shows the same face to our planet. This is why we only see one side of the Moon from Earth.",
        info4: "<strong>No Atmosphere:</strong> Unlike Earth, the Moon doesn't have an atmosphere. This means there's no air to breathe, and it also leads to extreme temperature differences between day and night.",
        info5: "<strong>Moon Phases:</strong> The Moon goes through different phases during its orbit around Earth, including full moon, crescent moon, and new moon. These changes in appearance are due to the position of the Moon relative to the Sun and Earth.",
        info6: "<strong>Gravity Differences:</strong> The gravity on the Moon is much weaker than on Earth. If you were on the Moon, you would weigh about 1/6th of what you do on Earth.",
        info7: "<strong>Apollo Missions:</strong> Between 1969 and 1972, NASA's Apollo program sent astronauts to the Moon. The first manned mission, Apollo 11, resulted in Neil Armstrong and Buzz Aldrin becoming the first humans to walk on the Moon.",
        info8: "<strong>Ancient Surface:</strong> The Moon's surface is covered in craters, mountains, and plains. Many of the craters were formed by impacts from asteroids and comets billions of years ago.",
        info9: "<strong>Regolith:</strong> The Moon's surface is covered in a layer of loose, fragmented material called regolith. It's made up of small rocks, dust, and broken rock fragments.",
        info10: "<strong>Moonquakes:</strong> The Moon experiences moonquakes, which are caused by the gravitational interactions with Earth and the cooling and contracting of the lunar surface. These quakes can be much weaker than those on Earth.",
        childSource: "",
        funFact: "",
        diameter: " 3,475 km",
        orbit: "27 days",
        rotation: "27 days",
        moons: "0",
        temp: "-183 to 106&deg;C",
        link: "",
        image: ""
    }
    ,
    {
        name: "Asteroid",
        info1: "<strong>Rocky Celestial Bodies:</strong> Asteroids are small, rocky objects that orbit the Sun. They're like leftover building materials from the formation of the solar system.",
        info2: "<strong>Asteroid Belt:</strong> Most asteroids are found in the asteroid belt, a region located between the orbits of Mars and Jupiter. This area is like a busy highway of asteroids.",
        info3: "<strong>Various Sizes:</strong> Asteroids come in many different sizes, from small boulders a few meters across to massive bodies that can be hundreds of kilometers in diameter.",
        info4: "<strong>Not Round Like Planets:</strong> Unlike planets, asteroids don't have a spherical shape. They can be irregularly shaped and sometimes even resemble potatoes or lumpy rocks.",
        info5: "<strong>Close Approaches to Earth:</strong> Some asteroids come close to Earth, but most are not a threat to our planet. NASA keeps a watchful eye on any potentially hazardous asteroids.",
        info6: "<strong>Impact History:</strong> Asteroid impacts have played a significant role in shaping the history of our planet. The most famous impact was the one that led to the extinction of the dinosaurs about 66 million years ago.",
        info7: "<strong>Asteroid Moons:</strong> Some asteroids have their own small moons. These are like mini-satellites that orbit around the asteroid.",
        info8: "<strong>Carbonaceous Chondrites:</strong> Certain types of asteroids, known as carbonaceous chondrites, are believed to be some of the oldest and most primitive materials in the solar system.",
        info9: "<strong>Exploration Missions:</strong> Space agencies like NASA and JAXA have sent spacecraft to study and even land on asteroids. For example, NASA's OSIRIS-REx mission successfully collected a sample from the asteroid Bennu in 2020.",
        info10: "<strong>Potential Resources:</strong> Some scientists believe that asteroids could be mined for valuable resources like metals, water, and even rare minerals in the future. This idea is being explored for potential use in space exploration and industry. ",
        funFact: "Mercury has a crater named after Dr.Seuss",
        diameter: "<10 km",
        orbit: "Varies",
        rotation: "Nil",
        moons: "0",
        temp: "-50&deg;C",
        link: "",
        image: "./assets/planets/mercury.png"
    }

    ,
    {
        name: "Comet",
        info1: "<strong>Icy Visitors:</strong> Comets are icy bodies that originate from the outer regions of the solar system, often referred to as the Oort Cloud or the Kuiper Belt. They are sometimes called 'dirty snowballs.'",
        info2: "<strong>Orbiting the Sun:</strong> Just like planets, comets orbit the Sun, but their orbits can be highly elliptical, meaning they have elongated and stretched-out paths around the Sun.",
        info3: "<strong>Tails of Light:</strong> When a comet gets close to the Sun, it starts to heat up. This causes the icy nucleus to release gas and dust, creating a bright glowing coma (the head) and often two tails—a gas tail and a dust tail—pointing away from the Sun.",
        info4: "<strong>Nucleus:</strong> The solid core of a comet is called the nucleus. It's made up of ice, dust, and small rocks. Some comet nuclei are only a few kilometers wide, while others can be much larger.",
        info5: "<strong>Haley's Comet:</strong> One of the most famous comets is Halley's Comet, named after the astronomer Edmund Halley. It's visible from Earth about once every 76 years.",
        info6: "<strong>Long Period vs. Short Period Comets:</strong> Comets are categorized based on their orbital period. Long-period comets take a long time to orbit the Sun, sometimes thousands of years, while short-period comets have much shorter orbits.",
        info7: "<strong>Deep Impact:</strong> In 2005, NASA's Deep Impact mission intentionally crashed a probe into the comet Tempel 1. This impact allowed scientists to study the interior of the comet and learn more about its composition.",
        info8: "<strong>Kuiper Belt Comets:</strong> Some comets originate from the Kuiper Belt, a region of the solar system beyond Neptune. These are known as short-period comets.",
        info9: "<strong>Comet NEOWISE:</strong> In 2020, Comet NEOWISE became visible to the naked eye and put on a spectacular show for observers around the world.",
        info10: "<strong>Comet Hyakutake:</strong> In 1996, Comet Hyakutake made one of the closest approaches to Earth of any comet in centuries, allowing for stunning views from the ground.",
        funFact: "Mercury has a crater named after Dr.Seuss",
        diameter: "10 km",
        orbit: "Varies",
        rotation: "Nil",
        moons: "0",
        temp: "-230&deg;C",
        link: "",
        image: "./assets/planets/mercury.png"
    }

    ,
    {
        name: "Meteor",
        info1: "<strong>Falling Stars:</strong> Meteors, often referred to as 'shooting stars,'' are streaks of light that appear in the night sky when tiny particles called meteoroids burn up upon entering Earth's atmosphere.",
        info2: "<strong>Meteoroids, Meteors, and Meteorites:</strong> Before a meteor enters Earth's atmosphere, it's called a meteoroid. Once it burns up and creates a streak of light, it's called a meteor. If a meteoroid survives the journey and lands on Earth, it's called a meteorite.",
        info3: "<strong>Meteor Showers:</strong> Meteor showers occur when Earth passes through a trail of debris left behind by a comet or asteroid. This results in a higher-than-usual number of meteors appearing in the sky.",
        info4: "<strong>Size Matters:</strong> Meteoroids can range in size from tiny grains of sand to larger boulders. Most meteors are quite small, with the average size being about the same as a grain of rice.",
        info5: "<strong>Speedy Entry:</strong> Meteors can enter Earth's atmosphere at incredible speeds, ranging from 25,000 to 160,000 miles per hour (40,000 to 257,000 kilometers per hour).",
        info6: "<strong>Bright Flashes:</strong> The light produced by a meteor is due to the friction between the meteoroid and the atmosphere. This process generates intense heat and light, creating the bright streak we see.",
        info7: "<strong>Bolides:</strong> Some meteors, known as bolides, are exceptionally bright and can even explode in a brilliant burst of light called a fireball. The Chelyabinsk meteor in 2013 was a well-known example.",
        info8: "<strong>Meteor Craters:</strong> When a larger meteoroid or asteroid hits Earth and survives the journey through the atmosphere, it can create an impact crater. One famous example is the Meteor Crater in Arizona.",
        info9: "<strong>Space Debris Cleanup:</strong> The increasing amount of space debris, including defunct satellites and spent rocket stages, can sometimes lead to collisions with meteoroids, creating meteors. Efforts are being made to find ways to reduce space debris.",
        info10: "<strong>Meteorite Classification:</strong> Meteorites are classified into three main types: stony meteorites, iron meteorites, and stony-iron meteorites. Each type provides valuable information about the early solar system.",
        funFact: "",
        diameter: "<200 feet",
        orbit: "Varies",
        rotation: "Nil",
        moons: "0",
        temp: "2400&deg;C",
        link: "",
        image: "./assets/planets/mercury.png"
    }
    ,
    {
        name: "Satellite",
        info1: "<strong>Launched Since 1957:</strong> The first artificial satellite, Sputnik 1, was launched by the Soviet Union on October 4, 1957. This event marked the beginning of the space age.",
        info2: "<strong>Geostationary Orbit:</strong> Some satellites are placed in a geostationary orbit, which means they stay in the same position relative to Earth's surface. This is ideal for communication and weather satellites.",
        info3: "<strong>Global Positioning System (GPS):</strong> GPS satellites form a network of satellites that provide navigation and location information to devices on Earth. This technology is used for navigation in vehicles, smartphones, and many other applications.",
        info4: "<strong>Weather Monitoring:</strong> Weather satellites provide crucial data for meteorologists to monitor and predict weather patterns, track storms, and study climate change.",
        info5: "<strong>Earth Observation:</strong> Earth observation satellites capture images and data about our planet. This information is used for purposes like monitoring natural disasters, studying land use, and managing resources.",
        info6: "<strong>Communication Satellites:</strong> These satellites facilitate global communication by transmitting signals for television, radio, internet, and telephony.",
        info7: "<strong>Scientific Research:</strong> Satellites are used for scientific research in areas like astronomy, environmental science, and space exploration. Telescopes on satellites can capture images free from Earth's atmosphere interference.",
        info8: "<strong>Space Telescopes:</strong> Telescopes in space, like the Hubble Space Telescope, allow astronomers to observe distant galaxies, stars, and other celestial objects with unparalleled clarity.",
        info9: "<strong>Space Exploration:</strong> Satellites are crucial for exploring other planets and celestial bodies in our solar system. They relay information back to Earth and help us understand the cosmos.",
        info10: "<strong>Space Junk and Debris:</strong> Over time, defunct satellites and fragments from launches have created a cloud of space debris around Earth. This debris can pose a risk to operational satellites and spacecraft.",
        funFact: "",
        diameter: "",
        orbit: "",
        rotation: "",
        moons: "",
        temp: "",
        link: "",
        image: "./assets/planets/mercury.png"
    }
    ,
    {
        name: "Aliens",
        info1: "<strong>Exoplanets Abound:</strong> Scientists have discovered thousands of exoplanets, or planets outside our solar system, some of which are located in their star's 'habitable zone' where conditions might be right for life.",
        info2: "<strong>Extremophiles on Earth:</strong> Life on Earth can thrive in some incredibly harsh environments, such as deep-sea hydrothermal vents, acidic hot springs, and even within rocks. This suggests life might be able to survive in more extreme conditions than previously thought, which broadens the potential habitats for alien life.",
        info3: "<strong>SETI and Radio Signals:</strong> The Search for Extraterrestrial Intelligence (SETI) involves actively seeking signals or other signs of intelligent life in the universe. SETI projects listen for radio signals that could be indicative of technological civilizations.",
        info4: "<strong>Drake Equation:</strong> The Drake Equation is a formula developed by Dr. Frank Drake to estimate the number of civilizations in our galaxy with which we might be able to communicate. It takes into account factors like the rate of star formation and the fraction of stars with planets.",
        info5: "<strong>Fermi Paradox:</strong> Named after physicist Enrico Fermi, the Fermi Paradox poses the question of why, given the high probability of extraterrestrial civilizations, we have not yet detected any signs of them. This paradox sparks discussions and theories about potential explanations.",
        info6: "<strong>Mars Exploration:</strong> Mars has been a primary target in the search for life beyond Earth. Numerous missions, such as the Mars rovers and the upcoming James Webb Space Telescope, are designed to study the planet's geology, atmosphere, and potential habitability.",
        info7: "<strong>Europa and Enceladus:</strong> Moons of Jupiter (Europa) and Saturn (Enceladus) are thought to have subsurface oceans beneath their icy shells. These oceans are considered promising places to search for microbial life.",
        info8: "<strong>Astrobiology:</strong> Astrobiology is the scientific field that focuses on the study of life in the universe. It combines various disciplines like biology, astronomy, geology, and chemistry to investigate the potential for life beyond Earth.",
        info9: "<strong>Goldilocks Zone:</strong> The 'Goldilocks zone,' also known as the habitable zone, refers to the range of distances from a star where the conditions are just right for liquid water to exist on the surface of a planet. This is a key factor in the search for habitable exoplanets.",
        info10: "<strong>Kepler Space Telescope:</strong> The Kepler Space Telescope, launched by NASA, identified thousands of exoplanets by observing the slight dimming of starlight as planets pass in front of their host stars. This data has greatly expanded our understanding of planetary systems.",
        funFact: "Mercury has a crater named after Dr.Seuss",
        diameter: "4,879 km",
        orbit: "88 days",
        rotation: "1,408 hours",
        moons: "0",
        temp: "167&deg;C",
        link: "",
        image: "./assets/planets/mercury.png"
    }
    ,
    {
        name: "Astronauts",
        info1: "<strong></strong>Weightlessness Changes Your Body**: Spending extended periods in space can lead to a range of physiological changes. These include muscle and bone density loss, fluid shifts, and changes in vision.",
        info2: "<strong></strong>Vigorous Training**: Astronauts undergo rigorous training for years before they're selected for a mission. This includes physical fitness, technical skills, survival training, and simulations of space missions.",
        info3: "<strong></strong>International Collaboration**: The International Space Station (ISS) is one of the most remarkable examples of international cooperation. It's a joint project involving space agencies from the United States, Russia, Europe, Japan, and Canada.",
        info4: "<strong></strong>Space Food**: Astronauts eat specially prepared food that is packaged to last long periods and is easy to consume in a microgravity environment. Some dishes are dehydrated and need to be rehydrated before consumption.",
        info5: "<strong></strong>Seeing Earth from Space**: Many astronauts report experiencing a profound sense of awe and a shift in perspective after seeing Earth from space. The 'Overview Effect' is a term used to describe this feeling of interconnectedness and environmental awareness.",
        info6: "<strong></strong>Space Walks (EVA)**: Extravehicular Activity (EVA), or spacewalks, are one of the most challenging tasks for astronauts. They require extensive training and careful preparation to perform tasks outside the spacecraft or space station.",
        info7: "<strong></strong>Longest Spaceflight**: The longest consecutive time spent in space by a single person is 437 days, a record held by Russian astronaut Valeri Polyakov. He spent this time aboard the Mir space station from 1994 to 1995.",
        info8: "<strong></strong>*First Human in Space**: Yuri Gagarin, a Soviet cosmonaut, was the first human to journey into space. On April 12, 1961, he completed one orbit around Earth aboard the Vostok 1 spacecraft.",
        info9: "<strong></strong>Astronaut Selection Criteria**: Besides technical expertise, astronauts are selected based on their ability to work well in a team, handle stress, and adapt to challenging situations. They also undergo extensive medical examinations.",
        info10: "<strong></strong>Space Travel Age Range**: The age range for astronauts is quite varied. John Glenn, the oldest person to travel in space, was 77 when he flew on the Space Shuttle Discovery in 1998. The youngest astronaut, Gherman Titov, was only 25 years old when he orbited Earth in 1961.",
        funFact: "Mercury has a crater named after Dr.Seuss",
        diameter: "4,879 km",
        orbit: "88 days",
        rotation: "1,408 hours",
        moons: "0",
        temp: "167&deg;C",
        link: "",
        image: "./assets/planets/mercury.png"
    },
    {
        name: "Makemake",
        info1: "<strong>Distant Dwarf:</strong> Makemake is one of the largest known dwarf planets in our solar system, residing in the distant Kuiper Belt beyond the orbit of Neptune.",
        info2: "<strong>Moons:</strong> Unlike Jupiter, Makemake doesn't have any known moons orbiting around it.",
        info3: "<strong>Surface Composition:</strong> Makemake's surface is believed to be covered in frozen methane and possibly other volatile substances, giving it a reflective surface.",
        info4: "<strong>Orbital Period:</strong> It takes Makemake approximately 309 Earth years to complete one orbit around the Sun.",
        info5: "<strong>Discovery:</strong> Makemake was discovered in 2005 by a team led by astronomer Michael E.Brown and named officially by the International Astronomical Union(IAU) in 2008.",
        info6: "<strong>Similar Size to Pluto:</strong> Makemake's diameter is about two-thirds that of Pluto, another well-known dwarf planet in the Kuiper Belt.",
        info7: "<strong>Distinctive Name:</strong> The dwarf planet is named after Makemake, the creator god of the Rapa Nui people of Easter Island, a name chosen by its discoverers.",
        info8: "<strong>Cold Environment:</strong> Makemake's surface temperature is estimated to be around -240&deg;C (-400&deg;F), making it one of the coldest known objects in our solar system.",
        info9: "<strong>Low Albedo:</strong> Makemake has a low albedo, meaning it reflects only a small portion of the sunlight that strikes its surface, making it relatively dim compared to other objects in the Kuiper Belt.",
        info10: "<strong>Minimal Exploration:</strong> As of now, no spacecraft have been specifically sent to explore Makemake, so much of what we know about it comes from ground - based observations and studies.",
        diameter: "1,434 km",
        orbit: "112,897 days",
        rotation: "Unknown",
        moons: "0",
        temp: "-240&deg;C"
    }
];

let planetModal = document.querySelector('.full-width')
let planetName = document.getElementById('planet-name');
let planetInfo1 = document.getElementById('planet-info-one');
let planetInfo2 = document.getElementById('planet-info-two');
let planetInfo3 = document.getElementById('planet-info-three');
let planetInfo4 = document.getElementById('planet-info-four');
let planetInfo5 = document.getElementById('planet-info-five');
let planetInfo6 = document.getElementById('planet-info-six');
let planetInfo7 = document.getElementById('planet-info-seven');
let planetInfo8 = document.getElementById('planet-info-eight');
let planetInfo9 = document.getElementById('planet-info-nine');
let planetInfo10 = document.getElementById('planet-info-ten');

let planetDiameter = document.querySelectorAll('.planet-diameter');
let planetOrbit = document.querySelectorAll('.planet-orbit');
let planetRotation = document.querySelectorAll('.planet-rotation');
let planetMoons = document.querySelectorAll('.planet-moons');
let planetTemp = document.querySelectorAll('.planet-temp');
let planetImage = document.getElementById('planet-image');

let modalCloseBtn = document.getElementById('close-btn')


let n = 0;
let modalOpen = false;

modalCloseBtn.addEventListener('click', closeModal);

let planetImageContainerReal = document.getElementById('planet-image-container')

let planetHoverInfoContainer = document.getElementById('planet-hover')

let daysInOrbit = document.getElementById('days-in-orbit')
let orbitPlanetName = document.getElementById('orbit-planet-name')
let orbitPlanetImg = document.getElementById('orbit-planet-img')
let planetOrbitSpeed = document.getElementById('planet-orbit-speed')
let yearsInOrbit = document.getElementById('years-in-orbit')

let mercuryOrbitDay = 0
let mercuryOrbitYear = 0
let mercuryOrbitOn = false

let venusOrbitDay = 0
let venusOrbitYear = 0
let venusOrbitOn = false

let earthOrbitDay = 0
let earthOrbitYear = 0
let earthOrbitOn = false

let marsOrbitDay = 0
let marsOrbitYear = 0
let marsOrbitOn = false

let jupiterOrbitDay = 0
let jupiterOrbitYear = 0
let jupiterOrbitOn = false

let saturnOrbitDay = 0
let saturnOrbitYear = 0
let saturnOrbitOn = false

let neptuneOrbitDay = 0
let neptuneOrbitYear = 0
let neptuneOrbitOn = false

let uranusOrbitDay = 0
let uranusOrbitYear = 0
let uranusOrbitOn = false

let moonOrbitDay = 0
let moonOrbitYear = 0
let moonOrbitOn = false

let sunOrbitDay = 0
let sunOrbitYear = 0
let sunOrbitOn = false

setInterval(mercuryOrbitDays, 100)
setInterval(venusOrbitDays, 100)
setInterval(earthOrbitDays, 100)
setInterval(marsOrbitDays, 100)
setInterval(jupiterOrbitDays, 100)
setInterval(saturnOrbitDays, 100)
setInterval(uranusOrbitDays, 100)
setInterval(neptuneOrbitDays, 100)
setInterval(moonOrbitDays, 100)
setInterval(sunOrbitDays, 100)

function mercuryOrbitDays() {
    if (mercuryOrbitDay > 80) {
        mercuryOrbitDay = 0
        mercuryOrbitYear += 1
    } else {
        mercuryOrbitDay += 5
    }
    if (mercuryOrbitOn) {
        daysInOrbit.innerHTML = mercuryOrbitDay
        orbitPlanetName.innerHTML = "MERCURY"
        orbitPlanetImg.src = "./assets/planets/mercury.png"
        planetOrbitSpeed.innerHTML = "47.9"
        yearsInOrbit.innerHTML = mercuryOrbitYear
    }
}

function venusOrbitDays() {
    if (venusOrbitDay > 225) {
        venusOrbitDay = 0
        venusOrbitYear += 1
    } else {
        venusOrbitDay += 10
    }
    if (venusOrbitOn) {
        daysInOrbit.innerHTML = venusOrbitDay
        orbitPlanetName.innerHTML = "VENUS"
        orbitPlanetImg.src = "./assets/planets/venus.png"
        planetOrbitSpeed.innerHTML = "35"
        yearsInOrbit.innerHTML = venusOrbitYear
    }
}

function earthOrbitDays() {
    if (earthOrbitDay > 365) {
        earthOrbitDay = 0
        earthOrbitYear += 1
    } else {
        earthOrbitDay += 10
    }
    if (earthOrbitOn) {
        daysInOrbit.innerHTML = earthOrbitDay
        orbitPlanetName.innerHTML = "EARTH"
        orbitPlanetImg.src = "./assets/planets/earth.png"
        planetOrbitSpeed.innerHTML = "29.8"
        yearsInOrbit.innerHTML = earthOrbitYear
    }
}

function marsOrbitDays() {
    if (marsOrbitDay > 365) {
        marsOrbitDay = 0
        marsOrbitYear += 1
    } else {
        marsOrbitDay += 10
    }
    if (marsOrbitOn) {
        daysInOrbit.innerHTML = marsOrbitDay
        orbitPlanetName.innerHTML = "MARS"
        orbitPlanetImg.src = "./assets/planets/mars.png"
        planetOrbitSpeed.innerHTML = "24"
        yearsInOrbit.innerHTML = marsOrbitYear
    }
}

function jupiterOrbitDays() {
    if (jupiterOrbitDay > 4333) {
        jupiterOrbitDay = 0
        jupiterOrbitYear += 1
    } else {
        jupiterOrbitDay += 20
    }
    if (jupiterOrbitOn) {
        daysInOrbit.innerHTML = jupiterOrbitDay
        orbitPlanetName.innerHTML = "JUPITER"
        orbitPlanetImg.src = "./assets/planets/jupiter.png"
        planetOrbitSpeed.innerHTML = "13.1"
        yearsInOrbit.innerHTML = jupiterOrbitYear
    }
}

function saturnOrbitDays() {
    if (saturnOrbitDay > 10759) {
        saturnOrbitDay = 0
        saturnOrbitYear += 1
    } else {
        saturnOrbitDay += 40
    }
    if (saturnOrbitOn) {
        daysInOrbit.innerHTML = saturnOrbitDay
        orbitPlanetName.innerHTML = "SATURN"
        orbitPlanetImg.src = "./assets/planets/saturn.png"
        planetOrbitSpeed.innerHTML = "9.69"
        yearsInOrbit.innerHTML = saturnOrbitYear
    }
}

function neptuneOrbitDays() {
    if (neptuneOrbitDay > 60190) {
        neptuneOrbitDay = 0
        neptuneOrbitYear += 1
    } else {
        neptuneOrbitDay += 100
    }
    if (neptuneOrbitOn) {
        daysInOrbit.innerHTML = neptuneOrbitDay
        orbitPlanetName.innerHTML = "NEPTUNE"
        orbitPlanetImg.src = "./assets/planets/neptune.png"
        planetOrbitSpeed.innerHTML = "5.43"
        yearsInOrbit.innerHTML = neptuneOrbitYear
    }
}

function uranusOrbitDays() {
    if (uranusOrbitDay > 30875) {
        uranusOrbitDay = 0
        uranusOrbitYear += 1
    } else {
        uranusOrbitDay += 5
    }
    if (uranusOrbitOn) {
        daysInOrbit.innerHTML = uranusOrbitDay
        orbitPlanetName.innerHTML = "URANUS"
        orbitPlanetImg.src = "./assets/planets/uranus.png"
        planetOrbitSpeed.innerHTML = "6.81"
        yearsInOrbit.innerHTML = uranusOrbitYear
    }
}

function moonOrbitDays() {
    if (moonOrbitDay > 30875) {
        moonOrbitDay = 0
        moonOrbitYear += 1
    } else {
        moonOrbitDay += 5
    }
    if (moonOrbitOn) {
        daysInOrbit.innerHTML = moonOrbitDay
        orbitPlanetName.innerHTML = "MOON"
        orbitPlanetImg.src = "./assets/planets/moon.png"
        planetOrbitSpeed.innerHTML = "1.02"
        yearsInOrbit.innerHTML = moonOrbitYear
    }
}

function sunOrbitDays() {
    if (sunOrbitDay > 30875) {
        sunOrbitDay = 0
        sunOrbitYear += 1
    } else {
        sunOrbitDay += 5
    }
    if (sunOrbitOn) {
        daysInOrbit.innerHTML = sunOrbitDay
        orbitPlanetName.innerHTML = "SUN"
        orbitPlanetImg.src = "./assets/planets/sun.png"
        planetOrbitSpeed.innerHTML = "6.81"
        yearsInOrbit.innerHTML = sunOrbitYear
    }
}


/*============== Event listeners for menu items and the planets themselves. Includes click interactions and hover interactions  ==================*/



earth.addEventListener("click", earthInteraction);
mercury.addEventListener('click', mercuryInteraction);
venus.addEventListener('click', venusInteraction);
mars.addEventListener('click', marsInteraction);
jupiter.addEventListener('click', jupiterInteraction);
saturn.addEventListener('click', saturnInteraction);
uranus.addEventListener('click', uranusInteraction);
neptune.addEventListener('click', neptuneInteraction);
sun.addEventListener('click', sunInteraction);

earthMenuBtn.addEventListener("click", earthInteraction);
earthMobileMenuBtn.addEventListener("click", earthInteraction);
earthMenuBtn.addEventListener("mouseover", earthHover)
earthMenuBtn.addEventListener("mouseout", closeHover)
earth.addEventListener("mouseover", earthHover)
earth.addEventListener("mouseout", closeHover)

mercuryMenuBtn.addEventListener('click', mercuryInteraction);
mercuryMobileMenuBtn.addEventListener('click', mercuryInteraction);
mercuryMenuBtn.addEventListener("mouseover", mercuryHover)
mercuryMenuBtn.addEventListener("mouseout", closeHover)
mercury.addEventListener("mouseover", mercuryHover)
mercury.addEventListener("mouseout", closeHover)

venusMenuBtn.addEventListener('click', venusInteraction);
venusMobileMenuBtn.addEventListener('click', venusInteraction);
venusMenuBtn.addEventListener("mouseover", venusHover)
venusMenuBtn.addEventListener("mouseout", closeHover)
venus.addEventListener("mouseover", venusHover)
venus.addEventListener("mouseout", closeHover)

marsMenuBtn.addEventListener('click', marsInteraction);
marsMobileMenuBtn.addEventListener('click', marsInteraction);
marsMenuBtn.addEventListener("mouseover", marsHover)
marsMenuBtn.addEventListener("mouseout", closeHover)
mars.addEventListener("mouseover", marsHover)
mars.addEventListener("mouseout", closeHover)

jupiterMenuBtn.addEventListener('click', jupiterInteraction);
jupiterMobileMenuBtn.addEventListener('click', jupiterInteraction);
jupiterMenuBtn.addEventListener("mouseover", jupiterHover)
jupiterMenuBtn.addEventListener("mouseout", closeHover)
jupiter.addEventListener("mouseover", jupiterHover)
jupiter.addEventListener("mouseout", closeHover)

saturnMenuBtn.addEventListener('click', saturnInteraction);
saturnMobileMenuBtn.addEventListener('click', saturnInteraction);
saturnMenuBtn.addEventListener("mouseover", saturnHover)
saturnMenuBtn.addEventListener("mouseout", closeHover)
saturn.addEventListener("mouseover", saturnHover)
saturn.addEventListener("mouseout", closeHover)

uranusMenuBtn.addEventListener('click', uranusInteraction);
uranusMobileMenuBtn.addEventListener('click', uranusInteraction);
uranusMenuBtn.addEventListener("mouseover", uranusHover)
uranusMenuBtn.addEventListener("mouseout", closeHover)
uranus.addEventListener("mouseover", uranusHover)
uranus.addEventListener("mouseout", closeHover)

neptuneMenuBtn.addEventListener('click', neptuneInteraction);
neptuneMobileMenuBtn.addEventListener('click', neptuneInteraction);
neptuneMenuBtn.addEventListener("mouseover", neptuneHover)
neptuneMenuBtn.addEventListener("mouseout", closeHover)
neptune.addEventListener("mouseover", neptuneHover)
neptune.addEventListener("mouseout", closeHover)

sunMenuBtn.addEventListener('click', sunInteraction);
sunMobileMenuBtn.addEventListener('click', sunInteraction);
sunMenuBtn.addEventListener("mouseover", sunHover)
sunMenuBtn.addEventListener("mouseout", closeHover)
sun.addEventListener("mouseover", sunHover)
sun.addEventListener("mouseout", closeHover)

moonMenuBtn.addEventListener('click', moonInteraction);
moonMobileMenuBtn.addEventListener('click', moonInteraction);
moonMenuBtn.addEventListener("mouseover", moonHover)
moonMenuBtn.addEventListener("mouseout", closeHover)
moon.addEventListener("mouseover", moonHover)
moon.addEventListener("mouseout", closeHover)


cometMenuBtn.addEventListener('click', cometInteraction);
asteroidMenuBtn.addEventListener('click', asteroidInteraction);
meteorMenuBtn.addEventListener('click', meteorInteraction);
satelliteMenuBtn.addEventListener('click', satelliteInteraction);
alienMenuBtn.addEventListener('click', alienInteraction);

// let childBtn = document.getElementById('child-toggle')
// let adultBtn = document.getElementById('adult-toggle')
let fillBar = document.querySelector('.fill-bar-container')
let expandPlanetBtn = document.getElementById('expand-planet-btn')
let infoToggle = document.querySelector('.info-toggle')
let planetExpandCloseContainer = document.getElementById('planet-expand-close-btn')
let planetExpandCloseBtn = document.getElementById('planet-close-btn')

function closeModal() {
    // childBtn.classList.add('active-page')
    // adultBtn.classList.remove('active-page')
    setTimeout(function () {
        planetModalContainer.classList.remove("planet-width-animation");
    }, 2000)

    setTimeout(function () {
        planetModalContainer.classList.remove("planet-height-animation");
        bottomContainer.classList.remove('fade-in')
    }, 100)

    setTimeout(function () {
        planetModal.classList.remove('full-width-animation')

        n = 0;
        while (planetImageContainerReal.firstChild) {
            planetImageContainerReal.removeChild(planetImageContainerReal.firstChild);
        }
    }, 3000)
    setTimeout(function () {
        planetModal.classList.add("hidden")
    }, 3500)

}



expandPlanetBtn.addEventListener('click', expandPlanet)
// adultBtn.addEventListener('click', toggleAdult);
// childBtn.addEventListener('click', toggleChild);
planetExpandCloseBtn.addEventListener('click', closePlanet)

function closeHover() {
    if (innerWidth > 600) {
        planetHoverInfoContainer.classList.toggle('planet-hover-info-container-move')
    }
    mercuryOrbitOn = false
    venusOrbitOn = false
    earthOrbitOn = false
    marsOrbitOn = false
    jupiterOrbitOn = false
    saturnOrbitOn = false
    uranusOrbitOn = false
    neptuneOrbitOn = false
    moonOrbitOn = false
    sunOrbitOn = false
}

function planetHoverOpen() {
    if (innerWidth > 600) {
        planetHoverInfoContainer.classList.toggle('planet-hover-info-container-move')
    }
}

function mercuryHover() {
    planetHoverOpen()
    mercuryOrbitOn = true
}

function venusHover() {
    planetHoverOpen()
    venusOrbitOn = true
}

function earthHover() {
    planetHoverOpen()
    earthOrbitOn = true
}

function marsHover() {
    planetHoverOpen()
    marsOrbitOn = true
}
function jupiterHover() {
    planetHoverOpen()
    jupiterOrbitOn = true
}
function saturnHover() {
    planetHoverOpen()
    saturnOrbitOn = true
}
function neptuneHover() {
    planetHoverOpen()
    neptuneOrbitOn = true
}
function uranusHover() {
    planetHoverOpen()
    uranusOrbitOn = true
}
function sunHover() {
    planetHoverOpen()
    sunOrbitOn = true
}
function moonHover() {
    planetHoverOpen()
    moonOrbitOn = true
}

/*============ Functions to expand/close 3D planet to full screen ===============*/
let planetInfoAnimation = document.querySelector('.planet-info-container')
function expandPlanet() {
    setTimeout(function () {
        planetImageContainerReal.classList.remove('real-fade-out')
        planetImageContainerReal.classList.add('expand-real-planet')

    }, 1000)

    infoToggle.classList.add('display-none')
    bottomContainer.classList.remove('fade-in')
    planetImageContainerReal.classList.add('real-fade-out')

    planetExpandCloseContainer.classList.remove('display-none');
    // stars.style.zIndex = '50'

    planetInfoAnimation.classList.add('planet-info-opacity-animation')
}

function closePlanet() {
    planetImageContainerReal.classList.add('real-fade-exit')

    setTimeout(function () {
        planetImageContainerReal.classList.add('real-planet-opacity')
        infoToggle.classList.remove('display-none')
        planetExpandCloseContainer.classList.add('display-none')
        planetImageContainerReal.classList.remove('expand-real-planet')
        planetInfoAnimation.classList.remove('planet-info-opacity-animation')
        bottomContainer.classList.add('fade-in')
        planetImageContainerReal.classList.remove('real-fade-out')
        planetImageContainerReal.classList.remove('real-fade-exit')

    }, 1000)


}



function mercuryInteraction() {
    n += 0
    populatePlanet()
}

function venusInteraction() {
    n += 1
    populatePlanet()
}

function earthInteraction() {

    n += 2;
    populatePlanet();
}

function marsInteraction() {
    n += 3;
    populatePlanet();
}

function jupiterInteraction() {
    n += 4
    populatePlanet()
}

function saturnInteraction() {
    n += 5
    populatePlanet()
}

function uranusInteraction() {
    n += 6
    populatePlanet()
}

function neptuneInteraction() {
    n += 7;
    populatePlanet();
}

function sunInteraction() {
    n += 8;
    populatePlanet();
}

function moonInteraction() {
    n += 9;
    populatePlanet();
}

function asteroidInteraction() {
    n += 10;
    populatePlanet();
}

function cometInteraction() {
    n += 11;
    populatePlanet();
}

function meteorInteraction() {
    n += 12;
    populatePlanet();
}

function satelliteInteraction() {
    n += 13;
    populatePlanet();
}

function alienInteraction() {
    n += 14;
    populatePlanet();
}

function makemakeInteraction() {
    n += 16;
    populatePlanet();
}



/* ====== pulls in info from planet list and populates modal with appropriate information ========= */
let planetModalContainer = document.querySelector('.planet-modal')
let bottomContainer = document.querySelector('.bottom-container')

function populatePlanet() {
    expandPlanetBtn.innerHTML = "<h3> Explore " + planets[n].name + "</h3>"
    planetModal.classList.remove("hidden");
    planetModal.classList.add('full-width-animation')

    planetName.innerHTML = planets[n].name;
    planetInfo1.innerHTML = planets[n].info1;
    planetInfo2.innerHTML = planets[n].info2;
    planetInfo3.innerHTML = planets[n].info3;
    planetInfo4.innerHTML = planets[n].info4;
    planetInfo5.innerHTML = planets[n].info5;
    planetInfo6.innerHTML = planets[n].info6;
    planetInfo7.innerHTML = planets[n].info7;
    planetInfo8.innerHTML = planets[n].info8;
    planetInfo9.innerHTML = planets[n].info9;
    planetInfo10.innerHTML = planets[n].info10;
    for (let i = 0; i < 2; ++i) {
        planetDiameter[i].innerHTML = planets[n].diameter;
        planetOrbit[i].innerHTML = planets[n].orbit;
        planetRotation[i].innerHTML = planets[n].rotation;
        planetMoons[i].innerHTML = planets[n].moons;
        planetTemp[i].innerHTML = planets[n].temp;
    }

    setTimeout(function () {
        planetModalContainer.classList.add("planet-width-animation");
    }, 10)
    setTimeout(function () {
        planetModalContainer.classList.add("planet-height-animation");
    }, 1500)
    setTimeout(function () {
        modalOpen = true
    }, 1000)

    setTimeout(function () {
        bottomContainer.classList.add('fade-in')
    }, 2500)

}

function populateAdultInfo() {
    planetName.innerHTML = planets[n].name;
    planetInfo1.innerHTML = planets[n].info6;
    planetInfo2.innerHTML = planets[n].info7;
    planetInfo3.innerHTML = planets[n].info8;
    planetInfo4.innerHTML = planets[n].info9;
    planetInfo5.innerHTML = planets[n].info10;
    planetDiameter.innerHTML = planets[n].diameter;
    planetOrbit.innerHTML = planets[n].orbit;
    planetRotation.innerHTML = planets[n].rotation;
    planetMoons.innerHTML = planets[n].moons;
    planetTemp.innerHTML = planets[n].temp;
    // planetImage.src = planets[n].image;
    setTimeout(function () {
        modalOpen = true
    }, 1000)

}



