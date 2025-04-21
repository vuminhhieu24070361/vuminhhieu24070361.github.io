function calculate() {
    let x = document.getElementById("width").value;
    let y = document.getElementById("height").value;
    
    if (x <= 0 || y <= 0) {
        document.getElementById("result").innerHTML = "Vui lòng nhập giá trị hợp lệ!";
        return;
    }

    let perimeter = 2 * (parseFloat(x) + parseFloat(y));
    let area = parseFloat(x) * parseFloat(y);

    document.getElementById("result").innerHTML = 
        "Chu vi: " + perimeter + " đơn vị<br>" +
        "Diện tích: " + area + " đơn vị diện tích";
}