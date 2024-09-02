/**
 * Main thread only
 */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d", { willReadFrequently: true });

ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let drawing = false;
const rect = canvas.getBoundingClientRect();

canvas.addEventListener("pointerdown", (event) => {
	drawing = true;
	ctx.beginPath();
	ctx.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener("pointermove", (event) => {
	if (!drawing) return;
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();
});

canvas.addEventListener("pointerup", (event) => {
	drawing = false;
});
