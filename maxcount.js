/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
    const set = new Set(banned);
    let count = 0;
    let sum = 0;

    for (let num = 1; num <= n; num++) {
        if (set.has(num)) {
            continue;
        }

        if (sum + num <= maxSum) {
            count++;
            sum += num;
        } else {
            break;
        }
    }

    return count;
};
