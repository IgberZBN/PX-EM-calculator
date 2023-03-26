const form = document.querySelector("form");
const inputs = document.querySelectorAll(".inValue");
const resp = document.querySelector(".resp");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  calcule();
});

inputs.forEach((element) => {
  element.addEventListener("click", () => {
    const id = getId(element);
    clearInput(id);
  });
});

function getId(element) {
  const id = element.id;
  return id;
}

function clearInput(id) {
  id === "inPxEm"
    ? (document.querySelector("#inEmPx").value = "")
    : (document.querySelector("#inPxEm").value = "");
}

function calcule() {
  const valueDefault = Number(document.querySelector("#inDefault").value);
  check(valueDefault);
  getValue(valueDefault);
}

function getValue(valueDefault) {
  const num = document.querySelector("#inPxEm").value
    ? calculeEm(Number(document.querySelector("#inPxEm").value), valueDefault)
    : calculePx(Number(document.querySelector("#inEmPx").value), valueDefault);
  resp.value = num;
}

function check(valueDefault) {
  if (
    !valueDefault ||
    (!document.querySelector("#inEmPx").value &&
      !document.querySelector("#inPxEm").value)
  ) {
    throw "Insira um valor valido";
  }
}

function calculeEm(value, valueD) {
  const resultado = `${value / valueD}em`;
  return resultado;
}

function calculePx(value, valueD) {
  const resultado = `${value * valueD}px`;
  return resultado;
}
