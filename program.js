function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}
function toggleTextSize() {
    document.body.classList.toggle('large-text');
}
function speakText() {
    let text = document.getElementById('content').innerText;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'uk-UA';
    window.speechSynthesis.speak(speech);
}
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}