// Javascript program for insertion sort

// Function to sort an array using insertion sort
function insertionSort(arr, n)
{
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

// A utility function to print an array of size n
function printArray(arr, n)
{
    let i;
    for (i = 0; i < n; i++)
        console.log(arr[i] + " ");
    
}

// Driver code
    let arr = [12, 11, 13, 5, 6 ];
    let n = arr.length;
    console.log("Elements before sorting:")
    printArray(arr, n);
    insertionSort(arr, n);
    console.log("Elements after sorting:")
    printArray(arr, n);