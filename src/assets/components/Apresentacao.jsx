function Apresentacao(props){

    let autenticado = props.autenticado

    if(autenticado == true){
        return <h1>Bem vindo {props.nome}</h1>
    }

}

export default Apresentacao