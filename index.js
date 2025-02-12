class hero {
    // Declaração das propriedades da classe hero
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
        // Propriedade skills para referir o ataque a classe correta
        this.skills = {
            "guerreiro": "espada",
            "mago": "magia",
            "monge": "artes marciais",
            "ninja": "shuriken"
        }
    }

    // Declarando método de ataque
    attack(type) {
        // Definindo a skill que será utilizada pela classe do herói
        const skill = this.skills[this.type]
        // Se houver skill para classe existente exibir a mensagem definida pelo provedor do desafio
        if (skill) {
            console.log(`O ${this.type} atacou usando ${skill}`)
        } else {
            // Se não, exibir mensagem de que não há skill para a classe solicitada
            console.log(`Tipo de ataque desconhecido para ${this.type}`)
        }
    }
}

// Declarando um novo objeto da classe hero
let adventure = new hero("Merlin", 25, "mago")

// Executando método da classe hero
adventure.attack(adventure.type)