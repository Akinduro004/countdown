function trial(){
    const date=document.getElementById("end-date").value;
      const end_Date=new Date(date);
   const current_date= new Date();
  
      const timeDifference = end_Date.getTime() - current_date.getTime();
  
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
  
      
      document.getElementById("day").innerHTML=days;
      document.getElementById("hour").innerHTML=hours;
      document.getElementById("min").innerHTML=minutes;
      document.getElementById("sec").innerHTML=seconds;
  
      setInterval(trial, 1000);
  }