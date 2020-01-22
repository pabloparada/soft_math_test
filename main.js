const { app } = require('electron');
const soft_math = require('soft_math');

console.log(soft_math.fft([1, 2, 3, 4]));

app.quit();