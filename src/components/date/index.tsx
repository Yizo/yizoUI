// import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
// import styled, { css } from 'styled-components'
// import {
//   modalCloseAnimate,
//   modalOpenAnimate,
//   useStateAnimation
// } from '../modal'
// import { color } from '../shared/styles'

import React from 'react'

// export function useClickOutside(
//   ref: RefObject<HTMLElement>,
//   handler: Function
// ) {
//   useEffect(() => {
//     const listener = (event: MouseEvent) => {
//       if (!ref.current || ref.current.contains(event.target as Node)) {
//         return
//       }
//       handler(event)
//     }
//     window.addEventListener('click', listener)
//     return () => window.removeEventListener('click', listener)
//   }, [ref, handler])
// }

// const CalendarWrapper = styled.div<{ visible: boolean; delay: number }>`
//   position: absolute;
//   border: 1px solid black;
//   transition: all ${props => props.delay / 1000}s cubic-bezier(0.23, 1, 0.32, 1);
//   background: ${color.lightest};
//   ${props =>
//     props.visible &&
//     css`
//       animation: ${modalOpenAnimate} ${props.delay / 1000}s ease-in;
//     `}
//   ${props =>
//     !props.visible &&
//     css`
//       animation: ${modalCloseAnimate} ${props.delay / 1000}s ease-in;
//     `}
// `

// type DatepickerProps = {}

// export function DatePicker(props: DatepickerProps) {
//   const [state, setState] = useState('')
//   const [show, setShow] = useState(false)
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setState(e.target.value)
//   }
//   const handleClick = () => {
//     setShow(true)
//   }
//   const ref = useRef<HTMLDivElement>(null)

//   const [st, setst, unmount] = useStateAnimation(setShow, 200)
//   useClickOutside(ref, () => setst(false))
//   const render = useMemo(() => {
//     if (!show) {
//       unmount()
//       return null
//     } else {
//       return (
//         <CalendarWrapper visible={st} delay={210}>
//           我是弹框
//         </CalendarWrapper>
//       )
//     }
//   }, [show, unmount, st])

//   const dayData = useMemo(() => {
//     const arr = Array.from({ length: 6 }, () => new Array(7).fill(1));
//     return arr;
//   }, []);
//   const render = useMemo(() => {
//     if (!show) {
//       unmount();
//       return null;
//     } else {
//       return (
//         <CalendarWrapper visible={st} delay={210}>
//           <div>我是标题</div>
//           <div>
//             {dayData.map((v) => (
//               <div>
//                 {v.map((k) => (
//                   <span>{k}</span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </CalendarWrapper>
//       );
//     }
//   }, [show, unmount, st, dayData]);

//   return (
//     <div ref={ref}>
//       <input
//         value={state}
//         onChange={handleChange}
//         onClick={handleClick}
//       ></input>
//       {render}
//     </div>
//   )
// }

// const CalendarDateRow = styled.tr``;

// const tableItemStyle = css`
// 	display: inline-block;
// 	min-width: 24px;
// 	height: 24px;
// 	line-height: 24px;
// 	border-radius: 2px;
// 	margin: 2px;
// 	text-align: center;
// `;
// const CalendarHeadItem = styled.td`
// 	${tableItemStyle}
// 	cursor:default;
// `;
// const CalendarDate = styled.td`
// 	${tableItemStyle}
// `;
// const CalendarHeadWrapper = styled.div`
// 	padding: 10px;
// 	display: flex;
// 	color: ${rgba(0, 0, 0, 0.85)};
// 	border-bottom: 1px solid #f0f0f0;
// 	justify-content: center;
// `;

export function DatePicker() {
  return <div>DatePicker</div>
}
