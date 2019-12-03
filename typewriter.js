// const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  
  for (const [i, char] of sentence.split("").entries()) {
    setTimeout(() => {
      process.stdout.write(char);
    },i * 500);
  }
};



typewriter("hello there from lighthouse labs\n");