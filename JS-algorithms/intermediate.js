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



//02-Difference of 2 arrays/set operation
		//Given [1,2,3,4] && [1,2,4], return [3]
			//diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]) =>  ["piglet", 4]
			//diffArray([1,2,3,4],[1,2,4])

		//[5,2,9,1].indexOf(3)    //=-1
		//[5,2,9,1,3].indexOf(3)  //=4


	//1- Combine 2 arrays. Filter on this concat array. Wrote as closure.
	function diffArray(arr1, arr2) {
	  var joined = arr1.concat(arr2);  //>> [1,2,3,4,1,2,4]

	  function check(num) { //for each num in arr1, arr2
	    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {  //=== -1   = values does not exist
	      return num; //only return values/items that are not in present in joinedArr
	    }
	  }
	  return joined.filter(check);
	}


	//2- Similar to 1, but we check against each array, not the concat list.
	function diffArray(arr1, arr2) {
	  var diffArr = [];

	  function check(listA, listB){
	    for (var i=0; i<listA.length; i++){
	      if (listB.indexOf(listA[i]) === -1) {
	        diffArr.push(listA[i]);
	      }
	    }
	  }
	  check(arr1, arr2);
	  check(arr2, arr1);
	  return diffArr;
	}


	//3- Basic:
	function diffArray(arr1, arr2) {
	  var diffArr = [];
	  for(i = 0; i < arr2.length; i++){
	    if(arr1.indexOf(arr2[i]) == -1){
	      diffArr.push(arr2[i]);
	    }
	  }
	  for(j = 0; j < arr1.length; j++){
	    if(arr2.indexOf(arr1[j]) == -1){
	      diffArr.push(arr1[j])
	    }
	  }
	  return diffArr;
	}


	//4- Via chained filters:
	function diffArray(arr1, arr2) {
	  return arr1.filter(function(val1) {
	    return (arr2.indexOf(val1) == -1);
	  }).concat(arr2.filter(function(val2) {
	    return (arr1.indexOf(val2) == -1);
	  }));
	}


	//4- re-written for clarity:
	function diffArray(arr1, arr2) {
		var firstFiltered =arr1.filter(function(val1) {
			return (arr2.indexOf(val1) == -1);
			});
		var secondFiltered = arr2.filter(function(val2) {
		    return (arr1.indexOf(val2) == -1);
			});
		return firstFiltered.concat(secondFiltered)
	}
