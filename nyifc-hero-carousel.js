(function () {
  'use strict';

  // ─── CONFIGURATION ──────────────────────────────────────────────────────────
  // Add your Squarespace image URLs here. Upload photos via Squarespace,
  // then right-click the image > "Copy image address" to get the URL.
  var IMAGES = [
    'https://images.squarespace-cdn.com/content/v1/63edbd8f26e6ab49f9f9e0db/c73b79a1-78b3-4579-8b46-3a9b63903ccf/CSL+FIRST.png',
    'https://images.squarespace-cdn.com/content/63edbd8f26e6ab49f9f9e0db/ec7dfc33-e5f0-4158-bcf0-3a5b9de262eb/2.png?content-type=image%2Fpng',
    'https://images.squarespace-cdn.com/content/63edbd8f26e6ab49f9f9e0db/96cc6bcd-9e7e-4f6d-b613-a8933f703d9e/3.png?content-type=image%2Fpng',
    'https://images.squarespace-cdn.com/content/63edbd8f26e6ab49f9f9e0db/0661eff2-0449-4206-a25f-1535776b5054/4.png?content-type=image%2Fpng',
    'https://images.squarespace-cdn.com/content/63edbd8f26e6ab49f9f9e0db/32b13ce2-8da2-423b-8120-f6777e6a7903/5.png?content-type=image%2Fpng',
    'https://images.squarespace-cdn.com/content/63edbd8f26e6ab49f9f9e0db/47dc5465-a213-4dad-a8d5-871055fd0e2d/6.png?content-type=image%2Fpng',
    'https://images.squarespace-cdn.com/content/63edbd8f26e6ab49f9f9e0db/2609ab72-f3b9-4069-b1ea-aabc583982fa/7.png?content-type=image%2Fpng'
  ];

  var INTERVAL = 8000;       // Time per image in milliseconds (8 seconds)
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
