const inputs = document.querySelectorAll("input");
const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[a-z\d-]{8-20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validate(field, regex) {
  regex.test(field.value)
    ? (field.className = "valid")
    : (field.className = "invalid");
}

inputs.forEach(input => {
  input.addEventListener("keyup", e => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
