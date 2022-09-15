function randomArrayGenerator(elements, decimals) {
    var array = [];
    if (decimals == true) {
    for (i = 0; i < elements; i++) {
        array.push(Math.random() * elements);
    }
    }
    if (decimals == false) {
    for (i = 0; i < elements; i++) {
        array.push(Math.floor(Math.random() * elements));
    }
    }
    return array;
}

function ArraySortSeconder(x) {
    iterations = 0;
    ItScChecker = 0;
    ArraySort(x);
    console.log("Done!");
    console.log("Final result: " + x);
}

function ArraySortPrimer(x) {
    ArraySortSeconder(x);
    console.log("After " + iterations + " iterations!");
}

//The main algorithm
function ArraySort(x) {
    for (i = 0; i < x.length - 1; i++) {
            iterations = iterations + 1;
            console.log(x);
            iMore = i + 1;
            a = x[i];
            b = x[iMore];
            console.log("Comparing: " + a + " with " + b + ".");
            if (x[i] > x[iMore]) {
                x[i] = b;
                x[iMore] = a;
            }
    }
    for (i = 0; i < x.length - 1; i++) {
            iMore = i + 1;
            a = x[i];
            b = x[iMore];
            console.log("Verifying: " + a + " with " + b + ".");
            if (x[i] > x[iMore]) {
                console.log(a + " was bigger than " + b + ", repeating algorithm.");
                ArraySort(x);
                break;
            }
    }
    return x;
    }
