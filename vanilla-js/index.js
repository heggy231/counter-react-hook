const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let counter = 0;

const renderHTML = () => {
  appDiv.innerHTML = `
    <div>
      <h2>The counter is at ${counter}</h2>
      <button id="button">Click Me</button>
    </div>
  `;
}

renderHTML();

const h2 = appDiv.querySelector('h2');

const handleClick = () => {
  counter += 1;
  h2.innerHTML = `The counter is at ${counter}`;
};

const button = document.getElementById('button');
// we must have button to assign .onclick
//  to the button therefore once button is created then place click event
button.onclick = handleClick;