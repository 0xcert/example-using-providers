import { enableMetamask } from "./src/example";

const btnEnableMetamask = document.getElementById("btnEnableMetamask");
const console = document.getElementById("console");

btnEnableMetamask.addEventListener("click", async () => {
  printMessage("Enabling metamask.");
  let error = null;
  try {
    await enableMetamask();
  } catch (e) {
    error = e;
  }
  if (error) {
    printError(error);
  } else {
    printMessage("Metamask enabled.");
  }
});

function printMessage(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = message;
  console.prepend(div);
}

function printError(message: any) {
  if (typeof message !== "string") {
    message = JSON.stringify(message, null, 2);
  }
  const div = document.createElement("div");
  div.innerText = "Error: " + message;
  div.className = "error";
  console.prepend(div);
}
