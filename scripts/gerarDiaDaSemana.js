function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" }); //obtendo o dia da semana atual em português do Brasil, o tolocaldatestring permite a formatação da data
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric",
    })
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`; //criando uma string formatada que combina o dia da semana, a data e a hora em um formato legível.

    return dataCompleta;
}

export default gerarDiaDaSemana; //usado para exportar a função sem utilizar chaves