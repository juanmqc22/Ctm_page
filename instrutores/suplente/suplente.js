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