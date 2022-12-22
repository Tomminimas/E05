const readline = require('readline-sync')

function xinChao(person) { // ten = t
    console.log(`Xin chào, mình tên là ${person.name}.`)
    console.log(`Mình sinh năm ${person.yearOfBirth} nha.`)
    console.log('Rất vui được gặp bạn.')

    const tuoi = 2022 - person.yearOfBirth

    return tuoi
}

function nhapTen() {
    let ten
    do {
        ten = readline.question('Nhap ten: ')
        if (ten.length == 0) {
            console.log('Vui long khong nhap chuoi rong')
        }
    } while (ten.length == 0)

    return ten
}

function nhapNamSinh() {
    let namSinh
    do {
        namSinh = Number(readline.question('Nhap nam sinh: '))
        if (namSinh < 1900 || namSinh > 2022) {
            console.log('Vui long nhap nam sinh hop le')
        }
    } while (namSinh < 1900 || namSinh > 2022)

    return namSinh
}

function cnXinChao() {
    const t = nhapTen()
    const n = nhapNamSinh()

    const person = {
        name: t,
        yearOfBirth: n,
    }
    xinChao(person)
}

cnXinChao()