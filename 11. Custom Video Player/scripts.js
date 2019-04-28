const player = document.querySelector(".player")
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreen = player.querySelector('.fullscreen')

function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
  // if(video.paused) {
  //   video.play()
  // } else {
  //   video.pause()
  // }
}

//updatedButton cant be an arrow function - because we need to have access to 'this'
const updateButton = function() {
  const icon = this.paused  ? '▶' : '▮▮'
  toggle.textContent = icon  
}

const skip = function() {
  console.log(this);
  
  video.currentTime += parseFloat(this.dataset.skip)
}

const handleRangeUpdate = function() {
  video[this.name] = this.value
}

const handleProgress = function() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

const scrub = function(e) {
  video.currentTime = e.layerX / 640 * video.duration
  console.log(e);
}

const handleFullscreen = function() {
  document.fullscreen ? document.exitFullscreen() : player.requestFullscreen()
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate))

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

fullscreen.addEventListener('click', handleFullscreen)
