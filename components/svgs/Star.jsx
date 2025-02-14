export const Star = ({ fillPercentage = 100, ...props }) => (
    <svg className="overflow-hidden" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id={`half-#F7BC3F-${fillPercentage}`}>
          <stop offset={`${fillPercentage}%`} stopColor="#F7BC3F" />
          <stop offset={`${fillPercentage}%`} stopColor="white" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="m12.495 18.587 4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.045 1.045 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.044 1.044 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.044 1.044 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.044 1.044 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.043 1.043 0 0 1 .991 0"
        fill={`url(#half-#F7BC3F-${fillPercentage})`}
        stroke="none"
      />
      <path
        d="m12.495 18.587 4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.045 1.045 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.044 1.044 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.044 1.044 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.044 1.044 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.043 1.043 0 0 1 .991 0"
        fill="none"
        stroke="#F7BC3F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  );
  