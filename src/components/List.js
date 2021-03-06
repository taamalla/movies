import MovieCard from "./Card"


function List({ Movies,search,rating }) {

    return (


        <div  style={{display:'flex',  flexWrap:'Wrap', justifyContent:'space-around'}}>

            {Movies.filter(el=> el.title.toUpperCase().includes(search.toUpperCase())&& el.rate>=rating )
            .map((el, i) => 
            <MovieCard movie={el} />)}
        </div> 
           

        
    )
}
export default List