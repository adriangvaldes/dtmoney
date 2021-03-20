import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps { //Aqui estamos dizendo q as propiedades passadas para o header é uma função que não recebe parametros e não retorna nada
  onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal } : HeaderProps) { //Fazendo uma estruturação pois queremos apenas passar a funçao
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={onOpenNewTransactionModal}>  {/*Aqui estamos dizendo que no clique vai mandar abrir a função q for passada como parametro */}
          Nova Transação
        </button>

        
      </Content>
    </Container>
  )
} 