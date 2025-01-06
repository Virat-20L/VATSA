// Change navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})


// show/hide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');
        // change icon 
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    });
});


// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click", closeNav)


// about
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".achievement_card h3");

    counters.forEach(counter => {
        const target = parseInt(counter.innerText.replace(/[^\d]/g, ""), 10); // Remove non-numeric characters
        let count = 0;
        const increment = Math.ceil(target / 100); // Adjust speed based on target value

        const updateCounter = () => {
            count += increment;
            if (count >= target) {
                count = target; // Stop at the target
                counter.innerText = `${target}${counter.innerText.includes('+') ? '+' : ''}`;
            } else {
                counter.innerText = `${count}${counter.innerText.includes('+') ? '+' : ''}`;
                requestAnimationFrame(updateCounter); // Smooth animation
            }
        };

        updateCounter();
    });
});
