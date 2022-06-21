import { gql,useQuery } from "@apollo/client"
import { client } from "./lib/apollo"
//podemos escrever query e mutation aqui dentro
const GET_LESSONS_QUERY = gql`
query{
  lessons
{
  id
  title

}
}
` 
function App() {
const {data} = useQuery<{lessons:Lesson[]}>(GET_LESSONS_QUERY)


/* 1 modo de acesar os dados do banco
 useEffect(() =>{
  client.query({query:GET_LESSONS_QUERY}).then(response=>{
    console.log(response.data)
  })
},[])  */

interface Lesson{
  id:string;
  title:string;
}

  return (
 <ul>{data?.lessons.map(lesson =>{
  return <li key={lesson.id}>{lesson.title}</li> //key identifica um elemento unico, dentro de uma lista.
 })}
 </ul>
  )
}
export default App
