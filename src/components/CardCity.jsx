import {Link as Anchor} from "react-router-dom"
import NavLayout from "../layouts/NavLayout"

export default function CardCity({src,alt,text,id}) {
    console.log (id)
    return (
        <Anchor to={'/city/'+id} className="bg-blue-200 w-2/5 flex flex-wrap justify-center border-2 m-1 border-slate-300">
            <div className="justify-center m-[5px]" data-carousel-item="active">
                <img src={src} alt={alt} />
                <p className="text-[15px]">{text}</p>
            </div>
        </Anchor>
    )
}