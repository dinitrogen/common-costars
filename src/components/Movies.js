import React, { useState, useEffect } from 'react';
function Movies() {
    
    const [actorList, setActorList] = useState([]);
    const [actorAId, setActorAId] = useState();
    const [actorBId, setActorBId] = useState();
    const [actorBMovies, setActorBMovies] = useState([]);
    const [actorAMovies, setActorAMovies] = useState([]);
    const [commonCostars, setCommonCostars] = useState([]);
    const [responseStatus, setResponseStatus] = useState('');
    const [responseError, setResponseError] = useState('');

    useEffect(() => {
        
        Promise.all([
            fetch('https://switch-yam-equator.azurewebsites.net/api/movies', {
                method: 'GET',
                headers: {
                    'x-chmura-cors': 'bcbaca57-51d3-45f9-8e32-0767c655575b'
                }
            })
                .then(res => res.json()),
            
            fetch('https://switch-yam-equator.azurewebsites.net/api/actors', {
                method: 'GET',
                headers: {
                    'x-chmura-cors': 'bcbaca57-51d3-45f9-8e32-0767c655575b'
                }
            })
                .then(res => res.json()),
            
        ]).then(
                async ([movieResults, actorResults]) => {
                    // Sort the actor list 
                    await actorResults.sort((a, b) => {
                        if (a.name < b.name) { return -1; }
                        if (a.name > b.name) { return 1; }
                        return 0;
                    });
                    setActorList(actorResults);
                    
                    // Filter Actor A movies and sort by title
                    const actorAResult  = await movieResults.filter((movie) => movie.actors.includes(actorAId));
                    await actorAResult.sort((a, b) => {
                        if (a.title < b.title) { return -1; }
                        if (a.title > b.title) { return 1; }
                        return 0;
                    });
                    setActorAMovies(actorAResult);
                    
                    // Compile an array of Actor A costars
                    const actorACostars = [];
                    actorAResult.forEach((movie) => {
                        movie.actors.forEach((actorId) => {
                            let index = actorACostars.findIndex((costar) => costar.actorId === actorId)
                            if (index >= 0) {
                                actorACostars[index].costarAMovies.push(movie.title);
                            } else {
                                actorACostars.push({
                                    actorId: actorId,
                                    costarAMovies: [movie.title]
                                });
                            }    
                        });
                    });

                    // Filter Actor B movies and sort by title
                    const actorBResult = await movieResults.filter((movie) => movie.actors.includes(actorBId));
                    await actorBResult.sort((a, b) => {
                        if (a.title < b.title) { return -1; }
                        if (a.title > b.title) { return 1; }
                        return 0;
                    });
                    setActorBMovies(actorBResult);

                    // Compile an array of Actor B costars
                    const actorBCostars = [];
                    actorBResult.forEach((movie) => {
                        movie.actors.forEach((actorId) => {
                            let index = actorBCostars.findIndex((costar) => costar.actorId === actorId)
                            if (index >= 0) {
                                actorBCostars[index].costarBMovies.push(movie.title);
                            } else {
                                actorBCostars.push({
                                    actorId: actorId,
                                    costarBMovies: [movie.title]
                                });
                            }    
                        });
                    });
                    
                    // Compile an array of costars that Actor A and Actor B have in common
                    const sharedCostars = [];
                    actorACostars.forEach((aCostar) => {
                        let aCostarId = aCostar.actorId;
                        let index = actorResults.findIndex((actor) => actor.actorId === aCostarId);
                        let aCostarName = actorResults[index].name;
                        let bCostarsFiltered = actorBCostars.filter((bCostar) => bCostar.actorId === aCostarId);
    
                        // Name object keys based on the expected request ("KRMovies" and "NCMovies")
                        if (bCostarsFiltered.length > 0) {
                            sharedCostars.push({
                                actorId: aCostar.actorId,
                                name: aCostarName,
                                KRMovies: bCostarsFiltered[0].costarBMovies, 
                                NCMovies: aCostar.costarAMovies
                            });
                        }
                    });
                    setCommonCostars(sharedCostars);

                })
                .catch(error => {
                    console.log(error)
                });

    }, [actorAId, actorBId]);
    
    // Set state (and trigger useEffect) when a new actor is selected
    const handleActorAChange = (e) => {
        setActorAId(parseInt(e.target.value));
        setResponseStatus('');    
    }
    
    const handleActorBChange = (e) => {
        setActorBId(parseInt(e.target.value));
        setResponseStatus('');
    }

    // Submit a POST request to the API with your answer
    const submitAnswer = () => {
        let answer = JSON.stringify(commonCostars);

        fetch('https://switch-yam-equator.azurewebsites.net/api/validation', {
                method: 'POST',
                headers: {
                    'x-chmura-cors': 'bcbaca57-51d3-45f9-8e32-0767c655575b',
                    'Content-Type': 'application/json'
                },
                body: answer
            })

            .then((res) => {
                setResponseStatus(res.status);
                if (res.status !== 200) {
                    return res.json()
                } else {
                    return res.status;
                }
            })
            .then(
                (result) => {
                    if(result.error) {
                        setResponseError(result.error);
                        console.log(result.error);
                    }
            })
            .catch(error => {
                console.log(error)
            });
    }
    
  
    return (
                    
        <div className="movie-div">

            <div className="actor-selector">
                <h3>Select Actor A</h3>
                <select value={actorAId} onChange={handleActorAChange}>
                    <option key="defaultA">Select actor A</option>
                    {actorList.map((actor) => {
                        return (
                            <option key={actor.actorId} value={actor.actorId}>{actor.name}</option>
                        )
                    })}
                </select>
            
                <div>
                    <h3>Actor A's movies:</h3>
                    {actorAMovies.map((movie) => {
                        return (
                            <li key={movie.movieId}>{movie.title}</li>
                        )
                    })}
                </div>
            </div>

            <div className="actor-selector">
                <h3>Select Actor B</h3>
                <select value={actorBId} onChange={handleActorBChange}>
                    <option key="defaultB">Select actor B</option>
                    {actorList.map((actor) => {
                        return (
                            <option key={actor.actorId} value={actor.actorId}>{actor.name}</option>
                        )
                    })}
                </select>
                    
                <div>
                    <h3>Actor B's movies:</h3>
                    {actorBMovies.map((movie) => {
                        return (
                            <li key={movie.movieId}>{movie.title}</li>
                        )
                    })}
                </div>
            </div>
            
            <div className="result-pane">
                <div className="results-list">
                    <h3>Costars Actor A and Actor B have in common:</h3>
                    {commonCostars.map((costar) => {
                        return (
                            <li key={costar.actorId}>{costar.name}</li>
                        )
                    })}
                </div>
            
                <div className="submit-box">
                    <button className="submit-button" onClick={submitAnswer}>Submit answer</button>
                    <div className="submit-text-div">Response status: <span className={responseStatus === 200 ? 'green-text': 'red-text'}>{responseStatus}</span></div>
                    {responseStatus === 200
                            ? <div className="submit-text-div">Correct response!</div>
                            : (responseStatus === ''
                                ? <div className="submit-text-div">Awaiting submission...</div>
                                : <div className="submit-text-div">Incorrect response - {responseError}</div>
                            )}
                </div>
            </div>
        </div>
    );
    
}

export default Movies;