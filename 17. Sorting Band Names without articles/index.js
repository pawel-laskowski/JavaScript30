const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim()
}

// const sortedBands = bands.sort((a, b) => {

//     const firstBand = ['The', 'An', 'A'].indexOf(a.split(' ')[0]) > -1 ? a.split(' ')[1] : a.split(' ')[0]
//     const secondBand = ['The', 'An', 'A'].indexOf(b.split(' ')[0]) > -1 ? b.split(' ')[1] : b.split(' ')[0]
    
//     if (firstBand < secondBand) {
//         return -1
//     } else {
//         return 1
//     } 

// })

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1)

const bandsList = document.querySelector('#bands')

sortedBands.forEach(e => {
    band = document.createElement('li')
    band.innerHTML = e
    bandsList.appendChild(band)

})
