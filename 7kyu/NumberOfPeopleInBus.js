// # of people on the bus - group hayden did together

const number = busStops => busStops.reduce((n, [on, off]) => n + on - off, 0);

// some maths [on, off] are parameters 
// The reduce() method returns a single value: the function's accumulated result.