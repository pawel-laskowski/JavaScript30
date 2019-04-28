window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recogonition = new SpeechRecognition()
recogonition.interimResults = true


let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recogonition.addEventListener('result', e => {
    console.log(e.results);
    let transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
        
        
    if (transcript.includes('kot')) {
        // transcript = transcript.replace(new RegExp('kot', 'g'), '🐈')
        transcript = transcript.replace(/kot/g, '🐈')
    }    

    p.textContent = transcript

    if (e.results[0].isFinal) {
        p = document.createElement('p')
        words.appendChild(p)
    }

})

recogonition.addEventListener('end', recogonition.start)
recogonition.start()