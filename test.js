
        
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

function countWords(str) {
    // إزالة المسافات الزائدة من أول وآخر الجملة
    str = str.trim();

    // تقسيم الجملة لكلمات باستخدام الفراغ كفاصل
    let words = str.split(/\s+/); // \s+ يعني أي مسافة أو أكثر

    // إنشاء object لتخزين عدد كل كلمة
    let wordCount = {};

    for (let word of words) {
        // إذا الكلمة موجودة بالفعل زد العدد، إذا لا خليها 1
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }

    return wordCount;
}

console.log(countWords("apple banana apple orange apple banana"));


        
    