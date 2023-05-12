// Hace que el listado del campo de día tenga los valores del 1 al 31
var select = document.getElementById("dia");
for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.text = (i < 10 ? "0" : "") + i;
    option.value = option.text;
    select.add(option);
}
// Hace que el listado del campo de mes tenga los valores desde Enero hasta Diciembre
var select = document.getElementById("mes");
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (var i = 0; i < meses.length; i++) {
    var option = document.createElement("option");
    option.text = meses[i];
    option.value = i + 1;
    select.add(option);
}