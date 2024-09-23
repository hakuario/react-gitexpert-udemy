import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    // const [counter, setCounter] = useState(10);
    /* const [images, setimages] = useState([]);

    const getImages = async () => {
        const newGifs = await getGifs(category);
        setimages(newGifs);
    }

    useEffect(() => {
        getImages();
    }, []);
 */

    const { images, isLoading } = useFetchGifs(category);
    // console.log(images, isLoading);    

    return (
        <>
            <h3 >{category}</h3>
            {
                isLoading && (<h2 >Cargando...</h2>)
            }
            {/* <p>Hello</p> */}
            <div className="card-grid" >
                {images.map((image) => (
                    // <li key={g.id}>{g.title}</li>
                    // <GifItem key={image.id} image={image}/>
                    <GifItem key={image.id} {...image} />
                ))
                }
            </div>

            {/* <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)} >+1</button> */}
        </>
    )
}
