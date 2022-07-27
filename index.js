var Arr = [];

function addNum() {
    var n = +document.getElementById("txtNum").value;
    Arr.push(n);
    document.getElementById("result").innerHTML = Arr;
}

function SumPositive() {
    var sum = 0;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            sum += Arr[i]
        }
    }
    document.getElementById("resultBt1").innerHTML = "Tổng số dương: " + sum;
}

function countPositive() {
    var count = 0;
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            count += 1
        }
    }
    document.getElementById("resultBt2").innerHTML = "Số dương: " + count;
}

function FindMin() {
    var min = Arr[0];
    for (var i = 1; i < Arr.length; i++) {
        if (Arr[i] < min) {
            min = Arr[i];
        }
    }
    document.getElementById("resultBt3").innerHTML = "Số nhỏ nhất: " + min;
}

function FindPositiveMin() {
    var positive = [];
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] > 0) {
            positive.push(Arr[i]);
        }
    }
    for (var min = positive[0], i = 1; i < positive.length; i++) {
        if (positive[i] < min) {
            min = positive[i];
        }
    }
    document.getElementById("resultBt4").innerHTML = "Số nhỏ Dương nhất: " + min;
}

function LastEven() {

}