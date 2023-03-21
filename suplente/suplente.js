const table = document.getElementById("name-table");

// Array of names
var names = [
    "Fernandez: Irmã Azevedo",
    "Fernandez: Irmã Britto",
    "Fernandez: Irmã Cillo",
    "Fernandez: Irmã Jesus",
    "Fernandez: Irmã Barbosa",
    "Fernandez: Irmão Ferreira",
    "Fernandez: Irmão Gonçalves",
    "Fernandez: Irmão Maia",
    "Fernandez: Irmão Zarza",
    "Fernandez: Irmã Gandolfe",
    "Fernandez: Irmã Vitia",
    "Fernandez: Irmã Pinheiro",
    "Fernandez: Irmã Pires",
    "De Souza: Irmã Ferreira",
    "De Souza: Irmã Marmelo",
    "De Souza: Irmão Costa",
    "De Souza: Irmão Fernandes",
    "De Souza: Irmã Warken",
    "De Souza: Irmã Da Silva",
    "De Souza: Irmão Hader",
    "De Souza: Irmã Domingues",
    "De Souza: Irmã Ramos",
    "De Souza: Irmão Saraiva",
    "De Souza: Irmã Moura",
    "De Souza: Irmão Morales",
    "De Souza: Irmão Diogo",
    "Lira: Irmã Araujo",
    "Lira: Irmã Diaz",
    "Lira: Irmã Fontanez",
    "Lira: Irmã Uchoa",
    "Lira: Irmão Galvão",
    "Lira: Irmão Quezada",
    "Lira: Irmão Quintino",
    "Lira: Irmã Paredes",
    "Lira: Irmã Campuzano",
    "Lira: Irmã Torres",
    "Lira: Irmã Alencar",
    "Lira: Irmã Baldino",
    "Lira: Irmã Trigo",
    "Ribeiro: Irmã Flores",
    "Ribeiro: Irmã Ragazzo",
    "Ribeiro: Irmão Murilo",
    "Ribeiro: Irmão Farneti",
    "Ribeiro: Irmã Lisbôa",
    "Ribeiro: Irmã Mentado",
    "Ribeiro: Irmã Galeno",
    "Ribeiro: Irmã Los",
    "Ribeiro: Irmã Souza",
    "Ribeiro: Irmã Vielma",
    "Stéfany: Irmã Beatriz",
    "Stéfany: Irmão Arias",
    "Stéfany: Irmão Basso",
    "Stéfany: Irmão Cardoza",
    "Stéfany: Irmão Deivyd",
    "Stéfany: Irmão Diaz",
    "Stéfany: Irmão Lopes",
    "Stéfany: Irmão Martin",
    "Stéfany: Irmão Mentado",
    "Stéfany: Irmã Albino",
    "Stéfany: Irmã Soares",
    "Stéfany: Irmão Almeida",
    "Stéfany: Irmão Cruz",
    "Luz: Irmã Bragança",
    "Luz: Irmão Albuquerque",
    "Luz: Irmão Bomfim",
    "Luz: Irmão Cerqueira",
    "Luz: Irmão Jara",
    "Luz: Irmão Matos",
    "Luz: Irmão Gaspar",
    "Luz: Irmão Euller",
    "Luz: Irmão Thalyson",
    "Luz: Irmã Dos Anjos",
    "Luz: Irmã Yegros",
    "Costa: Irmão Santiago",
    "Costa: Irmão Romero",
    "Costa: Irmão Millan",
    "Costa: Irmão Matheus",
    "Costa: Irmão Reis",
    "Costa: Irmã Leviane",
    "Costa: Irmão Caetano",
    "Costa: Irmão Alves",
    "Costa: Irmã Cardona",
    "Costa: Irmão Montaño",
    "Costa: Irmã Rocio"
];

names.sort();

names.forEach(name => {
    // Create a new row element
    const row = document.createElement("tr");

    // Create the name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    row.appendChild(nameCell);

    // Create the checkbox cells
    for (let i = 0; i < 5; i++) {
        const checkboxCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);
    }

    // Create the text input cell
    const textInputCell = document.createElement("td");
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInputCell.appendChild(textInput);
    row.appendChild(textInputCell);

    // Add the row to the table
    table.appendChild(row);
});

