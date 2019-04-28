const times = [... document.querySelectorAll('[data-time]')].map(e => e.dataset.time)

function getSeconds(time) {
    const [mins, secs] = time.split(':')
    return parseInt(mins) * 60 + parseInt(secs)
}

const seconds = times.reduce((a, b) => a + getSeconds(b), 0 )

let secondsLeft = seconds
const hours = Math.floor(secondsLeft / 3600)
secondsLeft = secondsLeft % 3600
const minutes = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60
console.log(hours + ':' + minutes + ':' + secondsLeft);
