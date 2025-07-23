// === Algorithm Function ===
// Replace this function with your actual algorithm
function reverseString(str) {
    return str.split('').reverse().join('');
}

// === Test Cases ===
const tests = [
    { input: "hello", expected: "olleh" },
    { input: "ReactNative", expected: "evitaNtcaeR" },
    { input: "", expected: "" },
];

// === Test Runner ===
tests.forEach((test, index) => {
    const result = reverseString(test.input);
    const passed = result === test.expected;
    console.log(`Test ${index + 1}: ${passed ? "✅ PASSED" : "❌ FAILED"}`);
    if (!passed) {
        console.log(`   Input: ${test.input}`);
        console.log(`   Expected: ${test.expected}`);
        console.log(`   Got: ${result}`);
    }
});
