import Item from './Item'

function Lista(){
    return(
       <>
       <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" lancamento ={1985}/>
            <Item marca="Gol" lancamento ={1964}/>
            <Item marca="Uno"lancamento ={1988}/>
            <Item/>
        </ul>
       </>   
    )
}
export default Lista