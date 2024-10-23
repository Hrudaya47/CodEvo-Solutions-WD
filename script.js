function summarizeText() {
    const inputText = document.getElementById('inputText').value;
    const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);
    
    const summaryLength = Math.max(1, Math.floor(sentences.length / 3));
    const summarySentences = sentences.slice(0, summaryLength);
    
    const summaryText = summarySentences.join('. ') + (summarySentences.length < sentences.length ? '...' : '');
    document.getElementById('summaryText').innerText = summaryText;
}
