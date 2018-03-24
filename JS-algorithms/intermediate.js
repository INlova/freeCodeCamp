//01-Sum all numbers in a range
   //Given a list of 2 ranges: [1,4],
   //sumAll([1,4]) => 1+2+3+4 = 10


  //1- Via for loop:
  function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var x = 0;
    for (var i = min; i <= max; i++) {
      x += i;
    }
    return (x);
  }


  //2- Using sum of arithm series/finite arithmetic progression:
  function numberRange(start, end) {
    var listOfRanges = new Array(end + 1 - start).fill().map((d, i) => i + start);
    return listOfRanges;
  } //generate a list of consq vals given given 2Nums/range

  function sumAll(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var numberOfTermsBeingAdded = numberRange(min, max).length;
    var arithmSeries = (numberOfTermsBeingAdded * (min + max)) / 2;
    return arithmSeries;
  }


  //3- Similar to 2:
  function sumAll(arr) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    return (max - min + 1) * (min + max) / 2;
  }
