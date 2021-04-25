/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

data working with: strings/arrays
returns: string

example:
DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"
*/

const DNAStrand = dna => {
  // start off with an empty arr to push reassigned results
  let arr = []
  // loop through dna param (string) 
  for (let i = 0; i < dna.length; i++) {
    // grabbing the index of all dna strings with charAt() and reassigning the symbols with its complement A & T | C & G then pushing the new assignment into the empty arr
    let strand = dna.charAt(i)
    if (strand === 'A') {
      strand = 'T'
      arr.push(strand)
    } else if (strand === 'T') {
      strand = 'A'
      arr.push(strand)
    } else if (strand === 'C') {
      strand = 'G'
      arr.push(strand)
    } else if (strand === 'G') {
      strand = 'C'
      arr.push(strand)
    }
  }
  // turning the arr back into string
  let result = arr.join('')
  // returning final result
  return result
}