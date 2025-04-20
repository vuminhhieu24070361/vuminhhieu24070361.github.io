var txta = prompt("Enter numbers A");
var txtb = prompt("Enter numbers B");

if (txta == null || txta == "" || isNaN(txta)) {
    alert("Number A is formatted incorrect");
}
else if (txtb == null || txtb == "" || isNaN(txtb)) {
    alert("Number B is formatted incorrect");
}
else {
    var result  = parseFloat(txta) + parseFloat(txtb);
    alert("Result:\n " + txta + " + " + txtb + " = " + result);
}