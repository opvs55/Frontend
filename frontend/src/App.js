import axios from "axios";
import { useEffect, useState} from "react";
import { Div } from "./App.styled";
import Card from "./components/card";
import { BASE_URL } from "./constants/url";

export default function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newPost, setNewPost] = useState("")

  
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(BASE_URL);
      console.log(response)
      setPost(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };


  const createPost = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {

      const body = {
        mensagem: newPost
      }

      await axios.post(BASE_URL, body);

      setNewPost("");
      setIsLoading(false)
      fetchPost()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <Div>
      <form onSubmit={createPost}>
          <h2>escreva uma mensagem:</h2>
          <section>
            <label>Postagem</label>
            <input value={newPost} onChange={(e) => setNewPost(e.target.value)} />
          </section>
          <button disabled={isLoading}>Criar</button>
      </form>
          {post.map((e) => {
            return <Card key={e.id} id={e.id} mensagem={e.mensagem}/>
          })
          }
    </Div>
  );
}