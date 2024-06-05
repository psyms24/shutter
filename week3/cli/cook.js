export default function cookCommand(program) {
    program
        .command('cook')
        .argument('<food>', "Your custom food")
        .argument('<drink>', "Your custom drink")
        .option('-f, --food <food>', 'Choose food', 'pizza')
        .option('-d, --drink <drink>', 'Choose drink', 'pepsi')
        .action((food, drink) => {
            console.log(`Your are cooking: ${food}`);
            console.log(`Your are drinking: ${drink}`);
        })
}


