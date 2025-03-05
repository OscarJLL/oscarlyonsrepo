  // Add browser class to body
  document.addEventListener('DOMContentLoaded', function () {
    const userAgent = navigator.userAgent.toLowerCase();
    let browserName = '';

    if (userAgent.includes('edge')) {
      browserName = 'edge';
    } else if (userAgent.includes('chrome')) {
      browserName = 'chrome';
    } else if (userAgent.includes('firefox')) {
      browserName = 'firefox';
    } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      browserName = 'safari';
    } else if (userAgent.includes('opr') || userAgent.includes('opera')) {
      browserName = 'opera';
    } else if (userAgent.includes('msie') || userAgent.includes('trident')) {
      browserName = 'ie';
    }

    if (browserName) {
      document.body.classList.add('browser-' + browserName);
    }
  });
