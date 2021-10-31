var eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', ' '];
var ru = ['а','б','ц','д','е','ф','г','х','и','ж','к','л','м','н','о','п','у','р','с','т','ю','в','в','х','у','з', ' '];

var translite = document.querySelector('.resultTranlite')

let button= document.querySelector('#btn');
button.addEventListener('click', ()=>{
    var input = document.querySelector('#input').value;
    input=input.toLowerCase();
    experience = input.split(''); //input.valu разбили на массив!


    function findStr(array, elem){
    var index = array.indexOf(elem);
    translite.append(document.createElement('span').textContent = ru[index])
   
    console.log(ru[index]);
    }
    
    for(i=0; i<experience.length;i++){
      let res = experience[i];
      findStr(eng, res);
    }

})




















// let textEng = eng.toLowerCase()
// console.log(textEng);
// for(var i=0; i<ttt.length; i++){
//     for(let j=0; j<ru.j;j++){
// if(eng[i]===ru[j]){
//     console.log(i);
// }
//     }
    
    
    
// }


// str = "тест еще тест";
// console.log(str.replace("тест","прошел"));
