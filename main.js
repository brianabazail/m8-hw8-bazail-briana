// Global Variables
const myBoxes = document.getElementsByClassName('block');


// The Functionality
function loopThrough() {

  const changeColor = () => this.clasList.toggle('pink');

  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, 1 * 1000);
  };

};

// The Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};
