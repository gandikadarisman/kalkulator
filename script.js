const display = document.getElementById("display");

function append(value) {
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
