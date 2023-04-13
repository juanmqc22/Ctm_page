function criarDistrito() {
    // Coleta os parâmetros do formulário
    const nome = document.getElementById("nome").value;
    const populacao = document.getElementById("populacao").value;
    const area = document.getElementById("area").value;

    // Cria um novo objeto "Distrito"
    const distrito = { nome, populacao, area };

    // Adiciona o objeto "Distrito" à página HTML
    const distritosDiv = document.getElementById("distritos");
    const distritoDiv = document.createElement("div");
    distritoDiv.classList.add("distrito");
    distritoDiv.innerHTML = `
      <h2>${distrito.nome}</h2>
      <p>População: ${distrito.populacao}</p>
      <p>Área: ${distrito.area} km²</p>
    `;
    distritosDiv.appendChild(distritoDiv);
}
