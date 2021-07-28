const sentence = "hello there from lighthouse labs";
let count = 0; 
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50*count) 
  count ++;    
}
setTimeout(() => {
    console.log("\n");
    }, 50*count) 
 