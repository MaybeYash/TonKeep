document.getElementById('connectButton').addEventListener('click', function() {
    // Replace this URL with your wallet connection logic
    const url = "tc://?v=2&id=72903ec1975511c85e7f0b004294a98fb45acde60396b187dd8caec7704b621e&r=%7B%22manifestUrl%22%3A%22https%3A%2F%2Fmajor.glados.app%2Ftonconnect-manifest.json%22%2C%22items%22%3A%5B%7B%22name%22%3A%22ton_addr%22%7D%5D%7D";
    window.location.href = url;
});
