window.onload = (event) => {
    let canvas = document.getElementById('myCanvas') ;
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(300, 300, 290, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillstyle = 'black';
    ctx.fill();

    ctx.rect(100,100, 400,400);
    ctx.closePath();
    ctx.strokeStyle = "red";
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.font = "80px arial";
    ctx.fillText("Challenge", 120, 320);

}


