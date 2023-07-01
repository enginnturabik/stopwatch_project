let time_display =document.getElementById("time_display");
let start =document.getElementById("start-button");
let reset =document.getElementById("Reset-button");
let pause =document.getElementById("Pause-button");

let start_time=0;
let elapsed_time=0;
let current_time=0;
let paused=true;
let interval_id;
let hours=0;
let minutes=0;
let seconds=0;
function update_time()
{
    elapsed_time=Date.now() - start_time;

    seconds=Math.floor((elapsed_time / 1000) % 60);
    minutes=Math.floor((elapsed_time / (1000 * 60) %60));
    hours=Math.floor((elapsed_time /(1000* 60 * 60))%60);

    seconds = fill(seconds);
    minutes=fill(minutes);
    hours=fill(hours);

    time_display.textContent=`${hours}:${minutes}:${seconds}`;
}
start.addEventListener("click",() => {
    if (paused===true)
    {
        paused = false;
        start_time=Date.now() - elapsed_time;
        interval_id=setInterval(update_time,1000);
    }
});
pause.addEventListener("click", () => {
    if (!paused)
    {
        paused=true;
        elapsed_time = Date.now() -start_time;
        clearInterval(interval_id);

    }
})
reset.addEventListener("click", ()=>
{
    paused =true;
    clearInterval(interval_id);
    start_time = 0;
    elapsed_time = 0;
    current_time = 0;
    hours= 0;
    minutes=0;
    seconds=0;
    time_display.textContent="00:00:00" //HTML
})
function fill(unit) {
    if ((("0") + unit).length > 2) {
        return unit;
    } else {
        return "0" + unit;
    }
}




