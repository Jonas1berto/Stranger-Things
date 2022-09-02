import { subscribeToHellfireClub } from './firebase/hellfire-clube.js'

const txtName = document.getElementById('txtName')
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')

const btnTop = document.querySelector('#backToTop')


btnSubscribe.addEventListener('click', async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value
  }
  // Salvar no banco de dados
  const subscriptionId = await subscribeToHellfireClub(subscription)

  txtName.value = ''
  txtEmail.value = ''
  txtLevel.value = ''
  txtCharacter.value = ''

  alert('Inscrito com sucesso')
})

// quando rolar a página 100px do topo para baixo, o botão aparece

window.onscroll = function () {
  scrollFunction()
}
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btnTop.style.display = 'block'
  } else {
    btnTop.style.display = 'none'
  }
}

// quando clicar no botão, a pagina voltará para o inicio

btnTop.addEventListener('click', function () {
  window.scrollTo(0, 0)
})
