/* 
  🔥 Project: Animated Button
  📝 Created by: Shubhanjali Pandey
  🎯 CSI Internship - Week 5 Task
*/

const button = document.getElementById('magicButton');

button.addEventListener('click', function (e) {
  const ripple = button.querySelector('.ripple');
  const rect = button.getBoundingClientRect();
  const size = Math.max(button.clientWidth, button.clientHeight);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  button.classList.remove('ripple-animate');
  void button.offsetWidth; // Force reflow for restart
  button.classList.add('ripple-animate');
});
