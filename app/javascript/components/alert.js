
// import swal from 'sweetalert';

// function bindSweetAlertButtonDemo() {
//   const swalButton = document.getElementById('sweet-alert-demo');
//   if (swalButton) { // protect other pages
//     swalButton.addEventListener('click', (event) => {
//       swal({
//         title: "Nice",
//         text: "You've added a task. Click on it for more details",
//         icon: "success"

//       });.then(function(value){
//         if(value!=null){
//           form.submit();
//         }
//       });

//         event.preventDefault();


//     });
//   }
// }
// export { bindSweetAlertButtonDemo };

const swalButton = document.getElementById('sweet-alert-demo'), form = document.querySelector('form');
function bindSweetAlertButtonDemo() {
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', (event) => {
      swal({
        title: "Nice",
        text: "You've added a task. Click on it for more details",
        icon: "success"

      }).then(function(value){
        if(value!=null){
        form.submit();
        }
      });
        event.preventDefault();
    });
  }
}
bindSweetAlertButtonDemo();

// const swalButton = document.getElementById('sweet-alert-demo'), form = document.querySelector('form');
// function bindSweetAlertButtonDemo() {
//   if (swalButton) { // protect other pages
//     swalButton.addEventListener('click', (event) => {

//       }).then(function(value){
//         if(value!=null){
//         form.submit();
//         }
//       });
//         event.preventDefault();
//       swal({
//         title: "Nice",
//         text: "You've added a task. Click on it for more details",
//         icon: "success"
//     });
//   }
// }
// bindSweetAlertButtonDemo();








