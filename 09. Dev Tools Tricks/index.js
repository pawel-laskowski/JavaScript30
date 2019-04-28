const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';

  if (confirm('clear?')) console.clear()
}

    // Regular

    // Interpolated

    console.log('Hello i am a %s string', 'php')

    // Styled
    console.log('%c hello', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');
    
    // warning!

    console.warn('OH Noo');
    
    // Error :|
    console.error('Shit');

    // Info
    console.info('Crocodiles eat 3-4 people per year')
    // Testing
    console.assert(1===2, 'That is wrong!')
    // clearing

    // Viewing DOM Elements

    // Grouping together

    // counting

    // timing
