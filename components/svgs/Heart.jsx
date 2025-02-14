export const Heart = (props) => (
    <svg height="200" width="200" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M7.004 12.383L1.53 7.424c-2.975-2.975 1.398-8.688 5.474-4.066c4.076-4.622 8.43 1.11 5.475 4.066z" 
        fill={props.fill || "none"}
         stroke={props.stroke || "currentColor"} 
         strokeLinecap="round" 
         strokeLinejoin="round"/>
    </svg>
    )