const app = document.getElementById("app")! as HTMLDivElement;

document.addEventListener("DOMContentLoaded", () => {
  const formTemplate = document.getElementById(
    "project-input"
  )! as HTMLTemplateElement;

  const formFragment = document.importNode(formTemplate.content, true);

  const form = formFragment.firstElementChild as HTMLFormElement;
  form.id = "user-input";
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const title = (form.querySelector("#title") as HTMLInputElement).value;
    const description = (form.querySelector("#description") as HTMLInputElement)
      .value;
    const people = (form.querySelector("#people") as HTMLInputElement).value;

    console.log(title, description, people);
  });

  app.insertAdjacentElement("afterbegin", form);

  const listTemplate = document.getElementById(
    "project-list"
  )! as HTMLTemplateElement;

  const activeFragment = document.importNode(listTemplate.content, true);
  const activeElement = activeFragment.firstElementChild as HTMLLIElement;

  app.insertAdjacentElement("beforeend", activeElement);

  const finishFragment = document.importNode(listTemplate.content, true);
  const finishElement = finishFragment.firstElementChild as HTMLLIElement;
  finishElement.id = "finished-projects";

  app.insertAdjacentElement("beforeend", finishElement);
});
