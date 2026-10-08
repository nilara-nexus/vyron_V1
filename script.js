const video = document.querySelector(".hero-video");
const soundBtn = document.getElementById("soundBtn");
const pulseBtn = document.getElementById("pulseBtn");

soundBtn?.addEventListener("click", () => {
  video.muted = !video.muted;
  soundBtn.innerHTML = video.muted ? 'Sound on <span>◉</span>' : 'Sound off <span>◉</span>';
  if (!video.muted) video.play().catch(()=>{});
});

pulseBtn?.addEventListener("click", () => {
  document.querySelector(".cockpit-image").animate(
    [{filter:"brightness(1)"},{filter:"brightness(1.8) saturate(1.5)"},{filter:"brightness(1)"}],
    {duration:900,easing:"ease-out"}
  );
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:0.12});

document.querySelectorAll("section .copy, section .overlay, .cockpit-copy, .final-copy")
  .forEach(el => { el.classList.add("reveal"); observer.observe(el); });

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:"smooth"}); }
  });
});
