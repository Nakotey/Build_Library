class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._rating = [];
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

  get rating(){
    return this._rating;
  }

  toggleCheckOutStatus(){
   return this._isCheckedOut = !this._isCheckedOut;
    // if(this._isCheckedOut){
    //   return this._isCheckedOut = true;
    // }
    // return this._isCheckedOut = false;
  }

   getAverageRating(){
     let ratingSum = this._rating.reduce((currentSum, rating) => currentSum + rating,0);
     return ratingSum/this._rating.length;
  }

  addRating(newRating){
    this._rating.push(newRating);
  }
}

class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }

  get isCheckedOut(){
    return this._isCheckedOut;
  }

}

class Movie extends Media{
  constructor(title,director,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544)

console.log(historyOfEverything.toggleCheckOutStatus());

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus;
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());
