// Importing necessary modules
import { createInterface } from 'readline';
import chalk from 'chalk';
import { say } from 'cowsay';
import logo from 'asciiart-logo'; // Importing the logo function

// Creating readline interface
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to display the name in rainbow colors
function displayRainbowName(random) {
    const colors = [chalk.red, chalk.yellow, chalk.green, chalk.blue];
    let rainbowName = '';

    for (let i = 0; i < random.length; i++) {
        rainbowName += colors[i % colors.length](random[i]);
    }

    console.log(rainbowName);
}

// Function to display the name in ASCII art
function displayAsciiArt(random) {
    console.log(say({
        text: random,
        e: "^^",
        T: "U "
    }));
}

// Prompting the user for their name
rl.question('Enter your name: ', (random) => {
    displayRainbowName(random);    // Display name in rainbow colors
    displayAsciiArt(random);       // Display name in ASCII art
    const longText = random;
    console.log(
        logo({
            name: 'Kelvin',
            font: 'Speed',
            lineChars: 10,
            padding: 2,
            margin: 3,
            borderColor: 'yellow',
            logoColor: 'bold-yellow',
            textColor: 'yellow',
        })
        .right(longText)
        .render()
    );
    rl.close();
});
