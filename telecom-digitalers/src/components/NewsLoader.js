import News from "../constants/news";
import IndNews from "./IndNews";
import "../App.css"

const NewsLoader = () => {
    return(
        <div className="p-1 row">
            <header className="mainHeader containerTitle text-center mb-3">
                Conoce las ultimas noticias Digitalers
            </header>
            <div id="newsContainer" className="d-flex flex-wrap justify-content-around">
                {
                News.map((n)=>(
                    <div key={n.title}>
                    <IndNews 
                        title={n.title}
                        body={n.body}
                    />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default NewsLoader;
