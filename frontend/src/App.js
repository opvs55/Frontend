import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider,Flex } from '@chakra-ui/react'
import Card2 from "./components/Card2";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://deploy-exercicios.onrender.com/students"
      );
console.log(response)
      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider resetCSS>
      <h1>PRINCIPAIS CURSOS</h1>
      <Flex gap={"16px"} wrap={"wrap"}>
     {users && users.map((user) =>{
      return <Card2 user={user} key={user.id}/>
     }
     )}
         </Flex>
    </ChakraProvider>
  );
}
