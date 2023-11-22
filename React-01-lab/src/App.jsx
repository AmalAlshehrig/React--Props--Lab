
import './App.css'
import Com from './Companies/Com'
import Tayp from './Services/Tayp'
import Info from './programers/Info'
function App() {
  return (
    <>
    <Com name="Tuwaiq" num="202" year="2019" price="10$" serv="BootCamp"
    user1="Amal" name1="Tuwaiq"
    user2="Rahaf" name2="Tuwaiq"
    user3="Maha" name3="Tuwaiq"
    />
    <Com name="X" num="100" year="1996" price="100$" serv="social communication"
     user1="lama" name1="X"
     user2="sara" name2="X"
     user3="hind" name3="X"
    />
    <Com name="intel" num="99" year="2022" price="1000$" serv="Technique"
    user1="leena" name1="intel"
    user2="Dana" name2="intel"
    user3="Amzan" name3="intel"
    />
    </>
  )
}

export default App
