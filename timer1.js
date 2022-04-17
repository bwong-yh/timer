const args = process.argv;
const ringTimes = args.slice(2).filter(time => Number(time) >= 0);

ringTimes.forEach(time => {
  time = Number(time) * 1000;
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time);
});
