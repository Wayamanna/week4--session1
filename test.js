
        
// دالة جمع الأرقام
function sumArry(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// دالة الأسماء الطويلة
function longNames(names) {
    return names.filter(name => name.length > 4);
}

// اختبارات
console.log("Sum Number:", sumArry([1, 2, 3, 4, 5]));
console.log(" Long names:", longNames(["Ali", "Fatima", "Omar", "Sarah"]));
        
    