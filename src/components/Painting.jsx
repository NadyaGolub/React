export default function Painting({ image, name, isOnline }){
    return (
        <div>
            <img src={image} alt={name} width="480"/> 
            <h2>{name}</h2>
            <p>{isOnline ? "Онлайн" : "Офлайн"}</p>
            </div>
    )
};