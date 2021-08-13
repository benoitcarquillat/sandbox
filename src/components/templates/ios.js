import styled from 'styled-components';

function createCSS() {
  let styles = '';
  for (let i = 0; i < 12; i++) {
    styles += `
         &:nth-child(${i}) {
           animation-delay: ${i * 0.2}s;
         }
       `;
  }
  return `${styles}`;
}

const Spinner = styled.div`
  position: relative;
  width: 54px;
  height: 54px;
  display: inline-block;
  margin-left: 50%;
  margin-right: 50%;
  background: #74a6f2;
  padding: 10px;
  border-radius: 10px;

  div {
    width: 6%; //!todo
    height: 16%; //!todo
    background: #fff; // !todo
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    border-radius: 50px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    animation: fade 1s linear infinite;
  }
`;

//   @-webkit-keyframes fade {
//     from {opacity: 1;}
//     to {opacity: 0.25;}
//   }

const Bar1 = styled.div`
  animation-delay: 0s;
  transform: rotate(0deg) translate(0, -130%);
`;

//   div.spinner div.bar2 {
//     -webkit-transform:rotate(30deg) translate(0, -130%);
//     -webkit-animation-delay: -0.9167s;
//   }

//   div.spinner div.bar3 {
//     -webkit-transform:rotate(60deg) translate(0, -130%);
//     -webkit-animation-delay: -0.833s;
//   }
//   div.spinner div.bar4 {
//     -webkit-transform:rotate(90deg) translate(0, -130%);
//     -webkit-animation-delay: -0.7497s;
//   }
//   div.spinner div.bar5 {
//     -webkit-transform:rotate(120deg) translate(0, -130%);
//     -webkit-animation-delay: -0.667s;
//   }
//   div.spinner div.bar6 {
//     -webkit-transform:rotate(150deg) translate(0, -130%);
//     -webkit-animation-delay: -0.5837s;
//   }
//   div.spinner div.bar7 {
//     -webkit-transform:rotate(180deg) translate(0, -130%);
//     -webkit-animation-delay: -0.5s;
//   }
//   div.spinner div.bar8 {
//     -webkit-transform:rotate(210deg) translate(0, -130%);
//     -webkit-animation-delay: -0.4167s;
//   }
//   div.spinner div.bar9 {
//     -webkit-transform:rotate(240deg) translate(0, -130%);
//     -webkit-animation-delay: -0.333s;
//   }
//   div.spinner div.bar10 {
//     -webkit-transform:rotate(270deg) translate(0, -130%);
//     -webkit-animation-delay: -0.2497s;
//   }
//   div.spinner div.bar11 {
//     -webkit-transform:rotate(300deg) translate(0, -130%);
//     -webkit-animation-delay: -0.167s;
//   }
//   div.spinner div.bar12 {
//     -webkit-transform:rotate(330deg) translate(0, -130%);
//     -webkit-animation-delay: -0.0833s;
//   }

export const ios = () => {
  return (
    <Spinner>
      <Bar1 />
      {/* <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
      <Bar7 />
      <Bar8 />
      <Bar9 />
      <Bar10 />
      <Bar11 />
      <Bar12 /> */}
    </Spinner>
  );
};
