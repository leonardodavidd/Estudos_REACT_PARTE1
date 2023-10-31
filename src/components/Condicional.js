import {useState} from 'react'

function Condicional(props){


    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState() 

    function enviaremail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(e){
        setUserEmail('')
    }


    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite o seu e-mail' onChange={(e) => setEmail(e.target.value)} ></input>
            </form>
            <button onClick={enviaremail} >Enviar e-mail</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}
export default Condicional