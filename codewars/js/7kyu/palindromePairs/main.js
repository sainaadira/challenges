/*


*/



const palindromePairs = words => {
  // empty array to push pairs into
  const pairs = []
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        let forwards = `${words[i]}${words[j]}`
        let backwards = [...forwards].reverse().join('')
        if (forwards === backwards)
          pairs.push([i, j])
      }
    }
  }
  return pairs
}