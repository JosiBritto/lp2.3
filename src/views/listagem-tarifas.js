import React from 'react';

import Card from '../components/card';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

const baseURL = `${BASE_URL}/tarifa`

function ListagemTarifas() {
  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-tarifas`);
  };

  const editar = (id) => {
    navigate(`/cadastro-tarifas/${id}`);
  };

  const [dados, setDados] = React.useState(null);

  async function excluir(id) {
    let data = JSON.stringify({ id });
    let url = `${baseURL}/${id}`;
    console.log(url);
    await axios
      .delete(url, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        mensagemSucesso(`Tarifa excluída com sucesso!`);
        setDados(
          dados.filter((dado) => {
            return dado.id !== id;
          })
        );
      })
      .catch(function (error) {
        mensagemErro(`Erro ao excluir a tarifa`);
      });
  }

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);

  if (!dados) return null;

  return (
    <div className='container'>
      <Card title='Listagem de Tarifas'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              
              <button
                type='button'
                class='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Nova Tarifa
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Tipo de Quarto</th>
                    <th scope='col'>Capacidade</th>
                    <th scope='col'>Valor</th>
                     <th scope='col'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.tipoQuarto}</td>
                      <td>{dado.Capacidade}</td>
                      <td>{dado.valorDiarias}</td>
                       <td>{dado.Status}</td>
                      <td>
                        <Stack spacing={1} padding={0} direction='row'>
                          <IconButton
                            aria-label='edit'
                            onClick={() => editar(dado.id)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label='delete'
                            onClick={() => excluir(dado.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>{' '}
                  <button
                type='button'
                class='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Nova Período
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Período</th>
                    <th scope='col'>Início</th>
                    <th scope='col'>Fim</th>
                    <th scope='col'>Ajuste na Tarifa</th>
                     <th scope='col'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.periodo}</td>
                      <td>{dado.inicio}</td>
                      <td>{dado.fim}</td>
                      <td>{dado.ajusteTarifa}</td>
                       <td>{dado.Status}</td>
                      <td>
                        <Stack spacing={1} padding={0} direction='row'>
                          <IconButton
                            aria-label='edit'
                            onClick={() => editar(dado.id)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label='delete'
                            onClick={() => excluir(dado.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>{' '}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ListagemTarifas;