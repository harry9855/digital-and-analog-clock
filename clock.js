setInterval(() => {
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    motime=d.getMonth() +1;
    datime=d.getDate()+1;
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    morotation=30*motime;
    darotation=12*datime;



    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    day.style.transform=`rotate(${darotation}deg)`;
    month.style.transform=`rotate(${morotation}deg)`;
}, 1000);