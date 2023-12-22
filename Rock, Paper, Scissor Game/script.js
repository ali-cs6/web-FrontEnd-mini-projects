let userScore = 0;
let compScore = 0;
let userWin = true;
const msg = document.querySelector('#msg')
const choices = document.querySelectorAll('.choice');
let userScoreDisplay = document.querySelector('#userScore');
let compScoreDisplay = document.querySelector('#compScore');

const darwGame = (userChoice, compChoice)=> {
    msg.innerText = `its a Draw! Your ${userChoice} = Generated ${compChoice}`;
    msg.style.backgroundColor = 'grey';
    userWin = true;
}

const compGeneratedChoice = ()=> {
    const options = ["rock", "paper", "scissor"];
    const randChoice = Math.floor(Math.random()*3);
    return options[randChoice];
}

const showWinner = (userWin, userChoice, compChoice)=> {
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = 'green';
        userScore++;
        userScoreDisplay.innerText = userScore;
    } else{
        msg.innerText = `You lose! your ${userChoice} beaten by ${compChoice}`;
        msg.style.backgroundColor = 'red';
        compScore++;
        compScoreDisplay.innerText = compScore;
    }
}


const playGame = (userChoice)=> {
    const compChoice = compGeneratedChoice();
    if(userChoice === compChoice){
        darwGame(userChoice, compChoice);
    } else {
        userWin = true;
        if(userChoice === 'rock'){
            //comp eaither selected paper or scissor
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            //comp either slctd rock or scissor
            userWin = compChoice === 'rock'? true : false;
        }else { //user slctd scissor
            //comp either selctd rock or paper
            userWin = compChoice === 'rock'? false : true;
            
        }
    }
    showWinner(userWin, userChoice, compChoice);
}

choices.forEach((choice)=> {   //for the choices user selelct
    choice.addEventListener('click', ()=> {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})