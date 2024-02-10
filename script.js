let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        });
        sec.classList.add('show-animate');
    }
    else{
        sec.classList.remove('show-animate');
        }
        
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > -100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};


       var typed = new Typed(".auto-type", {
    strings: [
        "Hidden Costs in E-commerce",
        "Uncover Additional Expenses",
        "Ensure Accurate Budgeting",
        "Consider Payment Gateway Fees",
        "Account for Shipping Costs",
        "Understand Tax Compliance",
        "Beware of Customs Duties",
        "Factor in Return and Refund Costs",
        "Account for E-commerce Platform Fees",
        "Consider Security and Compliance",
        "Include Marketing and Advertising Expenses",
        "Factor in Hosting and Maintenance Costs",
        "Plan for Technology Integration Expenses",
        "Don't Forget Customer Service Costs",
        "Ensure Transparent Communication with Customers"
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

function clearOutput() {
  // Select the result div
  var resultDiv = document.querySelector('.scraper-result');
  
  // If the result div exists, clear its content
  if (resultDiv) {
    resultDiv.innerHTML = '';
  }
}

    