/**

 * @see {@link https://developer.chrome.com/extensions/manifest}

 */

module.exports = {

    name: 'PDF Export for Figma',
  
    description: 'Export a PDF file containing all the frames in the current page. A new PDF option will be added to Figma\'s export picker.',
  
    author: 'jachui@microsoft.com',
  
    version: '1.2.1',
  
    icons: {
  
      '16': 'icons/16.png',
  
      '48': 'icons/48.png',
  
      '128': 'icons/128.png'
  
    },
  
    /**
  
     * @see {@link https://developer.chrome.com/extensions/declare_permissions}
  
     */
  
    permissions: [
  
      '<all_urls>',
  
      '*://*/*',
  
      'declarativeContent'
  
    ],
  
    content_scripts: [{
  
      js: [
  
        'js/manifest.js',
  
        'js/vendor.js',
  
        'js/content.js'
  
      ],
  
      run_at: 'document_end',
  
      matches: [
  
        'https://www.figma.com/file/*',
  
        'http://www.figma.com/file/*',
  
        'https://www.figma.com/files/*',
  
        'http://www.figma.com/files/*'
  
      ],
  
      all_frames: true
  
    }],
  
    manifest_version: 2,
  
    content_security_policy: "script-src 'self'; object-src 'self'",
  
    web_accessible_resources: [
  
      'js/content.js',
  
      'js/pageScript.js',
  
    //   'js/pdfmake.js'
        'js/index.js'
  
    ]
  
  }