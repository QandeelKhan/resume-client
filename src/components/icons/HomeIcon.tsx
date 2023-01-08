import * as React from "react";
const HomeIcon: React.FC = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        // viewport height, width
        width={20}
        height={20}
        // viewBox height, width
        {...props}
        viewBox="0 0 20 20"
        className="nav-icon"
        fill="white"
    >
        <path
            // fill="white"
            d="m19.871 12.165-8.829-9.758A1.392 1.392 0 0 0 10 1.937c-.397 0-.767.167-1.042.47L.129 12.165a.5.5 0 0 0 .741.67l2.129-2.353V18.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-8.018l2.129 2.353a.499.499 0 1 0 .741-.671zM12 19H8v-4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V19zm4-.5a.5.5 0 0 1-.5.5H13v-4.5c0-.827-.673-1.5-1.5-1.5h-3c-.827 0-1.5.673-1.5 1.5V19H4.5a.5.5 0 0 1-.5-.5V9.377l5.7-6.3c.082-.091.189-.141.3-.141s.218.05.3.141l5.7 6.3V18.5z"
        />
    </svg>
);
export default HomeIcon;
