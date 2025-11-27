import "./Function.css"
import Price from "./Price";

export default function Function({ title, idx }) {
    let oldPrices =["12,400","11,900","1,500","599"];
    let newPrices =["8,999","9,111","899","278"];
    let description=[["8000 DpI","23DB left"],["smoth screen touch","bigO"],["nice volume","load and clear"],["super bass sound","suiiii"]];
    return (
        <div className="Function">
         <h4>{title}</h4>
         <p>{description[idx][0]}</p>
         <p>{description[idx][1]}</p>
         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );  
}
