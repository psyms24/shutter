export default function shutCommand(program) {
    program
        .command('shut <name>')
        .action((name) => {
            console.log(`Shut up ${name}`);
        })
}