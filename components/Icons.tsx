export const Icons = {
  Menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      fill="none"
    >
      <path
        d="M13.5 2H0.5"
        stroke="#FFFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 7H0.5"
        stroke="#FFFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 12H0.5"
        stroke="#FFFEFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1545_11106)">
        <path
          d="M13.5 0.5L0.5 13.5"
          stroke="#000001"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.5 0.5L13.5 13.5"
          stroke="#000001"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1545_11106">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  RightArrow: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1545_9993)">
        <path
          d="M1.25 7H14.25"
          stroke="#000001"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.75 10.5L14.25 7L10.75 3.5"
          stroke="#000001"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1545_9993">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  LeftArrow: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 7H0.5"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 3.5L0.5 7L4 10.5"
        stroke="#000001"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
