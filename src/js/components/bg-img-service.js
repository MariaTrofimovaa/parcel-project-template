const formKey = 'form';
const form = document.querySelector(formKey);

let formData = getLocalStorageData(formKey);
Object.keys(formData).forEach(key => (form.elements[key].value = formData[key]));

form.oninput = e => {
  const input = e.target;
  if (input.name === 'password') return;
  formData[input.name] = input.value;
  localStorage.setItem(formKey, JSON.stringify(formData));
};

form.onsubmit = e => {
  e.preventDefault();
  e.currentTarget.reset();
  formData = {};
  localStorage.removeItem(formKey);
};
function getLocalStorageData(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? {};
  } catch (error) {
    return {};
  }
}
