const openMenu= () =>{document.getElementById('mobileMenu').style.width="80%";}
const closeMenu= () =>{document.getElementById('mobileMenu').style.width="0";}

// Moving logos animation
const root = document.documentElement;
const marqueeElementDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector(".marqueeContent");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);
for (let i = 0; i < marqueeElementDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// blog section eye and comment
const eye = document.getElementsByClassName("blogIcon");
//  console.log(eye);
for (let i of eye) {
    i.addEventListener('click', () => {
        i.classList.toggle("colorGreen");
    })
}

// whatWeDo section accordian image change

const labels = document.querySelectorAll(".imageChange");

labels.forEach((elem) => {
    // console.log(elem);
    elem.addEventListener('click', () => {
        const value = elem.getAttribute('data-value');
        // console.log(value);
        const meaw = document.getElementById('meaw');
        // console.log(meaw);
        meaw.setAttribute('src', `/images/imageChange/whatWeDoImage${value}.jpg`)
    })
})



    


    const workSection= document.querySelector('#animatedNumber');
    console.log(workSection);
    const observer=new IntersectionObserver((entries,observerr)=>{
      const entry=entries;
      console.log(entry);
      if(entry.isIntersecting == true) return ;
           // animate number counter

    const counterNum = document.querySelectorAll(".animationNumbers");

    const speed = 5;

    counterNum.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(curElem.innerText);
        // console.log(initialNum);

        const incrementNumber = Math.trunc(targetNumber / speed);
        // console.log(incrementNumber);

        if (initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}`;
          setTimeout(updateNumber, 500);
        }
      };

      updateNumber();
    });
      observerr.unobserve(workSection);
    },{
      
      threshold:0,
    })

    observer.observe(workSection);