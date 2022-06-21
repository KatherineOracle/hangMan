
/*
  Builds are hanging man from svg elements
  stored in an array. The componenent renders
  the same number of elements as in the bad choices array
*/
const Drawing = (props) => {
  let svgElements = [
        <rect 
          key="rope"
          x="211.046"
          y="-72.704"
          width="20.672"
          height="62.016"
        />,      
        <path
		key="head"
          fill="#FFFFFF"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          d="
				M246.06,17.489c0.179,14.821-11.675,26.987-26.495,27.195c-14.819,0.207-27.008-11.623-27.246-26.442
				C192.084,3.422,203.89-8.791,218.707-9.055c14.82-0.266,27.056,11.518,27.35,26.336"
        />,
        <path
		key="body"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          d="
	M218.775,176.243l-0.093-129.106"
        />,<path
		key="leftarm"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          d="
		M156.665,66.286l61.73,19.315"
        />,<path
		key="rightarm"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          d="
	M282.999,66.286l-61.732,19.315"
        />,<path
		key="rightleg"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          d="
	M284.291,239.78l-65.237-64.848"
        />,<path
		key="leftleg"
          fill="none"
          stroke="#000000"
          strokeWidth="8"
          strokeLinecap="round"
          d="
		M154.911,239.78l65.237-64.848"
        />
  ];


  return (
    <svg
      id="hangmansvg"
      x="0px"
      y="0px"
      width="300px"
      height="405px"
      viewBox="-5.047 -76.892 300 405"
    >
      {props.badChoices.map((el, idx) => {
        return svgElements[idx];
      })}

      <rect
        id="upright"
        x="62.209"
        y="-72.575"
        width="37.209"
        height="372.093"
      />
      <rect id="base" x="0.193" y="292.542" width="262.532" height="34.108" />
      <rect id="topbar" x="62.207" y="-73.35" width="169.51" height="23.772" />
    </svg>
  );
};

export default Drawing;
