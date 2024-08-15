const navLinks = document.querySelectorAll('.nav-link');
const table = document.querySelectorAll('.tab-pane');
navLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(link);
            
           
            navLinks.forEach(nav => nav.classList.remove('active'));
            table.forEach(pane => pane.classList.remove('show', 'active','fade'));

            
            link.classList.add('active');

            table[index].classList.add('show', 'active','fade');
        });
    });