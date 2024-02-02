function pegardados() {
    var numerotelefone = "+5511942426561";

    var Nome = document.querySelector(".Nome").value;
    var Telefone = document.querySelector(".Telefone").value;
    var Mensagem = document.querySelector(".Mensagem").value;

    if (Nome != "" && Telefone != "" && Mensagem != "") {

        var preenchido = this.enviardados(numerotelefone, Nome, Telefone, Mensagem);

    } else {
        alert("Preencha os campos solicitados!")
    }

    //this.enviardados(nome, telefone, sms);

}

function enviardados(numerotelefone, Nome, Telefone, Mensagem) {

    var url = "https://wa.me/" + numerotelefone + "?text="
        + " nome: " + Nome + "%0a"
        + " Telefone : " + Telefone + "%0a"
        + " nome: " + Mensagem + "%0a";

    window.open(url).focus();
}