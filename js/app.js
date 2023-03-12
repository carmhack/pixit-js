const colorsData = [
    'red',
    'blue',
    'orange',
    'purple',
    'pink',
    'black',
    'green',
    'yellow',
    'brown'
];

const rowsInput = document.querySelector('input[name="rows"]');
const canvas = document.querySelector('.canvas');
const colors = document.querySelector('.colors');
const resetButton = document.getElementById('reset');
let activeColor = null;

resetButton.addEventListener('click', createCanvas);
canvas.addEventListener('mousedown', (e) => {
	drawPixel(e);
	canvas.addEventListener('mousemove', drawPixel);
});
canvas.addEventListener('mouseup', (e) => {
	canvas.removeEventListener('mousemove', drawPixel);
});
rowsInput.addEventListener('change', function(e) {
    createCanvas();
});

function drawPixel(e) {
	const pixel = e.target.closest('.canvas div');
	if (!pixel) return;
	pixel.style.backgroundColor = activeColor.id;
}

function createPixel() {
	const pixel = document.createElement('div');
    pixel.classList.add('pixel');
	return pixel;
}

function createCanvas() {
	canvas.innerHTML = '';
    const rows = rowsInput.value;
	for (let i = 0; i < 20*rows; i++) {
		canvas.appendChild(createPixel());
	}
}

function createColorPickers() {
    colorsData.forEach(value => {
        const colorPicker = document.createElement('div');
        colorPicker.classList.add('color');
        colorPicker.id = value;
        colorPicker.style.backgroundColor = value;

        colorPicker.addEventListener('click', function() {
            // remove previous active
            activeColor.classList.remove('active');
            // add active on clicked picker
            activeColor = this;
            activeColor.classList.add('active');
        });

        colors.appendChild(colorPicker);
    });

    activeColor = document.querySelector('.color');
    activeColor.classList.add('active');
}

createColorPickers();
createCanvas();