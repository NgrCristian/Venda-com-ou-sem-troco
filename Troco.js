let n1 = Number(prompt('Digite preço unitario do produto:'))
let n2 = Number(prompt('Digite quantidade comprada:'))
let n3 = Number(prompt('Digite valor pago:'))

if(n3 - (n1*n2) == 0){
  alert(`Preço Unitario:${n1}`)
  alert(`Quantidade Comprada: ${n2}`)
  alert('Nao houve troco')
}

else{
  conta = n3-(n1*n2)
  alert(`Preço Unitario: ${n1}`)
  alert(`Quantidade Comprada:${n2}`)
  alert(`O troco vai ser de R$${conta}`)
}
