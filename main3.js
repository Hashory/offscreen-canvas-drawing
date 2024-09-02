/**
 * Offscreen(Worker) + `willReadFrequently: false`
 * (Main thread)
 */

const offCanvas = document.getElementById("canvas3");
const offscreen = offCanvas.transferControlToOffscreen();
const worker = new Worker("worker3.js");

worker.postMessage({ canvas: offscreen }, [offscreen]);

offCanvas.addEventListener("pointerdown", (event) => {
	worker.postMessage({
		type: "pointerdown",
		x: event.offsetX,
		y: event.offsetY,
	});
});

offCanvas.addEventListener("pointermove", (event) => {
	worker.postMessage({
		type: "pointermove",
		x: event.offsetX,
		y: event.offsetY,
	});
});

offCanvas.addEventListener("pointerup", () => {
	worker.postMessage({
		type: "pointerup",
	});
});
