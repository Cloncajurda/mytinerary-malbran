import { useState } from "react";

export default function BckGrndImage({ url, className }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            {!imageLoaded && <div className={className + "absolute w-10/11 h-full justify-center bg-slate-300"}></div>}
            <img onLoad={() => setImageLoaded(true)} className={`${className} absolute w-10/11 h-full justify-center object-cover object-center brightness-[.65] shadow-lg ${!imageLoaded && "opacity-0"}`} src={url} alt="" />
        </>
    );
}