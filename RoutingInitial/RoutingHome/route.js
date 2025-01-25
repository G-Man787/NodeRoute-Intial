const express=require('express')

const fibonacci = (fib) => {
  return fib < 1 ? 0: fib <= 2 ? 1
  : fibonacci(fib - 1) + fibonacci(fib - 2)
}
exports.fibonacci = async (req, res) => {
const result = await fibonacci(req.params.fib);
res.send({fib:result});
}
  