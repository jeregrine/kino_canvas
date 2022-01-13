const setAttribute = (elem, key, val, d) => {
  const v = val != null ? val : d;
  elem.setAttribute(key, v)
}

export function init(ctx, props) {
  const canvas = document.createElement("canvas");
  setAttribute(canvas, "width", props.width, ctx.root.clientWidth);
  setAttribute(canvas, "height", props.height, ctx.root.clientHeight);

  ctx.root.appendChild(canvas);

  const context = canvas.getContext('2d');

  const ops = props.ops

  for (const [op, args] of ops) {
    try {
      if (op == "set") {
        context[args[0]] = args[1];
      } else if (typeof context[op] === "function") {
        const arg = args.filter(x => x != "unset")
        context[op](...arg);
      } else {
        console.log("Recieved a bad function:" + op)
      }
    } catch (e) {
      console.log("Recieved a bad op" + op)
      console.error(e)
    }
  }
}
