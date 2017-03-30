function findSmallestEvenlyDivisible(n){
  
  var gcm = n * (n - 1);          // set variable gcm as product of two largest numbers
  var numCheck = (n - 2);         // keep track of number being checked
  var temp = n * (n - 1);         // create a temporary gcm
  var count = 1;                  // create a count variable used to increment temp
  
  while (numCheck > 1){           
    if (temp % numCheck === 0){   // check to see if temp is evenly divisible by largest number
      if (gcm !== temp){          // if so, set gcm equal to temp, decrease numCheck 
        gcm = temp; 
      }
      numCheck--;
      continue;
    } else {                      // if not, increase counter by 1, increment temp
      temp += gcm;
      continue;
    }
  }
  
  return gcm;
}

findSmallestEvenlyDivisible(20)

// average performance: 0.015 ms
