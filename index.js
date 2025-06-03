// let score={wins:0,loses:0,ties:0};
      const score = JSON.parse(localStorage.getItem('score'))||{wins:0,loses:0,ties:0};


      
      displayYourResult();
      displayResult();
      displayOnWebPage();

      document.body.addEventListener('keydown',(event)=>{
            if(event.key === 'r'){
                  play('rock');
            }
            else if(event.key === 's'){
                  play('scissors');
            }
            else if(event.key === 'p'){
                  play('paper');
            }
      });
     
     
      function play(user){
      let computer = ' ';
      var n = Math.random();
      let result = '';
      

      if(n <= 0.3){
        computer="rock";
      }
      else if(n > 0.3 && n<= 0.7){
        computer = "paper";
      }
      else{
        computer="scissors";
      }

      

    
    //   if(user == 'rock'){
    //   if(computer == 'scissor'){
    //     result = 'win';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else if(computer == 'paper'){
    //     result = 'lose';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else{
    //     result = 'tie';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    // }

    // else if(user == 'paper'){
    //   if(computer == 'scissor'){
    //     result = 'lose';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else if(computer == 'rock'){
    //     result = 'win';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else{
    //     result = 'tie';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    // }
    // else{
    //     if(computer == 'scissor'){
    //       result = 'tie';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else if(computer == 'rock'){
    //     result = 'lose';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else{
    //     result = 'win';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    // }
    if(user == computer){
      score.ties++;
      result = 'tie';
    }
    else if((user == 'rock' && computer == 'scissors') || (user == 'paper' && computer == 'rock')||(user == 'scissors' && computer =='paper')){
      score.wins++;
      result = ' you win';
    }
    else{
      score.loses++;
      result = 'you lose';
    }

    // localStorage.setItem('score',JSON.stringify(score));
    localStorage.setItem('score',JSON.stringify(score));
    
    displayYourResult(result);
    displayResult(user,computer);
    displayOnWebPage();

    alert(`your result: ${result}\n you are ${user} computer is ${computer}\n your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`)


  };
  function displayYourResult(result){
        document.querySelector('.result').innerHTML=`${result}`;
   }
    function displayResult(user,computer){
        document.querySelector('.moveplayed').innerHTML = `you are <img src="images/${user}.png" class="move-icon"> 
        <img class="move-icon" src="images/${computer}.png"> is computer`;
     }

  function displayOnWebPage(){
         document.querySelector('.scoree').innerHTML=`wins:${score.wins} loses:${score.loses} ties:${score.ties}`;
    }
    }
  function reset() {
  // Step 1: Inject the confirmation message with buttons
  const questionBox = document.querySelector('.question');
  questionBox.innerHTML = `
    Are you sure you want to reset the score?
    <button class="yes">Yes</button>
    <button class="no">No</button>
  `;

  // Step 2: Wait until the DOM updates and then attach listeners
  setTimeout(() => {
    const yesBtn = document.querySelector('.yes');
    const noBtn = document.querySelector('.no');

    yesBtn.addEventListener('click', () => {
      score.wins = 0;
      score.loses = 0;
      score.ties = 0;
      localStorage.removeItem('score');

      questionBox.textContent = '';
      // You can also update your score display UI here
    });

    noBtn.addEventListener('click', () => {
      questionBox.textContent = '';
    });
  }, 0);
}

   displayYourResult('');
    displayResult('', '');
    displayOnWebPage();


    let var2 = Math.random();
    if(var2 < 0.3){
      computer2 = 'rock';
    }
    else if(var2 >= 0.3 && var2 < 0.7){
      computer2 = 'paper';
    }

    else{
      computer2 = 'scissors';
    }

    function play2(user){
      let computer = ' ';
      var n = Math.random();
      let result = '';
      

      if(n <= 0.3){
        computer="rock";
      }
      else if(n > 0.3 && n<= 0.7){
        computer = "paper";
      }
      else{
        computer="scissors";
      }

      

    
    //   if(user == 'rock'){
    //   if(computer == 'scissor'){
    //     result = 'win';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else if(computer == 'paper'){
    //     result = 'lose';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else{
    //     result = 'tie';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    // }

    // else if(user == 'paper'){
    //   if(computer == 'scissor'){
    //     result = 'lose';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else if(computer == 'rock'){
    //     result = 'win';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else{
    //     result = 'tie';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    // }
    // else{
    //     if(computer == 'scissor'){
    //       result = 'tie';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else if(computer == 'rock'){
    //     result = 'lose';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    //   else{
    //     result = 'win';
    //     alert(`you ${result} computer is ${computer} your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`);
    //   }
    // }
    if(user == computer){
      score.ties++;
      result = 'tie';
    }
    else if((user == 'rock' && computer == 'scissors') || (user == 'paper' && computer == 'rock')||(user == 'scissors' && computer =='paper')){
      score.wins++;
      result = ' you win';
    }
    else{
      score.loses++;
      result = 'you lose';
    }

    // localStorage.setItem('score',JSON.stringify(score));
    localStorage.setItem('score',JSON.stringify(score));
    
    displayYourResult(result);
    displayResult(user,computer);
    displayOnWebPage();

    // alert(`your result: ${result}\n you are ${user} computer is ${computer}\n your score:\n wins:${score.wins} loses:${score.loses} ties:${score.ties}`)


  };
    
    let intervalId;
    function autoplay(){
      console.log("Playing..");
    intervalId = setInterval(()=>play2(computer2),3000);
    }
    function autostop(){
      clearInterval(intervalId);
    }
    let isPlaying=false;

    function autoPlayToggle(be){
      if(!isPlaying){
        autoplay();
        be.textContent = "Stop Autoplaying";}
      else{
        autostop();
        be.textContent = "AutoPlay";
      }

      isPlaying = !isPlaying;
    };




  
