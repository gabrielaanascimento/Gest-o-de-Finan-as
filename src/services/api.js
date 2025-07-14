import axios from "axios"

export const allFinancas = async() => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:4000/transacoes'
    })
    return response
}

export const insertFinancas = async(descricao, valor, tipo) => {
    const response = await axios.post('http://localhost:4000/transacoes',{
        descricao,
        valor,
        tipo
    })
    return response
}

export const saldoFinancas = async() => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:4000/saldo'
    })
    return response.data
}

export const saidaFinancas = async() => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:4000/totalSaida'
    })
    return response.data
}

export const entradaFinancas = async() => {
    const response = await axios({
        method: 'GET',
        url: 'http://localhost:4000/totalEntrada'
    })
    return response.data
}

export const deletarFinancas = async(id) => {
    const response = await axios({
        method: 'DELETE',
        url: `http://localhost:4000/transacoes/${id}`
    })
    return response.data
}
