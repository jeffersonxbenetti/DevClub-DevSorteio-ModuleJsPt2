function toRack() {
    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    alert(`O número sorteado foi ${Math.floor(Math.random() * (max - min + 1) + min)}`) 
}

