Array.prototype.my_unique = function() {
    var a = ["a","b","b", "c"];//使用concat()再複製一份陣列，避免影響原陣列
    console.log(a);
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j, 1);
            	console.log(a);
        }
    }
 console.log(a);
    return a;
};
 
 
//範例即可修改為
var arr1 = ["a","b","b", "c"];
var arr2 = ["b", "c"];
var arr3 = arr1.concat(arr2).my_unique();//合併後得到["a","b","c"]
console.log(arr3);