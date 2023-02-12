let pdate = document.querySelector('.date');
    let ptime = document.querySelector('.time');
    let pday = document.querySelector('.day');
    let pdorn = document.querySelector('.dorn');
    setInterval(() => {
        let days =["Snday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
        let time=new Date();
        let hour=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        let date=time.getDate();
        let day=days[time.getDay()];
        let dorn;
        let aorp=hour>12 ? dorn='Pm' : dorn="Am";
        pdate.textContent=date;
        pday.textContent=day;
        pdorn.textContent=dorn;
        ptime.textContent=Math.abs(12-hour)+":"+minutes+":"+seconds;
    },1000);
