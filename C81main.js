canvas = document.getElementById("mycanvas");
ctx=canvas.getContext("2d")

color = "black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(400, 300, 35, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    color = document.getElementById("input_color").value;

    circle(mouse_x, mouse_y);
}

function clearcanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function circle(mouse_x, mouse_y)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(mouse_x, mouse_y, 35, 0, 2*Math.PI);
ctx.stroke();
}