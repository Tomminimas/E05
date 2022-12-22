const readline = require('readline-sync')

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

const person = {
    ten : "",
    namSinh : "",
    diaChi: {
        soNha : "",
        duong : "",
        phuong_xa : "",
        tinh_tpho : "",
}
}
function nhapThongTin(person) {
    person.ten = nhapTen()
    person.namSinh = nhapNamSinh()
    person.diaChi.soNha = readline.question('Nhap so nha: ')
    person.diaChi.duong = readline.question('Nhap duong: ')
    person.diaChi.phuong_xa = readline.question('Nhap phuong/xa: ')
    person.diaChi.tinh_tpho = readline.question('Nhap tinh/tpho: ')
}
function ktraDiaChi(person) {
    if (person.diaChi.tinh_tpho == "TPHCM" || "Thành phố Hồ Chí Minh") {
        console.log('Ban nay o TPHCM');
    }
    else {
        console.log('Ban nay khong o TPHCM');
    }
}
function main() {
    nhapThongTin(person) 
    ktraDiaChi(person)
}

main()

