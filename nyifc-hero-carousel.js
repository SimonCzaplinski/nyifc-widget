(function () {
  'use strict';

  // ─── CONFIGURATION ──────────────────────────────────────────────────────────
  // Add your Squarespace image URLs here. Upload photos via Squarespace,
  // then right-click the image > "Copy image address" to get the URL.
  var IMAGES = [
    'https://images.squarespace-cdn.com/content/v1/63edbd8f26e6ab49f9f9e0db/c73b79a1-78b3-4579-8b46-3a9b63903ccf/CSL+FIRST.png'
    // Add more image URLs here, separated by commas:
    // 'https://images.squarespace-cdn.com/content/v1/...',
    // 'https://images.squarespace-cdn.com/content/v1/...',
  ];

  var INTERVAL = 5000;       // Time per image in milliseconds (5 seconds)
  var FADE_DURATION = 1200;  // Crossfade duration in milliseconds

  // ─── TARGET SECTION ─────────────────────────────────────────────────────────
  var SECTION_ID = '63ef6655350e132d0b50f48f';

  // ─── INIT ───────────────────────────────────────────────────────────────────
  function init() {
    if (IMAGES.length < 2) return; // Need at least 2 images to carousel

    var section = document.querySelector('[data-section-id="' + SECTION_ID + '"]');
    if (!section) return;

    var bgContent = section.querySelector('.section-background-content');
    if (!bgContent) return;

    var originalImg = bgContent.querySelector('img');

    // Get the computed object-position from the original image (focal point)
    var objPos = '50% 50%';
    if (originalImg) {
      var cs = window.getComputedStyle(originalImg);
      if (cs.objectPosition) objPos = cs.objectPosition;
    }

    // Hide original image
    if (originalImg) originalImg.style.display = 'none';

    // Create carousel container
    var container = document.createElement('div');
    container.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;';

    // Create image layers
    var layers = [];
    IMAGES.forEach(function (src, i) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.draggable = false;
      img.style.cssText = [
        'position:absolute',
        'top:0',
        'left:0',
        'width:100%',
        'height:100%',
        'object-fit:cover',
        'object-position:' + objPos,
        'opacity:' + (i === 0 ? '1' : '0'),
        'transition:opacity ' + FADE_DURATION + 'ms ease-in-out',
        'pointer-events:none'
      ].join(';') + ';';
      container.appendChild(img);
      layers.push(img);
    });

    // Insert carousel before any overlay
    bgContent.appendChild(container);

    // Start rotation
    var current = 0;
    setInterval(function () {
      var next = (current + 1) % layers.length;
      layers[current].style.opacity = '0';
      layers[next].style.opacity = '1';
      current = next;
    }, INTERVAL);
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
