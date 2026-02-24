export default function Card({title, color}){
    return (
        <div className="card" style={{ backgroundColor: color}}>
            <h2>
                { title }
            </h2>
        </div>
    )
}