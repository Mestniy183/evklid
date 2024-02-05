/*let btn = document.createElement('button')
btn.textContent = 'Показать список'
document.body.append(btn)

let allStudents = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
];
let visible = false
function createStudentsList(listArr) {
    let ul = document.createElement('ul');
    ul.id = 'list'
    document.body.append(ul);
    for (let i = 0; i < listArr.length; i++) {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        let span = document.createElement('span');
        ul.append(li);
        h2.textContent = listArr[i].name;
        li.append(h2);
        span.textContent = `Возраст: ${listArr[i].age}`
        li.append(span);
    }

}

btn.addEventListener('click', function (event) {
    //console.log('Произошло событие', event.target)
    const list = document.getElementById('list')
    if (visible) {
        list.remove()
        visible = false
    } else {
        createStudentsList(allStudents);
        visible = true
    }

})*/

