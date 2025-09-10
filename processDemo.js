console.log(process);
console.log(process.argv);
console.log(process.env);

// pid
console.log(process.pid);
//cwd() current working dir
console.log(process.cwd());
// title
console.log(process.title);
console.log(process.memoryUsage());
console.log(process.uptime());

process.on('exit', (code)=> console.log(`About to exit after run: ${code}`))
process.exit(0);

console.log('Hello World')