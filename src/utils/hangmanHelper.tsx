
  export function checkWin(correct:any, wrong:any, word:any) {
    let status = "win";
  
    // Check for win
    word.split("").forEach((letter:any) => {
      if (!correct.includes(letter)) {
        status = "";
      }
    });
  
    // Check for lose
    if (wrong.length === 6) status = "lose";
  
    return status;
  }