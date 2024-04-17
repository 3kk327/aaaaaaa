function checkFirst() {
    let first = document.getElementById("first").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { 
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Верный ввод данных";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Введи от 2 до 15 символов!";
        return false;
    }
}

function checkLast() {
    let last = document.getElementById("last").value;
    let regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { 
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Верный ввод данных";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Введи от 2 до 20 символов!";
        return false;
    }
}

function checkDest() {
    let dest = document.getElementById("dest").value;
    let regex = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/;

    if (regex.test(dest)) { 
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Верный ввод данных";
        return true;
    }
    else {
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Введи от 2 до 50 символов!";
        return false;
    }
}

function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Верный ввод данных";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Неверный ввод данных!";
        return false;
    }
}

function outputData() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let dest = document.getElementById("dest").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let dateAndTime = date + " at " + time;
    let quantity = document.getElementById("quantity").value;
    let paymethod = document.getElementById("paymethod").value;

    if (first != "" && last != "" && dest != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Доброго времени суток, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Ваш заказ успешно оформлен! Мы свяжемся с Вами в ближайшее время. Ниже Вы найдёте информацию о Вашем заказе: </p>";
        document.getElementById("summary").innerHTML += "<p>Ваш номер телефона: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Ваш адрес: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Выбранные дата и время: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Количество пассажиров: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Удобный способ оплаты: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>Спасибо, что обратились в нашу компанию!</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Не все поля заполнены!";
    }
}

//заголовок контейнера формаобратного заказа
document.getElementById("ch_color_txt").onclick = function(){
    ch_color_txt.style.backgroundColor = "green";
}

//заголовок контейнера что вам необходимо?
let Moved = false;
document.getElementById('text_animation').onclick = function moveElement() {
    if (!Moved) {
        text_animation.style.transform = 'translate(50px, 0px)';
    } else {
        text_animation.style.transform = 'translate(0, 0)';
    }
    Moved = !Moved
}