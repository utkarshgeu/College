import Picture1 from "./4512084.png";

function Home(){
    return (
      <div className="Homepage">
        <div className="Info">
          <h1>Hey There!!</h1>
          <h1>I am Utkarsh Pandey</h1>
        </div>

        <div>
            <img src={Picture1} alt="Error"  className="img"/>
        </div>
      </div>
    )
}

export default Home;