// NAV BAR TOGGLE MENU// 

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}
//TOGGLE ENDS//



const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

// select all q elements

for(let i = 0; i < q.length; i++) {
  //add click event to alll q elements
  q[i].addEventListener('click', () => {
  // open the a element with the same 'i' as the clicked 'q' element
  a[i].classList.toggle('a-opened');
  //rotate the arr element with the same 'i' as the clicked 'q' el;ement
  arr[i].classList.toggle('arrow-rotated');
});
}

/*
const button = document.getElementById('Subscribebtn');
 button.addEventListener('click', () => {
  if (button.classList.contains('subscribed')) {
    button.classList.remove('subscribed');
    button.textContent = 'subscribe';
      }
      else {
        button.classList.add('subscribed');
        button.textContent = 'subscribed';
      }
 });*/