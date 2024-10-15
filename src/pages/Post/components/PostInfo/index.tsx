import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment} from '@fortawesome/free-solid-svg-icons'

import { PostInfoComponent, PostInfoHeader, PostInfoInformation} from "./styles";

export function PostInfo(){
    return(
        <PostInfoComponent>
            <PostInfoHeader>
                <a href="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    VOLTAR
                </a>

                <a href="#">
                    VER NO GITHUB
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>

            </PostInfoHeader>
            <h1>JavaScript data types and data structures</h1>
            <PostInfoInformation>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    cameronwll
                </span>
                <span>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    Há 1 dia
                </span>
                <span>
                    <FontAwesomeIcon icon={faComment} />
                    5
                    seguidores
                </span>
            </PostInfoInformation>
        </PostInfoComponent>
    )
}