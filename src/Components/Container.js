import react, { useState } from 'react';
function Container() {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return ( 
        <div className="container">
            <div className="interviewText">

            </div>
            <div className='virtualHR'>
                <div className='HR'>

                </div>
                <div className='button'>
                {isClicked ? (
                        <button onClick={handleClick}>
                            <div style={{width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'red'}}></div>
                        </button>
                    ) : (
                        <button onClick={handleClick}>Press To Answer</button>
                    )}
                </div>
            </div>
        </div>
     );
}

export default Container;