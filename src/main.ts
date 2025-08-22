// main.ts
import { renderInfo } from './info.js';

// Simple gallery data
const galleryImages = [
  'images/Gallery/Mantle.jpg',
  'images/Gallery/Monster Welder.jpg',
  'images/Gallery/Ornate Railing.jpg',
  'images/Gallery/Second-Floor Exterior Rail.jpg',
  'images/Gallery/Short exterior rail.jpg',
  'images/Gallery/Sports team chair.jpg',
  'images/Gallery/Staircase.jpg',
  'images/Gallery/Star wars.jpg',
  'images/Gallery/Under Staircase.jpg'
];

let currentIndex = 0;

// Simple lightbox functions
function openLightbox(index: number): void {
  currentIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img') as HTMLImageElement;
  
  if (lightbox && img && galleryImages[index]) {
    img.src = galleryImages[index];
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox(): void {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function nextImage(): void {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  const img = document.getElementById('lightbox-img') as HTMLImageElement;
  const newSrc = galleryImages[currentIndex];
  if (img && newSrc) {
    img.src = newSrc;
  }
}

function prevImage(): void {
  currentIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  const img = document.getElementById('lightbox-img') as HTMLImageElement;
  const newSrc = galleryImages[currentIndex];
  if (img && newSrc) {
    img.src = newSrc;
  }
}

// Make functions global
(window as any).openLightbox = openLightbox;
(window as any).closeLightbox = closeLightbox;
(window as any).nextImage = nextImage;
(window as any).prevImage = prevImage;

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (app) {
    app.innerHTML = renderInfo();
  }
  
  // Create lightbox outside of main content
  const lightboxHTML = `
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
      <span class="close">&times;</span>
      <img id="lightbox-img" src="" alt="">
      <button class="nav-btn prev" onclick="event.stopPropagation(); prevImage()">&#8249;</button>
      <button class="nav-btn next" onclick="event.stopPropagation(); nextImage()">&#8250;</button>
    </div>
  `;
  
  // Add lightbox to body, not to app content
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  
  // Simple keyboard controls
  document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'flex') {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
  });
});
