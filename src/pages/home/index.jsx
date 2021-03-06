import { Container, Main } from "./styles";
import FirstImage from "../../assets/image.png";
import SecondIMage from "../../assets/image_2.png";
import { CgHeart } from "react-icons/cg";
import { BiBriefcaseAlt } from "react-icons/bi";
import { RiUserSmileLine } from "react-icons/ri";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/auth";


export const Home = () => {

  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleToPageCommunity = () => {
    navigate("/community")
  }

  const handleToPageRegister = () => {
    if(!!auth){
      navigate("/dashboard")
    } else {
      navigate("/register")
    }
  }

  return (
    <Container>
      <Header />

      <Main>
        {/* first session */}
        <div className="first_session">
          <div>
            <h2>Faça Parte do nosso Banco de talentos</h2>
            <p>
              As melhores empresas utilizam o nosso banco de talentos 100% para
              PCD
            </p>
            <button onClick={handleToPageRegister}>Cadastrar Currículo</button>
          </div>
          <div className="first_image">
            <img src={FirstImage} alt="imagem_1" />
          </div>
        </div>

        {/* second session */}
        <div className="second_session">
          <div className="second_image">
            <img src={SecondIMage} alt="imagem_2" />
          </div>
          <div>
            <p className="marcador">Nosso propósito</p>
            <h2>Lutamos por um mundo mais inclusivo</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
        </div>

        {/* third session */}

        <div className="third_session">
          <p className="marcador">Benefícios</p>
          <h2>Ajudamos a destacar o seu melhor</h2>
        </div>

        {/* four session */}
        <div className="four_session">
          <div>
            <RiUserSmileLine />
            <h2>Focamos em pessoas</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
          <div>
            <BiBriefcaseAlt />
            <h2>Melhores empresas</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
          <div>
            <CgHeart />
            <h2>Respiramos inclusão</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam at obcaecati molestias vero numquam, fuga.
            </p>
          </div>
        </div>

        {/* five session */}
        <div className="five_session">
          <div>
            <div className="message">
              <p>
                Pensando no seu bem estar, você também pode encontrar grupos de
                apoio nas comunidades
              </p>
            </div>
            <div>
              <button onClick={ handleToPageCommunity }>Comunidade</button>
            </div>
          </div>
        </div>
      </Main>
      <hr className="footer" />

      {/* six session */}
      <Footer />
    </Container>
  );
};
