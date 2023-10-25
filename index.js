// task1
Array.prototype.customFilter = function(callback) {
    const filteredArray = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };
  
  Array.prototype.customSome = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  
  Array.prototype.customEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  
  const numbers = [1, 2, 3, 4, 5];

  const evenNumbers = numbers.customFilter((num) => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]

  const hasOddNumber = numbers.customSome((num) => num % 2 !== 0);
  console.log(hasOddNumber); // Output: true

  const allNumbersUnderTen = numbers.customEvery((num) => num < 10);
  console.log(allNumbersUnderTen); // Output: true
  

// task2
const promisiune = new Promise((resolve, reject) => {
    const succes = true;
    
    setTimeout(() => {
      if (succes) {
        resolve("Promisiune rezolvată cu succes!");
      } else {
        reject("A apărut o eroare în timpul rezolvării promisiunii.");
      }
    }, 2000);
  });
  

  promisiune.then((rezultat) => {
    console.log("Succes:", rezultat);
  }).catch((eroare) => {
    console.error("Eroare:", eroare);
  }).finally(() => {
    console.log("Aceasta se va executa întotdeauna, indiferent de rezultat.");
  });
  
// task3
const downloadFile = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Descărcare cu succes: ${url}`);
        resolve(url);
      }, Math.random() * 2000);
    });
  };
  
  const urls = ["file1.txt", "file2.txt", "file3.txt"];
  
  Promise.all(urls.map(url => downloadFile(url)))
    .then(results => {
      console.log("Toate fișierele au fost descărcate cu succes.");
      console.log(results);
    })
    .catch(error => {
      console.error("A apărut o eroare în timpul descărcării.");
    });
  