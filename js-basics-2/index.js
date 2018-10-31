console.log('Hello World!');

function calculate() {
    let width = document.getElementById('width').value;
    let height = document.getElementById('height').value;

    let area = width * height;
    document.getElementById('answer').value = area;
}