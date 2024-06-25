document.addEventListener("DOMContentLoaded", function() {
    let searchbar = document.getElementById("searchbar");
    let buttons = document.querySelectorAll(".bc");
    let tabela = document.querySelector("#tabela");

    buttons.forEach(element => {
        element.addEventListener('click', function () {
            switch (element.id) {
                case "add":
                    // Criando os elementos
                    let novalinha = document.createElement("tr");
                    let desc = document.createElement("td");
                    let del = document.createElement("td");

                    // Passando valor para esses elementos
                    desc.textContent = searchbar.value;
                    del.innerHTML = "&#128465;&#65039;";

                    // Passando as classes para esses elementos, para que sigam o padrão
                    desc.classList.add('content');
                    del.classList.add('bc');
                    del.title = "EXCLUIR";

                    // Adicionando os elementos td ao elemento tr
                    novalinha.appendChild(desc);
                    novalinha.appendChild(del);

                    // Adicionando o tr à tabela HTML
                    tabela.appendChild(novalinha);

                    // Adicionando o evento de click ao botão de deletar
                    del.addEventListener('click', function () {
                        trdel(this);
                    });

                    // Limpar o campo de entrada
                    searchbar.value = "";
                    break;

                case "search":
                    // Passando o valor na searchbar para lowercase para futura comparação
                    let value = searchbar.value.toLowerCase();
                    let elementstd = document.querySelectorAll("tr");

                    // Transformando o objeto em uma array e depois fazendo uma ação para cada elemento
                    Array.from(elementstd).forEach(item => {
                        let value_item = item.textContent.toLowerCase();
                        if (value_item.indexOf(value) >= 0) {
                            item.style.display = "table-row";
                        } else {
                            item.style.display = "none";
                        }
                        if (value == "") {
                            item.style.display = "table-row";
                        }
                    });
                    break;
            }
        });
    });

    function trdel(element) {
        let tr = element.parentNode;
        tr.parentNode.removeChild(tr);
    }
});
