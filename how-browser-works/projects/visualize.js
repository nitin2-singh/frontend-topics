// elements
const codebox = document.getElementById("code-box");
const runBtn = document.getElementById("run-btn");
const callStackElm = document.getElementById("call-stack");
const webApisElm = document.getElementById("web-apis");
const taskQueueElm = document.getElementById("task-queue");

// initial code
codebox.value = `console.log("nitin1");
console.log("nitin2");
setTimeout(()=> {console.log('time-out')},1000);`;

// state
let refineCodeArray = [];
let callStack = [];
let webApis = [];
let taskQueue = [];

const animationDelay = 600;

// ================= UI HELPERS =================

function pushBox(container, text, type = "default") {
  const box = document.createElement("div");

  box.textContent = text;

  box.style.padding = "6px 10px";
  box.style.margin = "6px 0";
  box.style.borderRadius = "6px";
  box.style.fontSize = "14px";
  box.style.fontFamily = "monospace";
  box.style.transition = "all 0.3s ease";

  const colors = {
    callstack: "#d4edda",
    webapi: "#e2d9f3",
    task: "#f8d7da",
    default: "#eee",
  };

  box.style.background = colors[type];

  box.style.transform = "scale(0.8)";
  box.style.opacity = "0";

  container.appendChild(box);

  requestAnimationFrame(() => {
    box.style.transform = "scale(1)";
    box.style.opacity = "1";
  });

  return box;
}

function popBox(container) {
  if (!container || container.children.length === 0) return;

  const box = container.lastElementChild;

  box.style.transform = "scale(0.8)";
  box.style.opacity = "0";

  setTimeout(() => {
    box.remove();
  }, 300);
}

// ================= EVENT LOOP =================

function runEventLoop() {
  const interval = setInterval(() => {
    if (callStack.length === 0 && taskQueue.length > 0) {
      const task = taskQueue.shift();

      // remove from queue UI
      popBox(taskQueueElm);

      // push into call stack
      callStack.push(task);
      pushBox(callStackElm, task, "callstack");

      // simulate execution
      setTimeout(() => {
        popBox(callStackElm);
        callStack.pop();
      }, 600);
    }

    if (taskQueue.length === 0 && webApis.length === 0) {
      clearInterval(interval);
    }
  }, 200);
}

// ================= MAIN EXECUTION =================

function consumeCallStack() {
  refineCodeArray.forEach((line, index) => {
    setTimeout(() => {
      // PUSH to call stack
      callStack.push(line);
      pushBox(callStackElm, line, "callstack");

      // detect setTimeout
      if (line.includes("setTimeout")) {
        webApis.push("setTimeout()");
        pushBox(webApisElm, "setTimeout()", "webapi");

        // remove from call stack (async call leaves immediately)
        setTimeout(() => {
          popBox(callStackElm);
          callStack.pop();
        }, 300);

        // simulate timer
        setTimeout(() => {
          // remove from web api
          popBox(webApisElm);
          webApis.shift();

          // push to task queue
          taskQueue.push("callback()");
          pushBox(taskQueueElm, "callback()", "task");

          runEventLoop();
        }, 1000);
      } else {
        // normal sync execution
        setTimeout(() => {
          popBox(callStackElm);
          callStack.pop();
        }, 400);
      }
    }, animationDelay * index);
  });
}

// ================= RUN BUTTON =================

runBtn.addEventListener("click", () => {
  // reset UI + state
  callStack = [];
  webApis = [];
  taskQueue = [];

  callStackElm.innerHTML = "<p>Call Stack</p>";
  webApisElm.innerHTML = "<p>Web APIs</p>";
  taskQueueElm.innerHTML = "<p>Task Queue</p>";

  const code = codebox.value || "";
  const codeArray = code.split(";");

  refineCodeArray = [
    "main()",
    ...codeArray.filter((line) => line.trim() !== ""),
  ];

  consumeCallStack();
});
