import { useParams } from 'react-router-dom';

const filmes = [
  { 
    id: "1", 
    titulo: "Spider-Man", 
    sinopse: "Após ser picado por uma aranha geneticamente modificada, o tímido adolescente Peter Parker ganha poderes e se torna o super-herói Homem-Aranha, devendo enfrentar um inimigo vingativo conhecido como Duende Verde.", 
    imagemFundo: "https://m.media-amazon.com/images/M/MV5BNzE5NTk5NDQ0NV5BMl5BanBnXkFtZTgwNjU3ODIxMjI@._V1_.jpg", 
    Direção: "Sam Raimi",
    Roteiristas: "Stan LeeSteve DitkoDavid Koepp",
    linkAssistir: "https://www.tokyvideo.com/br/video/homem-aranha-completo-dublado-em-portugues-pt-br" 
  },
  { id: "2",
    titulo: "Planeta Dos Macacos",
    sinopse: "César e seus macacos são forçados a entrar em confronto com uma milícia de humanos. Mas após sofrer perdas inimagináveis, César resolve se vingar em um confronto final que irá determinar o futuro do planeta.",
    imagemFundo: "https://cinemaweb.com.br/wp-content/uploads/2024/01/planeta-dos-macacos-ordem-correta-para-assistir.jpg",
    Direção: "Matt Reeves",
    Roteiristas: "Mark BombackMatt ReevesRick Jaffa",
    linkAssistir: ""
  },
  { id: "3",
    titulo: "Piratas do Caribe: A Maldição do Pérola Negra",
    sinopse: "O ferreiro Will Turner se une ao excêntrico pirata Capitão Jack Sparrow para salvar Elizabeth Swann, a filha do governador e seu amor, dos ex-aliados piratas de Jack, que agora são mortos-vivos.",
    imagemFundo: "https://ingresso-a.akamaihd.net/b2b/production/uploads/article/image/3938/f16d5b6bfb308f832c2ee4ffef8734b3.jpg",
    Direção: "Gore Verbinski",
    Roteiristas: "Johnny DeppGeoffrey RushOrlando Bloom",
    linkAssistir: ""
  },
  { id: "4",
    titulo: "Five Nights at Freddy's - O Pesadelo Sem Fim",
    sinopse: "Uma segurança problemática começa a trabalhar na Freddy Fazbear's Pizza. Durante suas cinco noites no trabalho, ele percebe que algo está errado com a pizzaria e logo descobre a verdade sobre os animatrônicos do lugar.",
    imagemFundo: "https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQ4DmWXmdGHotQqZ2odVIEtB4oyEUPheEZVXtqGpfZHO5x5t_bLrzh5H94MhrC7Ds5nAehVmHdXC0aJ72S-tE9MYXEYVYhDrw_sB.jpg?r=6ac",
    Direção: "Emma Tammi",
    Roteiristas: "Scott CawthonSeth CuddebackEmma Tammi",
    linkAssistir: ""},
    { id: "5",
    titulo: "Dragonball Evolution",
    sinopse: "O jovem guerreiro Son Goku parte em uma missão, correndo contra o tempo e o vingativo Rei Piccolo, para coletar um conjunto de sete esferas mágicas que concedem ao seu portador poder ilimitado.",
    imagemFundo: "https://images5.alphacoders.com/726/thumb-1920-726147.png",
    Direção: "James Wong",
    Roteiristas: "Ben RamseyAkira Toriyama",
    linkAssistir: ""},
    { id: "6",
    titulo: "O Menino do Pijama Listrado",
    sinopse: "Com a Segunda Guerra Mundial como centro, a história é contada através dos olhos do Bruno, o filho de um comandante de um campo de concentração, sobre sua amizade com um menino judeu.",
    imagemFundo: "https://play-lh.googleusercontent.com/proxy/Bq6ubpSHKq87uQH_NEgmU99_q6OsFifv74AjW3g4DRv7rbnKuifbV4YyFkvcgd6CHMlrF7lQ6joWFxq8gAV5tHMttp9sESzsMB__BBgX3U7Xtg7zmSdD=s1920-w1920-h1080-rw",
    Direção: "Mark Herman",
    Roteiristas: "John BoyneMark Herman",
    linkAssistir: ""},
    { id: "7",
    titulo: "Chainsaw Man - O Filme: Arco da Reze",
    sinopse: "Denji encontra um novo interesse romântico, Reze.",
    imagemFundo: "https://midianinja.org/wp-content/uploads/2025/11/20250826-denji-e-reze-em-poster-de-chainsaw-man-o-filme-arco-da-reze-ovicio.webp",
    Direção: "Tatsuya Yoshihara",
    Roteiristas: "Tatsuki FujimotoHiroshi Seko",
    linkAssistir: ""},
    { id: "8",
    titulo: "Jurassic Park: O Parque dos Dinossauros",
    sinopse: "Um milionário traz à vida dinossauros extintos há milhares de anos, criando um imenso parque. Mas os gigantes pré-históricos começam a ameaçar a vida dos visitantes.",
    imagemFundo: "https://sm.ign.com/ign_br/gallery/j/jurassic-p/jurassic-park-movies-in-order_x415.jpg",
    Direção: "Steven Spielberg",
    Roteiristas: "Michael CrichtonDavid Koepp",
    linkAssistir: ""},
    { id: "9",
    titulo: "Vingadores: Ultimato",
    sinopse: "Após os eventos devastadores de Vingadores: Guerra Infinita, o universo está em ruínas. E com a ajuda de aliados, os Vingadores se reúnem para desfazer as ações de Thanos e restaurar a ordem.",
    imagemFundo: "https://s2.glbimg.com/2C0hMRuCY_7NfDPjby4_Bjmq8Nc=/e.glbimg.com/og/ed/f/original/2018/03/22/avengers-infinity-war-official-poster-2018-4o.jpg",
    Direção: "Anthony RussoJoe Russo",
    Roteiristas: "Christopher MarkusStephen McFeelyStan Lee",
    linkAssistir: ""},
    { id: "10",
    titulo: "Super Mario Bros.: O Filme",
    sinopse: "Um encanador chamado Mario precisa salvar seu irmão Luigi das garras do rei dos Koopas, Bowser. Para isso, ele conta com a ajuda da princesa do Reino dos Cogumelos, Peach, e de seus amigos Toad e Donkey Kong.",
    imagemFundo: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfBSpempGwYgETvkSy6MTwxBCti8TetSSOfguF6389UQ_REcbG2Z6ViT2tNMGk9NhfeQf8Feeqm2hgI31CJiIVKuTP5GBeZC_eUT.jpg?r=b35",
    Direção: "Aaron HorvathMichael JelenicPierre Leduc",
    Roteiristas: "Matthew Fogel",
    linkAssistir: ""},
    {id:"11",
     titulo:"O Segredo dos Animais",
     sinopse:"Quando o fazendeiro está fora, todos os animais brincam, cantam e dançam. Entretanto, eventualmente alguém tem que intervir e administrar as coisas, uma responsabilidade que acaba indo para Otis, uma vaca despreocupada.",
     imagemFundo:"https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXk6SmtbpjxjV9f-okNqJmCjlAd24i08X6lgQSxtYbCZNYVqjIPUEkOVaVcU_nNlAVIvNBwFATZQEfaKoAOr3Q-CCE4IJfog3_up.jpg?r=d73",
     Direção:"Steve Oedekerk",
     Roteiristas:"Steve Oedekerk",
     linkAssistir:"",

    }  
];


export default function Filme() {
  const { id } = useParams();
  const filme = filmes.find((f) => f.id === id);

  if (!filme) return <h2 style={{color:'white'}}>Filme não encontrado!</h2>;

  return (
    <div className="detalhe-container" style={{ backgroundImage: `url(${filme.imagemFundo})` }}>
      <div className="conteudo">
        <h1>{filme.titulo}</h1>
        
        <div className="botoes">
          
          <a 
            href={filme.linkAssistir} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-assistir"
          >
            Assistir Agora
          </a>
        </div>

        <p className="sinopse">{filme.sinopse}</p>
        <p className="Direção">Direção:{filme.Direção}</p>
        <p className="Roteiristas">Roteiristas:{filme.Roteiristas} </p>
        
      </div>
    </div>
  );
}