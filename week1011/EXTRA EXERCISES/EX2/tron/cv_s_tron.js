function calculate() {
    let radius = document.getElementById("radius").value;
    
    if (radius <= 0) {
        document.getElementById("result").innerHTML = "Vui lòng nhập giá trị hợp lệ!";
        return;
    }

    let pi = 3.14;
    let perimeter = 2 * pi * parseFloat(radius);
    let area = pi * Math.pow(parseFloat(radius), 2);

    document.getElementById("result").innerHTML = 
        "Chu vi: " + perimeter.toFixed(2) + " đơn vị<br>" +
        "Diện tích: " + area.toFixed(2) + " đơn vị vuông";
}