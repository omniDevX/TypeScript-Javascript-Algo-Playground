function linearSearch(arr, n, x) {
    let i;
    for (i = 0; i < n; i++)
        if (arr[i] == x)
            return i;
    return -1;
}

// Function to call Linear Search method
function searchInArr(arr, n, x) {

    // Function call
    let result = linearSearch(arr, n, x);
    if (result == -1)
        console.log("Element is not present in array");
    else
        console.log("Element is present at index " + result);
}


// Driver code

let arr = [10, 30, 50, 60, 70];
let n = arr.length;

let x1 = 50;
searchInArr(arr, n, x1);

let x2 = 5;
searchInArr(arr, n, x2);

