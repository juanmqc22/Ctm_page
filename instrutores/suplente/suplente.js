const table = document.getElementById("name-table");

// Array of names
var names = [
    "Irmã Azevedo",
    "Irmã Britto",
    "Irmã Cillo",
    "Irmã Jesus",
    "Irmã Barbosa",
    "Irmão Ferreira",
    "Irmão Gonçalves",
    "Irmão Maia",
    "Irmão Zarza",
    "Irmã Gandolfe",
    "Irmã Vitia",
    "Irmã Pinheiro",
    "Irmã Pires",
    "Irmã Ferreira",
    "Irmã Marmelo",
    "Irmão Costa",
    "Irmão Fernandes",
    "Irmã Warken",
    "Irmã Da Silva",
    "Irmão Hader",
    "Irmã Domingues",
    "Irmã Ramos",
    "Irmão Saraiva",
    "Irmã Moura",
    "Irmão Morales",
    "Irmão Diogo",
    "Irmã Flores",
    "Irmã Ragazzo",
    "Irmão Murilo",
    "Irmão Farneti",
    "Irmã Lisbôa",
    "Irmã Mentado",
    "Irmã Galeno",
    "Irmã Los",
    "Irmã Souza",
    "Irmã Vielma",
    "Irmã Beatriz",
    "Irmão Arias",
    "Irmão Basso",
    "Irmão Cardoza",
    "Irmão Deivyd",
    "Irmão Diaz",
    "Irmão Lopes",
    "Irmão Martin",
    "Irmão Mentado",
    "Irmã Albino",
    "Irmã Soares",
    "Irmão Almeida",
    "Irmão Cruz",
    "Irmã Bragança",
    "Irmão Albuquerque",
    "Irmão Bomfim",
    "Irmão Cerqueira",
    "Irmão Jara",
    "Irmão Matos",
    "Irmão Gaspar",
    "Irmão Euller",
    "Irmão Thalyson",
    "Irmã Dos Anjos",
    "Irmã Yegros"
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

// function enviarPorEmail() {
//     // Obtem o corpo do e-mail a partir da tabela de dados
//     const tabela = document.getElementById('name-table');
//     const corpoEmail = tabela.outerHTML;

//     // Cria um link com a URL de um cliente de e-mail com o corpo do e-mail preenchido
//     const link = document.createElement('a');
//     link.href = `mailto:?subject=Dados da tabela&body=${encodeURIComponent(corpoEmail)}`;

//     // Simula um clique no link para abrir o cliente de e-mail padrão do usuário
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     console.log(tabela)
// }

// Adiciona o evento de clique ao botão "Enviar por e-mail"
// document.getElementById('btn-email').addEventListener('click', enviarPorEmail);

$(document).ready(function () {
    $('#btn-email').click(function () {
        var tableData = getTableData();
        tableData.forEach(rowData => {
            console.log(rowData.name + ": " + rowData.checkboxes.join(", "));
        });
    });
});

function getTableData() {
    var tableData = [];
    $('#name-table tr').each(function (row, tr) {
        if (row !== -1) { // ignore the table header row
            var rowData = {
                name: "",
                checkboxes: [],
                textInput: ""
            };
            $(tr).find('td').each(function (col, td) {
                if (col === 0) {
                    rowData.name = td.textContent;
                } else if (col >= 1 && col <= 5) {
                    if (col === 1) {
                        rowData.checkboxes.push($(td).find('input[type="checkbox"]').prop('checked') ? false : "Faltou");
                    } else {
                        const isChecked = $(td).find('input[type="checkbox"]').prop('checked');
                        rowData.checkboxes.push(col === 1 && !isChecked ? "atraso" : isChecked);
                    }
                } else if (col === 6) {
                    rowData.textInput = $(td).find('input[type="text"]').val();
                }
            });
            if (rowData.checkboxes.includes(true)) {
                tableData.push(rowData);
            }
        }
    });
    return tableData;
}




// function areCheckboxesChecked() {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     checkboxes.forEach((checkbox) => {
//         if (checkbox.checked) {
//             console.log(checkbox.parentNode.parentNode.firstChild.textContent + " is checked");
//         } else {
//         }
//     });
// }
