function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function main(input) {
    let celsius = parseFloat(input.trim());

    if (!isNaN(celsius)) {
        let fahrenheit = celsiusToFahrenheit(celsius);
        console.log(`The temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}`);
    } else {
        console.log("Invalid input. Please enter a valid number.");
    }
}

process.stdin.on('data', (chunk) => {
    main(chunk);
});

process.stdin.on('end', () => {
    // Additional logic can be added here if needed
});
