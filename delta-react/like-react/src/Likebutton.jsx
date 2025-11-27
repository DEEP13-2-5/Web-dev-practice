import { useState } from "react";

export default function LikeButton(){

    let [isliked,setisLiked] = useState(false)
    let toggleLike =() =>{
        setisLiked(!isliked)
    };

    return(
        <div>
            <p onClick={toggleLike}>

               {isliked ?(
                <i className="fa-solid fa-heart"></i>
               ):(
               <i className="fa-regular fa-heart"></i>
               )}
                
            </p>
        </div>
    )
}