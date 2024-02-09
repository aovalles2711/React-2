const mySquare = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  function unroll(square) {
    if(square.length === 0) return;

    console.log(...square.shift())

    console.log(...square.map(arrayEle => arrayEle.pop()))

    console.log(...square.pop().reverse())

    console.log(...square.map(arrayEle => arrayEle.shift()).reverse())

    unroll(square)
  }

unroll(mySquare);


module.exports = unroll;
