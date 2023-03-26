class Converter {
  constructor(form, inputs, resp) {
    this.form = document.querySelector(form);
    this.inputs = this.form.querySelectorAll(inputs);
    this.resp = this.form.querySelector(resp);

    this.inPxEm = this.form.querySelector("#inPxEm");
    this.inEmPx = this.form.querySelector("#inEmPx");
    this.inDefault = this.form.querySelector("#inDefault");
  }

  addSubmitEvent() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.calculate();
    });
  }

  calculate() {
    const valueDefaultPx = Number(this.inDefault.value);
    this.verify(valueDefaultPx);
    this.getValue(valueDefaultPx);
  }

  verify(valueD) {
    if (!valueD || (!this.inEmPx.value && !this.inPxEm.value)) {
      throw "Please, insert a valid value.";
    }
  }

  getValue(valueD) {
    const result = this.inPxEm.value
      ? this.calculateEm(Number(this.inPxEm.value), valueD)
      : this.calculatePx(Number(this.inEmPx.value), valueD);

    this.displayResult(result);
  }

  calculateEm(inValue, valueD) {
    const result = `${inValue / valueD}em`;
    return result;
  }
  calculatePx(inValue, valueD) {
    const result = `${inValue * valueD}px`;
    return result;
  }

  displayResult(result) {
    this.resp.value = result;
  }

  addClickEvent() {
    this.inputs.forEach((element) => {
      element.addEventListener("click", () => {
        const id = element.id;
        this.clearInput(id);
      });
    });
  }

  clearInput(id) {
    id === "inPxEm" ? (this.inEmPx.value = "") : (this.inPxEm.value = "");
  }
}

const calculator = new Converter("form", ".inValue", ".resp");
calculator.addClickEvent();
calculator.addSubmitEvent();
