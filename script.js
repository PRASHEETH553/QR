document.getElementById('generateBtn').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value.trim();
    const canvas = document.getElementById('qrcode');
    const qr = new QRious({
        element: canvas,
        value: url,
        size: 150
    });

    if (url) {
        document.getElementById('downloadBtn').style.display = 'inline-block'; // Show download button
    } else {
        alert("Please enter a URL.");
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const canvas = document.getElementById('qrcode');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
});
