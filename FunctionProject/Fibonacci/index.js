var bigInt = require("big-integer");

function fibonacciMemoization(n, memo = {}) {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n <= 1) {
    return bigInt(n);
  }
  memo[n] = fibonacciMemoization(n - 1, memo).add(fibonacciMemoization(n - 2, memo));
  return memo[n];
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth;

    if (nth < 0)
        throw 'must be greater than 0';
    else {
        const answer = fibonacciMemoization(nth);

        context.res = {
            body: answer.toString()
        };
    }
}
