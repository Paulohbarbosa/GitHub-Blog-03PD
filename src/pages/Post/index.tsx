import { Header } from "../../components/Header";
import { PostInfo } from "../../components/PostInfo";
import { PostContainer, PostPublications } from "./styles";

export function Post() {
    return (
        <div>
            <Header />

            <PostContainer>
                <PostInfo />
                <PostPublications>
                <p>
                    <strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>
                <h2>
                    Dynamic typing
                </h2>
                <p>
                    JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
                </p>
                <br />

                    <div>
                        <p>
                            <em>let</em> foo = <i>42</i>;   <span>// foo is now a number</span>
                        </p>
                        <p>
                            foo = <i>‘bar’</i>;  <span>// foo is now a string </span>
                        </p>
                        <p>
                            foo = <i>true</i>;   <span>// foo is now a boolean </span>
                        </p>
                    </div>
                </PostPublications>


            </PostContainer>
        </div>
    );
}