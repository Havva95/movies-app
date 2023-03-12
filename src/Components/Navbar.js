
const Navbar = ({query,setQuery,searchMovie}) =>{
    return(
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <a href="/">MovieDb App</a>
                </div>
                <form onSubmit={searchMovie}>
                    <input type="text" placeholder="Movie Search" name="query" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
                </div>
        </>
        
    )
}

export default Navbar