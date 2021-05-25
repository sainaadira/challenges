/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

data working with: strings
returns: string

example:
DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"

pseudocode ___
create an empty string store the  final DNA result
loop though imputted dna string
conditional changing conplementary strands A to T, T to A, C to G & G to C
return the final result 
*/


const DNAStrand = dna => {
  let dnaResult = ''
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        dnaResult += 'T'
        break;
      case 'T':
        dnaResult += 'A'
        break;
      case 'C':
        dnaResult += 'G'
        break;
      case 'G':
        dnaResult += 'C'
        break;
    }
  }
  return dnaResult
}


