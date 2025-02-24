<!DOCTYPE html>

<html>
<head>
  <meta http-equiv="CONTENT-TYPE" content="text/html; charset=UTF-8">
  <title>Hello, World!</title>
</head>
<body style="background: black; color:white;">
  
  
  <h3  id="javascript" >
    
  </h3>
  <h3 id="javascript"> 😅 </h3>
  
  <h1 id="drop">❤️</h1>
   
  
  <script>
  let name = prompt('Game by Richard Okon😅 \n whats ur name');
  let dom = document.querySelector('#javascript')
  //dom.addEventListener( 'click',catchHeart );
  drop.onclick = catchHeart;
   let rand= document.querySelector('#drop');
  let c = 0;
  let score=0;
function catchHeart(){
  //clearInterval(sets);
  score++; 
  c = c - 10;
 }

function count(){
       c +=1
       let color = c%2==1? "blue" : "red";
   
      dom.style.color = color
      let d = Math.random()*360
      let e  = Math.floor(d)
      dom.innerText = `${name} touch the heart emoji to bring it higher and make your score higher, it must not fall  \n score:   ${score}`;
      rand.style.marginTop = c*12+'px'
      rand.style.marginLeft = e + 'px'
      rand.style.marginTop < -1+'px'  ? document.write( `you won with a score of ${score} `  ) : null
     c==57 ? alert(`game over \n you scored ${score}`) : null
     c==57 ? clearInterval(sets) : null
       c==57 ? document.write(`game over,  it finally fell, and you scored ${score}`) : null
  }
     let sets = setInterval(count,200);
 
//😉😔😅🙄🫡🤣😂🤤🫣😏❤️💰
  </script>
</body>
</html>
