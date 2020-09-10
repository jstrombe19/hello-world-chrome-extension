function greet() {
  const name = document.querySelector('#name');
  name.addEventListener('input', () => {
    const greet = document.querySelector('#greet');
    greet.textContent = 'Hello ' + name.value;
  });
}

greet();

// JQuery equivalent:
// $(function () {
//   $('#name').keyup(function () {
//     $('#greet').text("Hello ${$('#name')}");
//   });
// });
