const revealImg = () => {
  let reveals = document.querySelectorAll('.reveal-img');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 500;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('done');
    } else {
      reveals[i].classList.remove('done');
    }
  }
};

export default revealImg;
