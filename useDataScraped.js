var fs = require('fs')

const array = JSON.parse(fs.readFileSync('./angeloniData.txt', 'utf8'))
const cervejas = []

array.forEach(function(element) {
  if (element.desc.includes('Cerveja') || element.desc.includes('cerveja')) {
    cervejas.push(element)
  }
})

if (cervejas.length) {
  console.log(cervejas)
}
else {
  console.log('Sem cervejas em promoção')
}