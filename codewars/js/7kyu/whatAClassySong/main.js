/*https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript
Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'
You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitve manner, i.e. "John" is the same as "john".

Example
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// These are all new since they are the first listeners.

// day 2
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Luke and Amanda are new, john already listened to it the previous day
Also if the same person listened to it more than once a day it should only count them once.

Example
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
mountMoose.howMany(['John', 'joHN', 'carl']); => 2

P: class: string method: array
R: number (how many new listeners the song gained)
E: day one: howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
   day 2: (['JoHn', 'Luke', 'AmAndA']) only luke and and amanda counted b/c they're new
P: create class and constructor (title and artist params)
   create howMany method place array of people as param
   iterate though people array, make names all lowercase
   create variable for unique listeners
   create variable for new listeners
   filter though uniqueListeners array to check if a new listener is in the arr
   iterate though newListeners arr and push listeners into array
   return length of newListeners
*/



class Song {
  constructor(title, artist) {
    this.title = title
    this.artist = artist
    this.listenersArr = []
  }
  howMany(people) {
    people = people.map(person => person.toLowerCase())
    // all values in a set are unique
    const uniqueListener = [...new Set(people)]
    // new listener filters though uniqueListener arr and check arr does not include an already listed lisener
    const newListener = uniqueListener.filter(listener => !this.listenersArr.includes(listener))
    // pushes new listener into listenersArr
    newListener.forEach(listener => this.listenersArr.push(listener))
    // returns number of newListeners
    return newListener.length
  }
}