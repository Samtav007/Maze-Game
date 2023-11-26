let nickName = document.getElementById('nickname')

const next = document.getElementById('start_button')

next.onclick=()=>{
    localStorage.setItem('nickname',nickName.value)
}