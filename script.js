function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //OUTRA FORMA DE FAZER POR MEIO DE CONDICIONAIS
  /* if(html.classList.contains('light')) {
      html.classList.remove('light')
  }
  else {html.classList.add('light')
  } */

  //substituir a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode, adcionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-marcus-light.png")
    img.setAttribute("alt","Foto de Marcus Leite usando chapéu, camisa aberta vermelha e camisa branca por dentro, com a mão na cabeça")
  } else {
    //se não tiver light mode, MANTER a imagem normal
    img.setAttribute("src", "./assets/assets/avatar-marcus.png")
  }
}
