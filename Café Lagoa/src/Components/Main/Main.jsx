import './Main.css';
import imgcafe from "./Café_lagoa_Main.jpg";

function Main () {
    return (
        <main>
        <section class="hero" id="hero">
            <div>
            <div class="acima">LAGOA DA CONCEIÇÃO ∘ FLORIANÓPOLIS</div>
            <span>Café coado, vista<br></br>para a lagoa.</span>
            <p>Grãos de pequenos produtores do sul do Brasil, pães de fermentação natural e doces feitos todos os dias aqui na casa.</p>
            <div class="acoes">
                <a class="botao botao-cheio" href="#">Ver Cardapio</a>
                <a class="botao botao-vazado" href="#">Fale com a gente</a>
            </div>
            </div>
            <div class="blocao">
                <img id="imgblocao" src={imgcafe} alt="" />
            </div>
        </section>
        <section class="servicos" id="servicos">
            <h1>Mais Pedidos</h1>
            <h3>Os favoritos de quem passa por aqui</h3>
            <div class="grade-cards">
                <article class="card">
                    <h3>Cappuccino da casa</h3>
                    <p>Espresso, leite vaporizado e um toque de canela.</p>
                    <h3>R$ 12,00</h3>
                </article>

                <article class="card">
                    <h3>Pão de Queijo recheado</h3>
                    <p>Massa de polvilho com recheio de requeijão cremoso.</p>
                    <h3>R$ 9,50</h3>
                </article>

                <article class="card">
                    <h3>Torta de Banana com Canela</h3>
                    <p>Massa crocante e banana caramelizada.</p>
                    <h3>R$ 14,00</h3>
                </article>
            </div>
        </section>
    </main>
    )
}
export default Main