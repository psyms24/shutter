export default function likeCommand(program) {
    program
        .command('like <name>')
        .action((name) => {
            console.log(`I like you ${name}`);
        })
}