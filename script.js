const userInput = +window.prompt("What is your exam score?")
if (userInput < 100 && userInput >= 85) {
    document.write("You got a A 🎉")
} else if (userInput < 85 && userInput >= 75) {
    document.write("You got a B 🎉")
} else if (userInput < 75 && userInput >= 65) {
    document.write("You got a C 📃")
} else if (userInput < 65 && userInput >= 50) {
    document.write("You got a D 👌")
} else if (userInput < 50 && userInput >= 0) {
    document.write("You got a F 😟")
} else if (userInput > 100 || userInput < 0) {
    document.write("Invaild Score ❌")
} else if (isNaN(userInput)) {
    document.write("Not a Number ❌")
} else if (userInput === 100) {
    document.write("perfect Score 🏆")
}

// switch (true) {
//     case (userInput < 100 && userInput >= 85):
//         document.write("You got a A 🎉");
//     break;
//     case (userInput < 85 && userInput >= 75):
//         document.write("You got a B 🎉")
//     break;
//     case (userInput < 75 && userInput >= 65):
//         document.write("You got a C 📃")
//     break;
//     case (userInput < 65 && userInput >= 50):
//         document.write("You got a D 👌")
//     break;
//     case (userInput < 50 && userInput >= 0):
//         document.write("You got a F 😟")
//     break;
//     case (userInput > 100 || userInput < 0):
//         document.write("Invaild Score ❌")
//     break;
//     case isNaN(userInput):
//         document.write("Not a Number ❌")
//     break;
//     case (userInput === 100):
//         document.write("perfect Score 🏆")
//     break;
// }