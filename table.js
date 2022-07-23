function calctable() {
  let tablenumber = +document.querySelector("#table").value;
  let tablenumber1 = +document.querySelector("#tablenum").value;
  document.querySelector("#result").innerHTML = " ";
  for (i = 1; i <= tablenumber1; i++) {
    document.querySelector("#result").innerHTML += `${tablenumber} x ${i} =  ${
      tablenumber * i
    }<br/>`;
  }
}
