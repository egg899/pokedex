//  import { response } from 'express';
import  { useState , useEffect} from 'react'
// import Axios from 'axios';
import axios from 'axios';
import Thumbnail from './components/Thumbnail.jsx';

import './App.css'



 const pokemonsName = ['golem','pikachu','bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard', 'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree', 'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate'];
//const pokemonsName =['bulbasaur'];
//const pokemonsName = [];


function App() {
  const [pokemon, setPokemon] = useState({
    name:'',
    sprites:{
      foront_default:'',
    },
    types:[],
    height: 0,
    weight:0,
    base_experience: 0,
    stats: [{base_stat:0}],
    abilities:[],
  });
  const [isPopupOpen, setIsPopOpen] = useState(false);
  const [details, setDetails] = useState([]);
  // const [detailsb, setDetailsb] = useState([]);

  // const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/`);

  //const [urlb, setUrlb] = useState(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const [url] = useState(`https://pokeapi.co/api/v2/pokemon/`);





  // let url = `https://pokeapi.co/api/v2/pokemon/`;

 
  // const fetchPokemons = async () => {
    


  //   for(let i=0; i<pokemonsName.length;i++){
  //     url = `https://pokeapi.co/api/v2/pokemon/${pokemonsName[i]}`
    


  //   const {data} = await Axios.get(url)
  //   const details = data;
  //   setDetails(details);
     
    


  // }//for loop
  // }






  const fetchPokemons = async () => {
    try{
      const promises = pokemonsName.map((pName)=>axios.get(`https://pokeapi.co/api/v2/pokemon/${pName}`)
      .then((response)=>response.data));
      const results = await Promise.all(promises);
      setDetails(results)
    }catch(error){
      console.error('Error Fetching Pokemon details:', error);
    }
    
  }


  // const fetchPokemon = async () => {

    
  //   const {data} = await Axios.get(urlb)
  //   const detailsb = data;
  //   setDetailsb(detailsb)
  // }
  

  

useEffect(()=>{
  
  fetchPokemons();
  
}, [url])



const selectPokemon = async (id) => {


const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

const res = await fetch(url);
const pokeman = await res.json();

displayPopup(pokeman);
setIsPopOpen(true);
 
}

// useEffect(()=>{
  
  
//   selectPokemon();
// }, [url])

const displayPopup = (e) =>{
  
  setPokemon(e)
 console.log(e)
  


      
}//displaypopup

const closePopup = () => {
  // alert(isPopupOpen)
  setIsPopOpen(false);
  
}



// const handleChange = (event) => {
//   setPokemon(event.target.value);
//   setUrlb('');
//   setUrlb(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
// }



// const handleSubmit = (event) => {
//   event.preventDefault();
//   setUrlb(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
// }

  // useEffect(()=>{
  //   fetchPokemon(detailsb);
  // }, [urlb])

// console.log(detailsb)
//console.log('pokemonInfo',  pokemonInfo);

// console.log(details.length);
// console.log(details[0].stats.length);
// console.log(details[0].types[1].type.name)
//console.log(isPopupOpen);
let toggleClassCheck = isPopupOpen ? 'expandUp': null;
  return (
    <>
      <div id="container">


      <div id="banner"></div>

      {isPopupOpen && (
      <div className="popup" onClick={()=>closePopup()}>
              <div id='info' className={`${toggleClassCheck}`}>
               
     <Thumbnail  name={pokemon.name}  image ={pokemon.sprites.front_default} 
       type={pokemon.types.map((type)=>{return type.type.name}).join(', ')} height={pokemon.height} weight={pokemon.weight} exp={pokemon.base_experience}
         hp={pokemon.stats[0].base_stat} 
         list= {pokemon.abilities.map((list, i)=><li key={i}>{list.ability.name}</li> )} 
         powers ={'Abilities'} click={'Close'}
         poke={()=>closePopup()}/>
              </div>
</div>)}
      {/* <form onSubmit={handleSubmit}>
       <input onChange={handleChange}></input> <button>Submit</button></form> */}
      {/* { detailsb.name} */}
 
 
 <section id="pokemons">





 {details.map((item, i)=>
 
     
       
      // eslint-disable-next-line react/jsx-key
      <div className="center" onClick={()=>selectPokemon(item.id)}>
      
      

       <Thumbnail name={item.name} key={i} image ={item.sprites.front_default} ikey={i}
       type={item.types.map((type)=>{return type.type.name}).join(', ')} height={item.height} weight={item.weight} exp={item.base_experience}
         hp={item.stats[0].base_stat} 
         
               
         poke={()=>selectPokemon(item.id)} click={'Click to see abilities'}/>
       
       
       
       
       </div>
       
       
      
       
      
      

)}





</section>



       </div>
    </>
  )
}

export default App
