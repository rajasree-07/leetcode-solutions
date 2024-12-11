/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function(nums, k) {
     const maxBoundary = Math.max(...nums) + k * 2 + 2;
    // Initialize difference array to hold the frequency of numbers up to the maximum boundary.
    const differenceArray = new Array(maxBoundary).fill(0);

    // Iterate over the input array and update the difference array based on the allowed operations.
    for (const num of nums) {
        // For each number, increment the count at the number's index in the difference array.
        differenceArray[num]++;
        // Decrement the count at the index that is 'operationsAllowed' doubled and one past the current number.
        differenceArray[num + k * 2 + 1]--;
    }

    let maxBeauty = 0;  // Store the maximum beauty value found.
    let sum = 0;        // Accumulator to store the running sum while iterating over the difference array.

    // Iterate over the difference array to find the maximum accumulated frequency (beauty).
    for (const frequency of differenceArray) {
        // Update the running sum by adding the current frequency.
        sum += frequency;
        // Update the maximum beauty value if the current running sum is greater than the previous maximum.
        maxBeauty = Math.max(maxBeauty, sum);
    }

    // Return the maximum beauty value found.
    return maxBeauty;
};