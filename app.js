function removeDuplicateWords (s) {
    // your perfect code...
    var arr = s.split(' ');

    arr = arr.filter(function(value, index, self) { 
        return self.indexOf(value) === index;
    }).join(' ');

    return arr;
}

console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); 
// 'alpha beta gamma delta'