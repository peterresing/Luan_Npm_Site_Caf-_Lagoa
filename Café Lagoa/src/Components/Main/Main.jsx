import './Main.css'

function Main () {
    return (
        <main>
        <section class="hero" id="hero">
            <h1>Café coado, vista<br></br>para a lagoa</h1>
            <p>Grãos de pequenos produtores do sul do Brasil, pães de fermentação natural e doces feitos todos os dias aqui na casa.</p>
            <div class="acoes">
                <a class="botao botao-cheio" href="#">Ver Cardapio</a>
                <a class="botao botao-vazado" href="#">Fale com a Gente</a>
            </div>
        </section>
        <section class="servicos" id="servicos">
            <h2>Nossos serviços</h2>
            <div class="grade-cards">
                <article class="card">
                    <h3>Design de Interface</h3>
                    <p>Telas claras pensadas para o usuário.</p>
                </article>

                <article class="card">
                    <h3>Responsividade</h3>
                    <p>O mesmo site em qualquer tela.</p>
                </article>

                <article class="card">
                    <h3>Performance</h3>
                    <p>Páginas leves que carregam rápido.</p>
                </article>
            </div>
        </section>
    </main>
    )
}
export default Main