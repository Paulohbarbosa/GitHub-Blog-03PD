import { CardPost } from "./components/CardPost";
import { Profile } from "./components/Profile";
import { HomeContainer, HomeInformation, HomePublications} from "./styles";

export function Home() {
    return (
        <div>
            <HomeContainer>
                <Profile />
                <HomeInformation>
                    <h2>Publicações</h2>
                    <span>6 publicações</span>
                </HomeInformation>
                <input type="text" placeholder="Buscar conteúdo" />
                <HomePublications>
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                </HomePublications>
            </HomeContainer>
        </div>
    );
}