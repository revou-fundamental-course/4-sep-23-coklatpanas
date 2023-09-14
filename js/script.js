document.addEventListener('DOMContentLoaded', function () {
    const areaCalculatorForm = document.getElementById('area-calculator-form');
    const perimeterCalculatorForm = document.getElementById('perimeter-calculator-form');

    const areaSideLengthInput = document.getElementById('area-side-length');
    const perimeterSideLengthInput = document.getElementById('perimeter-side-length');

    const calculateAreaButton = document.getElementById('calculate-area');
    const calculatePerimeterButton = document.getElementById('calculate-perimeter');

    const areaResultSpan = document.getElementById('area');
    const perimeterResultSpan = document.getElementById('perimeter');

    calculateAreaButton.addEventListener('click', function () {
        const sideLength = parseFloat(areaSideLengthInput.value);

        if (!isNaN(sideLength)) {
            const area = sideLength * sideLength;
            areaResultSpan.textContent = area.toFixed(2);
        } else {
            alert('Masukkan panjang sisi yang valid untuk menghitung luas.');
        }
    });

    calculatePerimeterButton.addEventListener('click', function () {
        const sideLength = parseFloat(perimeterSideLengthInput.value);

        if (!isNaN(sideLength)) {
            const perimeter = 4 * sideLength;
            perimeterResultSpan.textContent = perimeter.toFixed(2);
        } else {
            alert('Masukkan panjang sisi yang valid untuk menghitung keliling.');
        }
    });
});
