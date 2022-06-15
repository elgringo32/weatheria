const form = document.querySelector("form");
const submit = document.querySelector("#submit");

const formSubmit = () => {
  submit.addEventListener("click", () => {
    form.submit();
  });
};

export { formSubmit };
