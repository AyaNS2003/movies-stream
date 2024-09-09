const SearchBar = () => {
    return ( 
        <div className="SearchBar">
            <h2 style={{color : 'white'}}>Discover your favorites.</h2>
            <div style={{display : 'flex', justifyContent : 'space-around', width : '40%'}}>
                <input placeholder="Search here ... "/>
                <img src="/img/sliders-h-square.png"/>
            </div>
        </div>
     );
}
 
export default SearchBar;