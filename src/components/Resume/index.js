import React, { useEffect, useState } from 'react'
import './styles.css'
import { ResumeItem } from '../ResumeItem'
import { entradaFinancas, saidaFinancas, saldoFinancas } from '../../services/api'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'


export const Resume = () => {
  const [saldo, setSaldo] = useState('')
  const [saida, setSaida] = useState('')
  const [entrada, setEntrada] = useState('')
  const handleSaldo = async() => {
    const responseSaldo = await saldoFinancas()
    const responseEntrada = await entradaFinancas()
    const responseSaida = await saidaFinancas()
    
    setSaldo(responseSaldo.saldo_atual)
    setEntrada(responseEntrada.saldo_atual)
    setSaida(responseSaida.saldo_atual)

  
  }

  handleSaldo()

  return (
    <div className='containerResume'>
        <div className='itens'>
          <ResumeItem title='Entrada' value={entrada} Icon={FaRegArrowAltCircleUp} />
        <ResumeItem title='Saída' value={saida} Icon={FaRegArrowAltCircleDown}/>
        <ResumeItem title='Total' value={saldo} Icon={FaDollarSign} />
        </div>
    </div>
  )
}
