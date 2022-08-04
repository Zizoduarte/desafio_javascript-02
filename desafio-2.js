

let student1 = {
  name: "Luiz",
  note1: 7,
  note2: 5,
  average: finalMedia
}

let student2 = {
  name: "Tarcisio",
  note1: 8,
  note2: 10,
  average: finalMedia
}

let student3 = {
  name: "Carla",
  note1: 9,
  note2: 6,
  average: finalMedia
}

function finalMedia(){
   return (this.note1 + this.note2) /2
}

if(student1.average() >= 7){
  alert(` A média do aluno ${student1.name} é: ${student1.average()}. 
Parabéns, ${student1.name}! Você foi aprovado no concurso!  `)
}else{
 alert(`A média do aluno ${student1.name} é: ${student1.average()}.
Não foi dessa vez ${student1.name}! Tente novamente.`)
}

if(student2.average() >= 7){
 alert(` A média do aluno ${student2.name} é: ${student2.average()}. 
Parabéns, ${student2.name}! Você foi aprovado no concurso!  `)
}else{
alert(` A média do aluno ${student2.name} é: ${student2.average()}.
Não foi dessa vez ${student2.name}! Tente novamente.`)
}

if(student3.average() >= 7){
alert(` A média do aluno ${student3.name} é: ${student3.average()}. 
Parabéns, ${student3.name}! Você foi aprovado no concurso!  `)
}else{
alert(`A média do aluno ${student3.name} é: ${student3.average()}. 
Não foi dessa vez ${student3.name}! Tente novamente.`)
}