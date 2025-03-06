const clicked = [];
const magicKey = "ArrowUpArrowUpArrowLeftArrowUpArrowRightArrowRightArrowDown";

window.addEventListener("keyup", (e) => {
  clicked.push(e.key);
  clicked.splice(-magicKey.length - 1, clicked.length - magicKey.length);
  if (clicked.join("").includes(magicKey)) {
    cornify_add();
  }
});
