import './Footer.css'
import tel from './Telefone.svg'
import local from './Pin.svg'
import relo from './Relogio.svg'

function Footer () {
    return (
        <footer>

            <div class="facima">

            <div class="divisao">
                <img class="imgfacima" src={relo}/>
                <h1>Horário</h1>
                <h2>—- Terça a domingo, das 7h às 19h</h2>
            </div>

            <div class="divisao">
                <img class="imgfacima" src={local}/>
                <h1>Endereço</h1>
                <h2>—- [Endereço] Lagoa da conceição</h2>
            </div>

            <div class="divisao">
                <img class="imgfacima" src={tel}/>
                <h1>Telefone</h1>
                <h2>—- (48) [TELEFONE]</h2>
            </div>

            </div>

            <div class="footer">
                <span>Café Lagoa</span>
                <p>© 2026 Café Lagoa · projeto fictício para fins didáticos</p>
            </div>

        </footer>
    )
}

export default Footer