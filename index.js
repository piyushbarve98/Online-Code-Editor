// Get references to DOM elements
const htmlInput = document.getElementById('html');
const cssInput = document.getElementById('css');
const jsInput = document.getElementById('js');
const previewDiv = document.getElementById('preview');
const runButton = document.getElementById('run');

//for toggle
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  
});


// Handle button click
runButton.addEventListener('click', () => {
    // Clear previous output
    previewDiv.innerHTML = '';
    console.log("New Run");
    // Build HTML document
    const doc = `
        <html>
        <head>
            <style>${cssInput.value}</style>
        </head>
        <body>${htmlInput.value}</body>
        <script>${jsInput.value}</script>
        </html>
    `;
    
    // Create iframe to display result
    const iframe = document.createElement('iframe');
    iframe.srcdoc = doc;
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '400px';
    
    previewDiv.appendChild(iframe);
});
