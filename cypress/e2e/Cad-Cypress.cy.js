describe('template spec', () => {
  it('passes', () => {

    //
    cy.visit('https://meupc.net/')


    //esperando 1 segundo para executar a ação abaixo
    cy.wait(1000)
    //clicando no botão de menu pela classe .navbar-burger
    cy.get('.navbar-burger').click()


    cy.wait(1000)
    cy
    .get('ul.menu-list') // pegando a ul com a classe .menu-list
    .children('li') // pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]') // pegando o filho da li que tem o href com o valor https://meupc.net/cadastro
    .click()




    //Preenchendo o campo do nome

    cy.get('input[name="nome"]').type('allan teste')

 

    //Preenchendo o campo do email

    cy.get('input[name="email"]').type('allan@example.com')

 

    //Preenchendo o campo da senha

    cy.get('input[placeholder="Defina uma senha"]').type('12345678')

 

    //Cliclando no check de aceitar os termos

    cy.get('input[type="checkbox"]').check({ force:true })

 

    //Clicando no botão de Cadastrar-se

    cy.contains('Cadastrar-se').click()

 

    //Verificando se chegamos na tela final do cadastro

    cy.contains('Escolha seu nome de usuário').should('be.visible')

  })
})