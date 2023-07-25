const addNewBox = document.querySelector("#newtask");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const generatetask1 = document.querySelector("#generatetask1");
const generatetask2 = document.querySelector("#generatetask2");
const generatetask3 = document.querySelector("#generatetask3");

const localAdd1 = () => {
  const contact = document.querySelector("#contact1");
  contactvalue = contact.value;
  localStorage.setItem("contactvalue", contactvalue);
  return localStorage.getItem("contactvalue");
};
const localAdd2 = () => {
  const contact = document.querySelector("#contact2");
  contactvalue = contact.value;
  localStorage.setItem("contactvalue", contactvalue);
  return localStorage.getItem("contactvalue");
};
const localAdd3 = () => {
  const contact = document.querySelector("#contact3");
  contactvalue = contact.value;
  localStorage.setItem("contactvalue", contactvalue);
  return localStorage.getItem("contactvalue");
};

const generateModal1 = () => {
  modal1.style.display = "block";
};
const generateModal2 = () => {
  modal2.style.display = "block";
};
const generateModal3 = () => {
  modal3.style.display = "block";
};

const generateTask1 = () => {
  const task = document.createElement("div");
  task.innerHTML += `${localAdd1()}`;
  task.className = "box";
  generatetask1.appendChild(task);
};
const generateTask2 = () => {
  const task = document.createElement("div");
  task.innerHTML += `${localAdd2()}`;
  task.className = "box";
  generatetask2.appendChild(task);
};
const generateTask3 = () => {
  const task = document.createElement("div");
  task.innerHTML += `${localAdd3()}`;
  //   console.log((task.innerHTML = `${localAdd()}`));
  task.className = "box";
  generatetask3.appendChild(task);
  modal3.style.display = "hidden";
};
