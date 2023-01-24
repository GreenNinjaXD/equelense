var x = +prompt ('Введите число')
var y = +prompt ('Введите число')
var z = +prompt ('Введите число')

if (x > y && x < z || x < y && x > z) {
    alert('Среднее число' + x)
} else if (y > x && y < z || y < x && y > z){
    alert('Среднее число' + y)  
} else if (z < a && z > y || z > a && z < y){
    alert('Среднее число' + z)
} else{
    alert('Error')
}
