const sentence = "hello there from lighthouse labs";
let i = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + i) // <= 1s delay to make it noticeable. Can dial it down later.
  i += 50;
}