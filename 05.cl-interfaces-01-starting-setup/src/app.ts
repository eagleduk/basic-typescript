const inputElement = document.getElementById("name");

if (inputElement) {
  const name = (inputElement as HTMLInputElement).value;
}

const numberElement = <HTMLInputElement>document.getElementById("age");

if (numberElement) {
  const age = numberElement.value;
}
