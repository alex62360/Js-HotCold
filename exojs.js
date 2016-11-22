var nombreR = Math.floor(Math.random() * 101);
var i = 0;

function controle() {
    i++;

    var nombreC = document.getElementById('nombreR').value;


    var result = Math.abs(nombreR - nombreC);


    if (result == 0) {
        document.getElementById('in').innerHTML = "Victoire";
        document.getElementById('in').style.color = "rgb(231, 210, 23)";
        document.getElementById('test').style.backgroundImage = "url('trophee.gif')";

    } else if (result < 5) {
        document.getElementById('in').innerHTML = "Tu es chaud";
        document.getElementById('in').style.color = "rgb(255, 0, 0)";
        document.getElementById('test').style.backgroundImage = "url('chaud.gif')";
    } else if (result < 10) {
        document.getElementById('in').innerHTML = "Tu te réchauffe";
        document.getElementById('in').style.color = "rgb(65, 177, 174)";
        document.getElementById('test').style.backgroundImage = "url('fond.gif')";
    } else if (result < 20) {
        document.getElementById('in').innerHTML = "Tu géles";
        document.getElementById('in').style.color = "rgb(0, 224, 255)";
        document.getElementById('test').style.backgroundImage = "url('gelé.gif')";
    } else {
        document.getElementById('in').innerHTML = "Tu es gélé..";
        document.getElementById('in').style.color = "rgb(0, 224, 255)";
        document.getElementById('test').style.backgroundImage = "url('bnq.jpg')";
    }
    console.log(i);

    return false;

}
