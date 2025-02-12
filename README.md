![image](https://github.com/user-attachments/assets/13c1d585-3203-474f-996a-50a70bc25261)

# DESAFIO DE PROJETO - Escrevendo as Classes de Um Jogo

### Objetivo:

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

Além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

  - Se mago -> no ataque exibir (usou magia)
  - Se guerreiro -> no ataque exibir (usou espada)
  - Se monge -> no ataque exibir (usou artes marciais)
  - Se ninja -> no ataque exibir (usou shuriken)

## Solução:

### Para resolver o desafio foi:
- Criado uma classe chamada heroi, com as propriedades: **nome**, **idade** e **classe**;
- Criado um método na classe heroi, chamado ataque, onde verifica o tipo de ataque referente a classe do heroi.
