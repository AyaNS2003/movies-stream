const ContinueWatching = () => {
    const remaining = '(3 Movies Remaining)'
    return ( 
        <div className="ContinueWatching">
            <div>
            <div className="CWpart1">
                <h3>Continue watching</h3>
                <p>{ remaining }</p>
                <button>See more</button>
            </div>
            <div className="CWpart2">
                <div className="movieDiv">
                    <img src="/img/shrek.png" width={200}/>
                    <div className="playDiv">
                        <p>Shrek 3 2022</p>
                        <img src="/img/play-button.png" width={24} height={24}/>
                    </div>
                </div>
                <div className="movieDiv">
                    <img src="/img/riverdale.png" width={200}/>
                    <div className="playDiv">
                        <p>Riverdale 2 2019</p>
                        <img src="/img/play-button.png" width={24} height={24}/>
                    </div>
                </div>
            </div>
            </div>
            <div className="CWpart3">
                <img src="/img/tallGirl.png" width={200}/>
            </div>
        </div>
     );
}
 
export default ContinueWatching;