function doubleValues(arr) {
    let newArray = [];
    arr.forEach(function(val) {
        newArray.push(val * 2);
    });
    return newArray
}

function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function(val){
        if(val % 2 === 0) {
            newArray.push(val);
        }
    });
    return newArray
}

function showFirstandLast(arr) {
    let newArray = [];
    arr.forEach(function(val) {
    newArray.push(val[0] + val[val.length -1]);
    });
    return newArray;
}


//slightly unsure of how everything is passed in for this one
function addKeyAndValue(arr, key, val) {
    arr.forEach(function(val) {
        val[key] = value;
    });
}

//haven't learned much about split. 
// I understand no space in the empty string looks at each letter and a space looks at each word. Had to code along solution for this exercise
function vowelCount(str) {
    let splitLetters = str.split('');
    let obj = {};
    const vowels = 'aeiou';

    splitLetters.forEach(function(letter) {
        let lowerCased = letter.toLowerCase()
        if (vowels.indexOf(lowerCased) !== -1) {
            if (obj[lowerCased]) {
               obj[lowerCased]++;
            } else {
                obj[lowerCased] = 1;
            }
        }
    });
    return obj;
}

function doublesValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
        return val * idx;
    });
}

function extractKey(arr, key) {
    return arr.map(function(val) {
        return val[key];
    });
}

function extractFullName(arr) {
    return arr.map(function(val) {
        return val.first + " " + val.last;
    });
}


function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !==undefined;
    });
}

function find(arr, searchValue) {
    return arr.filter(function(val) {
        return val === searchValue;
    }) [0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str) {
    const vowels = "aeiou"
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
          return vowels.indexOf(val) === -1;
      })
      .join(""); 
}

//different from solution but is this still workable?
function doubleOddNumbers(arr) {
const oddNumbers = arr.filter(function(val) {
        return val % 2 !==0
    })
    return oddNumbers.map(function(val) {
        return val * 2
    });
}