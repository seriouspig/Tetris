document.addEventListener('DOMContentLoaded', () => {

    const width = 10

    const grid = document.querySelector('.grid')
    const scoreDisplay = document.querySelector('#score')
    

    for (let i=0; i < 200; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        grid.append(square)

    }

    let squares = Array.from(document.querySelectorAll('.square'))

    console.log(squares)

    // The Tetrominoes

    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2, width*2+1],
        [width, width*2, width*2+1, width*2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
      ]
    
      const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
      ]
    
      const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
      ]
    
      const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
      ]

      const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

      let currentPosition = 4
      let currentRotation = 0

      let random = Math.floor(Math.random() * theTetrominoes.length)

      let current = theTetrominoes[random][currentRotation]

      function draw() {
          current.forEach(index => {
              squares[currentPosition + index].classList.add('tetromino')
          } )
      }

      function undraw() {
          current.forEach(index => {
              squares[currentPosition + index].classList.remove('tetromino')
          })
      }

      timerId = setInterval(moveDown, 1000)

      function moveDown() {
          undraw()
          currentPosition += width
          draw()
      }

      

})