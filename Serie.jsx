import { useParams } from 'react-router-dom';

const series = [
  { id: "1", titulo: "Breaking Bad",
     sinopse: "Um professor de química diagnosticado com câncer terminal se une a um ex-aluno para fabricar metanfetamina.",
    imagemFundo: "https://m.media-amazon.com/images/S/pv-target-images/403a711032b22fe9771b57e5eb23a955ffc3d39aa5adde7b9a297fd6b2677a54.jpg",
    Criador: "Vince Gilligan",
    Temporadas: "5",
    linkAssistir: "" },
  { id: "2",
    titulo: "Stranger Things",
    sinopse: "Mistérios sobrenaturais e experimentos secretos em Hawkins.",
    imagemFundo: "https://tm.ibxk.com.br/2025/11/26/Calendario_Episodios_Stranger_Things_Volume_5_01_b83178b01d.jpeg",
    Criador: "Irmãos Duffer",
    Temporadas: "4",
    linkAssistir: "" },
  { id: "3",
    titulo: "The Boys",
    sinopse: "Um grupo de justiceiros tenta derrubar super-heróis corruptos.",
    imagemFundo: "https://i.ytimg.com/vi/A_yTLpGFkPs/maxresdefault.jpg",
    Criador: "Eric Kripke", 
    Temporadas: "5",
    linkAssistir: "" },
  { id: "4",
     titulo: "Invencível", 
     sinopse: "Mark Grayson descobre que seu pai é o super-herói mais poderoso do planeta.",
    imagemFundo: "https://ovicio.com.br/wp-content/uploads/2021/05/20210518-invincible-animated-fans-pick-fights-feat-1024x589.jpg", 
    Criador: "Robert Kirkman",
    Temporadas: "4",
    linkAssistir: "" },
  { id: "5",
    titulo: "The Walking Dead",
    sinopse: "Um grupo de sobreviventes luta em um mundo pós-apocalíptico infestado de zumbis.",
    imagemFundo: "https://observatoriodocinema.com.br/wp-content/uploads/2021/04/the-walking-dead-carl-divulgacao1.jpg",
    Criador: "Frank Darabont",
    Temporadas: "11",
    linkAssistir: "" },
  { id: "6",
    titulo: "Monarch",
    sinopse: "Dois irmãos seguem os passos do pai para descobrir a ligação da sua família com a organização secreta conhecida como Monarch. As pistas os levarão ao mundo dos monstros.",
    imagemFundo: "https://i.ytimg.com/vi/-KOi-QNhrt0/maxresdefault.jpg",
    Criador: "Chris Black Fração de Matt",
    Temporadas: "2",
    linkAssistir: "" },
  { id: "7",
    titulo: "Dexter",
    sinopse: "Um especialista em perícia criminal é também um serial killer que persegue criminosos.",
    imagemFundo: "https://m.media-amazon.com/images/S/pv-target-images/6f0e0ba70d3bbe62aba3918f8592b8d51c4af2cdc17db9c3fde54f263f9b3eef._SX1080_FMjpg_.jpg",
    Criador: "James Manos Jr.",
    Temporadas: "8",
    linkAssistir: "" },
  { id: "8",
    titulo: "You",
    sinopse: "Um gerente de livraria obcecado usa a tecnologia para conquistar as mulheres que ama.",
    imagemFundo: "https://cinebuzz.com.br/wp-content/uploads/2025/04/voce-serie-da-netflix-com-penn-badgley-tera-6a-temporada.jpg",
    Criador: "Greg Berlanti",
    Temporadas: "4",
    linkAssistir: "" },
  { id: "9",
    titulo: "My Hero Academia",
    sinopse: "Em um mundo onde quase todos têm superpoderes, um garoto sem poderes busca se tornar um herói.",
    imagemFundo: "https://conteudo.imguol.com.br/c/entretenimento/ef/2024/08/05/cena-do-manga-de-my-hero-academia-1722857119603_v2_900x506.png",
    Criador: "Kohei Horikoshi",
    Temporadas: "6",
    linkAssistir: "" },
  { id: "10",
    titulo: "Loki",
    sinopse: "O deus da trapaça vive aventuras através do tempo após os eventos de Vingadores: Ultimato.",
    imagemFundo: "https://www.netdeal.com.br/api/images/producao.spayce.com.br/1772973398567_2021_06_09_serie_loki_do_disney_531429.jpg", Criador: "Michael Waldron",
    Temporadas: "2",
    linkAssistir: "" },
  { id: "11",
    titulo: "Better Call Saul",
    sinopse: "A transformação do advogado Jimmy McGill no infame Saul Goodman.",
    imagemFundo: "https://rollingstone.com.br/wp-content/uploads/better_call_saul_foto_divulgacao_amc.jpg",
    Criador: "Vince Gilligan",
    Temporadas: "6",
    linkAssistir: "" }
];

export default function Serie() {
  const { id } = useParams();
  const serie = series.find((s) => s.id === id);

  if (!serie) return <h2>Série não encontrada!</h2>;

  return (
    <div className="detalhe-container" style={{ backgroundImage: `url(${serie.imagemFundo})` }}>
      <div className="conteudo">
        <h1>{serie.titulo}</h1>
        
        <div className="botoes">
          
          <a 
            href={serie.linkAssistir} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-assistir"
          >
            Assistir Agora
          </a>
        </div>

        <p className="sinopse">{serie.sinopse}</p>
        <p className="Direção">Criador:{serie.Criador}</p>
        <p className="Roteiristas">Temporadas:{serie.Temporadas} </p>
        
      </div>
    </div>
  );
}