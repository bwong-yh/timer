const args = process.argv;
const ringTimes = args
  .slice(2)
  .filter(time => Number(time) >= 0)
  .map(time => Number(time) * 1000);

ringTimes.forEach(time => {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time);
});
