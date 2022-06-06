// Code your solution here

//findMatching

function findMatching(drivers, name) {
    return drivers.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === name.toLowerCase()
    );
  }
  
  function fuzzyMatch(drivers, members) {
    return drivers.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(members.toLowerCase()) === 0
    );
  }
  
  function matchName(drivers, name) {
    return drivers.filter((record) => record.name === name)
  }