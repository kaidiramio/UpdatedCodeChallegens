// find multiples of a number

function findMultiples(integer, limit) {
    const result = []
    // set variable

    // for loop with params ^
    for (let i = integer; i <= limit; i++) {
      if (i % integer === 0) {
        //   modulus
        result.push(i)
        // push method
      }
    }
    return result

    // return result
  }