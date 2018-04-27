//I want to create a button that, when clicked, shows me a sidebar

//First step is to create a button markupvand styles

//What happens when the button gets clicked once, twice, more times?
//The sidebar show up when the button is clicked once. This sidebar then goes away when the button is clicked another time. It shows up again when the button is clicked again

//How do we know whether the sidebar is shown or hidden? If the sidebarhas a .is-hidden class, then it should be hidden from view.


//What happens when the button gets clicked once, more? Sidebar shows up when you clicked first...
//Sidebar dissapears when you clicked again...
const button = document.querySelector('.btn')
const sidebar = document.querySelector('.sidebar')

button.addEventListener('click', function() {
  if (sidebar.classList.contains('is-hidden')) {
    sidebar.classList.remove('is-hidden')
  } else {
    sidebar.classList.add('is-hidden')
  }
})
//To make it shorter we can use "toggle" method


