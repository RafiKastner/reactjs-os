export function Arrow(props) {
    return (
        <svg height='1em' width='1em' viewBox="0 0 10 10" stroke="white" 
        strokeLinecap="round" strokeWidth='1' {...props}>
            <g>
                <line x1='4' y1='3' x2='7' y2='6'/>
                <line x1='4' y1='9' x2='7' y2='6'/>
            </g>
        </svg>
    )
}