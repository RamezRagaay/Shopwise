export const Compare = (props) => (
    <svg height="200" width="200" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="none" stroke={props.stroke || "currentColor"} strokeLinecap="round" strokeLinejoin="round">
            <path d="m11.5 2l2 2l-2 2m-3-2h5m-2 4l2 2l-2 2"/>
            <path d="M.5 4H4l4 6h5.5m-13 0H4"/>
        </g>
    </svg>
    )