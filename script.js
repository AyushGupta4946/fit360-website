

gsap.to("#nav",{
    backgroundColor:"#000",
    height:"80px",
    duration:0.6,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:" top -11%",
        scrub:1
    }
});


gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-content",{
    y:50,
    duration:1,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 70%",
        scrub:3
    }
})


document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const openModalNav = document.getElementById("openModalNav");
    const openModalBtnFooter = document.getElementById("openModalFooter");
    const closeModalIcon = document.getElementById("closeModal");
    modal.style.display = "none";

    openModalBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
    openModalBtnFooter.addEventListener("click", () => {
        modal.style.display = "flex";
    });
    openModalNav.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeModalIcon.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Ensure the modal is hidden by default when the page loads
});

document.getElementById('open-nav').addEventListener('click',()=>{

    document.getElementById('nav-container').classList.add('active')
})

document.getElementById('close-menu').addEventListener('click',()=>{
    document.getElementById('nav-container').classList.remove('active')
})


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_btf39tk';
    const templateID = 'template_hqledgl';

    emailjs.sendForm(serviceID, templateID, this)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
        }, (error) => {
            console.log('FAILED...', error);
            alert('Failed to send email. Please try again.');
        });
});



///  getting contact form data
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Get a reference to the Firebase database service
    var database = firebase.database();

    // Save form data to Firebase
    database.ref('contacts').push({
      name: name,
      email: email,
      message: message
    }).then(function() {
      // Clear form fields after successful submission
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';

      alert('Your message has been submitted successfully!');
    }).catch(function(error) {
      console.error('Error writing to Firebase Database', error);
      alert('There was an error submitting your message. Please try again.');
    });
  });