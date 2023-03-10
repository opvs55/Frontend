import { CardContainer } from "./card.styled"



function Card(props){


  const {mensagem, id} = props


  
  return(
    <CardContainer>
      <p className="nome">Nome:{id}</p>
      <p className="texto">{mensagem}</p>
    </CardContainer>
  )
}

export default Card