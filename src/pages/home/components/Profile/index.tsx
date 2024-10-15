import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import user from "../../../../assets/user/user-model.jpg"
import { ProfileComponent, ProfileHeader, ProfileInfo, ProfileTextInformation } from "./styles";

export function Profile(){
    return(
        <ProfileComponent>
        <img src={user} alt="" />
        <ProfileTextInformation>
            <ProfileHeader>
                <h1>Carmeron Williamson</h1>
                <span>
                    <a href="#">
                        GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>

                </span>
            </ProfileHeader>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <ProfileInfo>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    cameronwll
                </span>
                <span>
                    <FontAwesomeIcon icon={faBuilding} />
                    Rocketseat
                </span>
                <span>
                    <FontAwesomeIcon icon={faUserGroup} />
                    32
                    seguidores
                </span>
            </ProfileInfo>
        </ProfileTextInformation>
        </ProfileComponent>
    )
}