// Seleciona o campo de busca
const campoBusca = document.querySelector('#busca-nome');

// Adiciona um ouvinte de evento ao campo de busca
campoBusca.addEventListener('keyup', () => {
    const termoBusca = campoBusca.value.toLowerCase();
    const tabela = document.querySelector('table tbody');
    const linhas = tabela.querySelectorAll('tr');

    // Percorre as linhas da tabela e verifica se o termo de busca está presente
    linhas.forEach(linha => {
        const colunas = linha.querySelectorAll('td');
        let corresponde = false;

        colunas.forEach(coluna => {
            if (coluna.textContent.toLowerCase().indexOf(termoBusca) !== -1) {
                corresponde = true;
            }
        });

        if (corresponde) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });
});

$(document).ready(function () {
    $('#btn-email').click(function () {
        var lista = getTableData();
        printTableData(lista);
    });
});

function getTableData() {
    var tableData = [];
    $('#name-table tr').each(function (row, tr) {
        if (row !== -1) { // ignore the table header row
            var rowData = {
                name: "",
                checkbox1: false,
                checkbox2: false,
                checkbox3: false,
                checkbox4: false,
                checkbox5: false,
                textInput: ""
            };
            $(tr).find('td').each(function (col, td) {
                if (col === 0) {
                    rowData.name = td.textContent;
                } else if (col >= 1 && col <= 5) {
                    rowData['checkbox' + col] = $(td).find('input[type="checkbox"]').prop('checked');
                } else if (col === 6) {
                    rowData.textInput = $(td).find('input[type="text"]').val();
                }
            });
            tableData.push(rowData);
        }
    });
    return tableData;
}

function printTableData(data) {
    var outputDiv = document.getElementById("mensagem");
    outputDiv.textContent = ""; // clear previous content
    for (var i = 0; i < data.length; i++) {
        var rowData = data[i];
        var hasTrueCheckbox = false;
        var trueCheckboxes = [];
        if (rowData.checkbox1) {
            hasTrueCheckbox = true;
            trueCheckboxes.push("Não compareceu na abertura");
        }
        if (rowData.checkbox2) {
            hasTrueCheckbox = true;
            trueCheckboxes.push("Não escreveu na pasta dos Presidentes do ramo");
        }
        if (rowData.checkbox3) {
            hasTrueCheckbox = true;
            trueCheckboxes.push("chegou atrasado/a");
        }
        if (rowData.checkbox4) {
            hasTrueCheckbox = true;
            trueCheckboxes.push("não escreveu no chat");
        }
        if (rowData.checkbox5) {
            hasTrueCheckbox = true;
            trueCheckboxes.push("não relatou o Ajudar Alguém");
        }
        if (hasTrueCheckbox) {
            var output = "Zona " + rowData.name + " - " + trueCheckboxes.join(", ");
            if (rowData.textInput) {
                output += " - Observações: " + rowData.textInput;
            }
            var p = document.createElement("p");
            p.textContent = output;
            outputDiv.appendChild(p);
        }
    }
}
function copyMessage() {
    var message = document.getElementById("mensagem").innerText;
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = message.replace(/<br>/g, "\n");
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

var copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", function () {
    copyMessage();
});
// Get references to the necessary DOM elements
const nomeSuplenteInput = document.getElementById("nome_suplente");
const mensagemElement = document.getElementById("mensagem");
const gerarRelatorioButton = document.getElementById("btn-nome");

// Add a click event listener to the "Gerar relatorio" button
gerarRelatorioButton.addEventListener("click", () => {
    // Get the value of the "nome_suplente" input field
    const nomeSuplente = nomeSuplenteInput.value;

    if (nomeSuplente.trim() === "") {
        alert("O nome do suplente não pode estar vazio.");
        return;
    }

    // Create a new <p> element
    const nomeSuplenteElement = document.createElement("p");

    // Set the text content of the <p> element to the nome_suplente value
    nomeSuplenteElement.textContent = `Relatorio feito por: ${nomeSuplente}.`;

    // Append the <p> element to the mensagem element
    mensagemElement.appendChild(nomeSuplenteElement);
});
