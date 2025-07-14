import React, { useState } from 'react';
import './styles.css';
import { allFinancas, insertFinancas } from '../../services/api';

export const Form = () => {
  const [desc, setDesc] = useState('');
  const [valor, setValor] = useState(''); 
  const [option, setOption] = useState('selecione'); 
  const [error, setError] = useState(null); 
  const [success, setSuccess] = useState(false); 


  const handleButton = async () => {
    setError(null); 
    setSuccess(false);

    if (!desc || !valor || option === 'selecione') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    const numericValor = parseFloat(valor);
    if (isNaN(numericValor) || numericValor <= 0) {
      setError('O valor deve ser um número positivo.');
      return;
    }

    try {
      await insertFinancas(desc, numericValor, option);
      setSuccess(true);
      setDesc('');
      setValor('');
      setOption('selecione');
      window.location.reload()
        

    } catch (error) {
      console.error('Error inserting finance record:', error);
      setError('Ocorreu um erro ao registrar. Tente novamente.');
    }
  };


  return (
    <div className='containerForm'>
      <div className='form'>
        <div className='input'>
          <p>Descrição:</p>
          <input
            type='text'
            placeholder='Descrição'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className='input'>
          <p>Valor:</p>
          <input
            type='number'
            placeholder='Valor'
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            min={0}
          />
        </div>
        <select value={option} onChange={(e) => setOption(e.target.value)} className='select'>
          <option value='selecione' disabled>Selecione ...</option>
          <option value='entrada'>Entrada</option>
          <option value='saida'>Saída</option>
        </select>
        <button onClick={handleButton}>Registrar</button>

        {error && alert(error)}
        {success && alert('Registro adicionado com sucesso!')}
      </div>
    </div>
  );
};