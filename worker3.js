/**
 * Offscreen(Worker) + `willReadFrequently: false`
 * (Worker thread)
 */

let drawing = false;
let ctx;

self.onmessage = (event) => {
	if (event.data.canvas) {
		const canvas = event.data.canvas;
		// ---
		ctx = canvas.getContext("2d", { willReadFrequently: false });
		/// ---
		ctx.strokeStyle = "black";
		ctx.lineWidth = 10;
		ctx.lineJoin = "round";
		ctx.lineCap = "round";
	}

	if (ctx) {
		switch (event.data.type) {
			case "pointerdown":
				drawing = true;
				ctx.beginPath();
				ctx.moveTo(event.data.x, event.data.y);
				break;
			case "pointermove":
				if (drawing) {
					ctx.lineTo(event.data.x, event.data.y);
					ctx.stroke();
				}
				break;
			case "pointerup":
				drawing = false;
				break;
		}
	}
};
