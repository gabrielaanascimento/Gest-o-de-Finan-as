import React, { useState, useEffect } from 'react'; // Import useEffect
import './styles.css';
import { allFinancas, deletarFinancas } from '../../services/api';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa'



export const Main = () => {
  const [itens, setItens] = useState([]); // Initialize as an empty array

  const deletarItem = async(id) => {
    try {
        await deletarFinancas(id)
        alert('Item deletado com sucesso')
        //handleTable()
        window.location.reload()
    } catch (error) {
        console.log(error)   
        alert('Erro ao deletar')
    }
  }

  const handleTable = async () => {
    try {
      const response = await allFinancas();
      setItens(response.data);
      console.log('Dados recebidos:', response.data); // Log the received data
    } catch (error) {
      console.error('Erro ao buscar finanças:', error); // Use console.error for errors
    }
  };

  // Call handleTable only once when the component mounts
  useEffect(() => {
    handleTable();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <div className='body'>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item) => {
              
              const key = item.id || item.descricao; 

              return (
                <tr key={key}>
                  <td>{item.descricao}</td>
                  <td>{item.valor}</td>
                  <td>
                    {item.tipo === 'entrada' ? ( 
                      <span className="icon-add"><FaRegArrowAltCircleUp size={24} color='green'/></span>
                    ) : (
                      <span className="icon-remove"><FaRegArrowAltCircleDown size={24} color='red'/></span>
                    )}
                  </td>
                  <td>
                    <button className='button'  onClick={() => deletarItem(item.id)}>
                    <span className="icon-delete">&#128465;</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};