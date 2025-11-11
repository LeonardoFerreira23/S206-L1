# S206-L1
Repositório dedicado para a matéria de S206

 # Tecnologia Utilizadas
 - Cypress: Framework principal para os testes de UI
 - Mochawesome: Utilizado para a geração de relatórios de teste em HTML

 # Como Executar o Projeto
 Siga os passos abaixo para rodar a suíte de testes e gerar o relatório

 **Pré-requisitos
- Node.js(NPM)

1 - Clone o repositório :

```Markdown
git clone https://github.com/LeonardoFerreira23/S206-L1.git
cd S206-L1
```

2 - Instale as dependencias:

```Markdown
npm install
```

3 - Execute os testes de atividades

```Markdown
npx cypress run --spec "cypress/e2e/lista1.cy.js"
```

Após a execução, o relatório em HTML será gerado automaticamente.

Você pode encontrá-lo na seguinte pasta: cypress/reports/index.html

Basta abrir o arquivo index.html em qualquer navegador para ver os resultados detalhados de cada teste.
