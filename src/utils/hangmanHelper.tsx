
  export function checkWin(correct:any, wrong:any, word:any) {
    let status = "win";
  
    // Check for win
    word.split("").forEach((letter:any) => {
      if (!correct.includes(letter)) {
        status = "";
      }
    });
  
    // Check for lose
    if (wrong.length === 7) status = "lose";
  
    return status;
  }