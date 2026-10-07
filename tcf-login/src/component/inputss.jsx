export default function Inputss ({value, onchange}) {
    return(
        <div>
            <input className="personalizar" 
            onChange={(e) => onchange((e.target.value))}
            value={value} 
            type="number"/>
        </div>
    )
}