//fizzbuzz
//Écrivez une fonction fizzbuzz qui affiche tous les nombres entre 1 et 100 avec les exceptions suivantes :
//Il affiche :
//– « Fizz » à la place du nombre si
//celui-ci est divisible par 3.
//– « Buzz » à la place du nombre
//si celui-ci est divisible par 5 et non par 3.
//– « FizzBuzz » à la place du nombre
//si celui-ci est divisible à la fois par 3 et par 5.
function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzBuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// Pas du tout recommandé, le code n'est pas clair, c'est très hacky
function fizzBuzzSwitchCase() {
  for (let i = 1; i < 101; i++) {
    switch (true) {
      case x % 5 === 0 && x % 3 === 0:
        console.log("FizzBuzz");
        break;
      case x % 3 === 0:
        console.log("Fizz");
        break;
      case x % 5 === 0:
        console.log("Buzz");
        break;
      default:
        console.log(x);
        break;
    }
  }
}

fizzBuzz();
