export default function Navigation() {
  const list = document.getElementById('list-item');
  const add = document.getElementById('add-item');
  const contact = document.getElementById('contact-item');
  const showBook = document.querySelector('.showBooks');
  const addBook = document.querySelector('.addBook');
  const info = document.querySelector('.Info');

  list.addEventListener('click', () => {
    showBook.style.display = 'block';
    addBook.style.display = 'none';
    info.style.display = 'none';
  });

  add.addEventListener('click', () => {
    showBook.style.display = 'none';
    addBook.style.display = 'block';
    info.style.display = 'none';
  });

  contact.addEventListener('click', () => {
    showBook.style.display = 'none';
    addBook.style.display = 'none';
    info.style.display = 'block';
  });
}