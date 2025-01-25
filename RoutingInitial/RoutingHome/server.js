const express=require('express')
const routeFib=require('./route')
const app = express();


app.on('request', (req, res) => {
 
  const compute = routeFib.fibonacci;
  compute.send('start');
  compute.on('message', fib => {
  res.end(`Fib is ${fib}`);
  })
});

app.listen(3000);