import './Main.css';
import imgcafe from "./Café_lagoa_Main.jpg";
import imgpdq from "./Pão_de_Queijo.jpg"
import imgcf from "./Café.jpg"
import imgtdb from "./Torta.jpg"

function Main () {
    return (
        <main>
        <section class="hero" id="hero">
            <div>
            <div class="acima">LAGOA DA CONCEIÇÃO · FLORIANÓPOLIS</div>
            <span>Café coado, vista<br></br>para a lagoa.</span>
            <p>Grãos de pequenos produtores do sul do Brasil, pães de fermentação natural e doces feitos todos os dias aqui na casa.</p>
            <div class="acoes">
                <a class="botao botao-cheio" href="#servicos">Ver Cardapio</a>
                <a class="botao botao-vazado" href="#">Fale com a gente</a>
            </div>
            </div>
            <div class="blocao">
                <img id="imgblocao" src={imgcafe} alt="" />
            </div>
        </section>
        <section class="servicos" id="servicos">
            <h1>Mais Pedidos</h1>
            <a href="#">Ver cardápio completo →</a>
            <h3>Os favoritos de quem passa por aqui</h3>
            <div class="grade-cards">
                <article class="card">
                    <img class="imgcard" src={imgcf}></img>
                    <div class="categorias">Bebidas</div>
                    <h3>Cappuccino da casa</h3>
                    <p>Espresso, leite vaporizado e um toque de canela.</p>
                    <h2>R$ 12,00</h2>
                </article>

                <article class="card">
                    <img class="imgcard" src={imgpdq}></img>
                    <div class="categorias">Salgados</div>
                    <h3>Pão de Queijo recheado</h3>
                    <p>Massa de polvilho com recheio de requeijão cremoso.</p>
                    <h2>R$ 9,50</h2>
                </article>

                <article class="card">
                    <img class="imgcard" src={imgtdb}></img>
                    <div class="categorias">Doces</div>
                    <h3>Torta de Banana com Canela</h3>
                    <p>Massa crocante e banana caramelizada.</p>
                    <h2>R$ 14,00</h2>
                </article>
            </div>
        </section>
    </main>
    )
}
export default Main