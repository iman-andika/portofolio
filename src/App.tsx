import { useEffect, useRef, useState } from 'react'
import './App.css'

/* ───── SVG ICONS ───── */
const IconHTML = () => (
  <svg viewBox="0 0 512 512" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
    <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21.2v23h-23.2V0zm99.4 22.8h-20.2V0h63.7v22.8H231v46.3h-23.2V22.8zm48.8 0h-20.2V0h63.7v22.8H280v46.3h-23.2V22.8zM372 0h23.2v22.8h21.1V0h23v69h-23V46h-21.2v23H372V0z" fill="#fff" opacity=".3"/>
    <path d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512z" fill="#e34f26"/>
    <path d="M256 480.5V131h148.3L376 447z" fill="#ef652a"/>
    <path d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4zm0 204.6l7.8 87.6 105.9 29.4 106.1-29.4 7.8-87.6h-45.6l-4 43.7-64.2 17.3-64.1-17.3-4-43.7z" fill="#fff"/>
    <path d="M256.7 176.3H370l-4.2 46.5h-109.1v45.3h104.7l-12.5 138.9-92.2 25.6V176.3z" fill="#ebebeb"/>
  </svg>
)
const IconCSS = () => (
  <svg viewBox="0 0 512 512" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
    <path d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512z" fill="#1572b6"/>
    <path d="M256 480.5V131h148.3L376 447z" fill="#33a9dc"/>
    <path d="M142 176.3h114v45.4H190l4.2 46.5h61.8v45.3H154.4zm0 204.6l7.8 87.6 105.9 29.4 106.1-29.4 7.8-87.6h-45.6l-4 43.7-64.2 17.3-64.1-17.3-4-43.7z" fill="#fff"/>
    <path d="M256.7 176.3H370l-4.2 46.5H256.7v45.3h104.7l-12.5 138.9-92.2 25.6V176.3z" fill="#ebebeb"/>
  </svg>
)
const IconJS = () => (
  <svg viewBox="0 0 630 630" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
    <rect width="630" height="630" fill="#f7df1e"/>
    <path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 37.94 30.45 19.4 0 31.66-7.61 31.66-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
  </svg>
)
const IconFigma = () => (
  <svg viewBox="0 0 38 57" width="40" height="52" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/>
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0acf83"/>
    <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#ff7262"/>
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
  </svg>
)
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)
const IconReact = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.016-.386zm7.268.005c.696.103 1.37.236 2.01.386-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.017.387.24-.378.48-.764.705-1.16.226-.392.435-.784.636-1.175zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.773.705 1.145-.696-.103-1.37-.236-2.01-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.09 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="#61DAFB"/>
  </svg>
)
const IconTypeScript = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.624-.25.167-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.719v-9.646H3.375z" fill="#007ACC"/>
  </svg>
)
const IconNodeJS = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 l-8.79,5.072C3.024,6.76,2.972,6.85,2.972,6.921v10.15c0,0.097,0.053,0.188,0.137,0.233l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.127-0.215-0.254-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.656,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" fill="#339933"/>
  </svg>
)
const IconNextJS = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5725 0c-.1633.0027-.3264.0144-.4883.0354l8.9058 8.9058c.0413-.3192.0413-.6425 0-.9617V.9617c0-.5311-.431-.9617-.9617-.9617h-7.0186c-.1456 0-.291.0144-.4372.0354zm8.9058 9.8772L11.5725.9717c-.1633.0027-.3264.0144-.4883.0354l8.9058 8.9058c.0413-.3192.0413-.6425 0-.9617V.9617c0-.5311-.431-.9617-.9617-.9617h-7.0186c-.1456 0-.291.0144-.4372.0354zm8.9058 9.8772L11.5725.9717c-.1633.0027-.3264.0144-.4883.0354l8.9058 8.9058c.0413-.3192.0413-.6425 0-.9617V.9617c0-.5311-.431-.9617-.9617-.9617h-7.0186c-.1456 0-.291.0144-.4372.0354z" fill="#000000"/>
    <path d="M12 0L.9617 11.0383c-.5311.5311-.9617.9617-.9617.9617V23.0383c0 .5311.431.9617.9617.9617H23.0383c.5311 0 .9617-.431.9617-.9617V12c0-.5311-.431-.9617-.9617-.9617L12 0z" fill="#ffffff"/>
    <path d="M12 2.423L3.423 11.577c-.423.423-.423.423-.423.423v9.577c0 .423.423.423.423.423h17.154c.423 0 .423-.423.423-.423V12c0-.423-.423-.423-.423-.423L12 2.423z" fill="#000000"/>
  </svg>
)
const IconThreeJS = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#000000"/>
    <path d="M12 4.5L4.5 8.25v7.5c0 4.16 2.88 8.06 6.75 9 3.87-.94 6.75-4.84 6.75-9v-7.5L12 4.5z" fill="#ffffff"/>
    <path d="M12 7l-4.5 2.25v5.25c0 2.77 1.92 5.37 4.5 6 2.58-.63 4.5-3.23 4.5-6V9.25L12 7z" fill="#000000"/>
  </svg>
)
const IconGraphQL = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#E10098"/>
  </svg>
)
const IconPython = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.34.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.22.4-.13.36-.05.31-.01.24.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.01-.36.04-.35.07-.34.11-.33.14-.32.19-.3.23-.29.27-.28.32-.26.36-.24.41-.22.46-.2.51-.18.56-.16.62-.14.68-.12.74-.1.81-.08.88-.06.95-.04.51-.02h.25zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.22-.4.13-.36.05-.31.01-.24-.01h-.16l-.06-.01h-8.16v.83h5.76l.01 2.75.02.37-.01.36-.04.35-.07.34-.11.33-.14.32-.19.3-.23.29-.27.28-.32.26-.36.24-.41.22-.46.2-.51.18-.56.16-.62.14-.68.12-.74.1-.81.08-.88.06-.95.04-.51.02h-.25l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13v-5.34l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.34-.1.3-.07.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V6.07h2.17l.21.03.14-.01zm-6.3 14.55l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z" fill="#3776AB"/>
  </svg>
)
const IconPostgreSQL = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#336791"/>
  </svg>
)
const IconWebGL = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#990000"/>
    <path d="M12 4.5L4.5 8.25v7.5c0 4.16 2.88 8.06 6.75 9 3.87-.94 6.75-4.84 6.75-9v-7.5L12 4.5z" fill="#ffffff"/>
    <path d="M12 7l-4.5 2.25v5.25c0 2.77 1.92 5.37 4.5 6 2.58-.63 4.5-3.23 4.5-6V9.25L12 7z" fill="#990000"/>
  </svg>
)
const IconFramer = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0h16v8h-8l-4 4v-4H4V0zm8 8h8v8h-4l-4 4v-4H4V8h8z" fill="#0055FF"/>
  </svg>
)
const IconLaravel = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 10.24l-1.69-1.69c-.29-.29-.76-.29-1.05 0l-1.69 1.69c-.29.29-.29.76 0 1.05.29.29.76.29 1.05 0l.44-.44v2.44c0 .41-.34.75-.75.75h-3.5c-.41 0-.75-.34-.75-.75v-1.25c0-1.1-.9-2-2-2h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75h1.25c.28 0 .5.22.5.5v1.25c0 1.1.9 2 2 2h3.5c1.1 0 2-.9 2-2v-2.44l.44.44c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.05zM1.44 13.76l1.69 1.69c.29.29.76.29 1.05 0l1.69-1.69c.29-.29.29-.76 0-1.05-.29-.29-.76-.29-1.05 0l-.44.44v-2.44c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75v1.25c0 1.1.9 2 2 2h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.25c-.28 0-.5-.22-.5-.5v-1.25c0-1.1-.9-2-2-2h-3.5c-1.1 0-2 .9-2 2v2.44l-.44-.44c-.29-.29-.76-.29-1.05 0-.29.29-.29.76 0 1.05z" fill="#FF2D20"/>
    <path d="M12 2c-1.1 0-2 .9-2 2v1.25c0 .41.34.75.75.75s.75-.34.75-.75V4c0-.28.22-.5.5-.5h1.25c.41 0 .75-.34.75-.75S13.66 2 13.25 2H12zm0 20c1.1 0 2-.9 2-2v-1.25c0-.41-.34-.75-.75-.75s-.75.34-.75.75V20c0 .28-.22.5-.5.5h-1.25c-.41 0-.75.34-.75.75s.34.75.75.75H12z" fill="#FF2D20"/>
  </svg>
)
const IconPHP = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-1-2H8l-1 2H5l2.5-5h1.5l2.5 5h-1.5zm5.5-2h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm2.5 2l-1-2h-1l-1 2h-1.5l2.5-5h1.5l2.5 5h-1.5z" fill="#777BB4"/>
    <path d="M8.5 11l-.75 1.5h1.5L8.5 11zm7 0l-.75 1.5h1.5L15.5 11z" fill="#777BB4"/>
  </svg>
)
const IconMySQL = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#00758F"/>
    <path d="M11 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#00758F"/>
    <path d="M16 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" fill="#00758F"/>
    <path d="M19 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" fill="#00758F"/>
  </svg>
)

/* ───── CUSTOM CURSOR ───── */
function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const hoverable = el?.closest('a,button,.skill-card,.project-card,.social-btn,.btn-primary,.btn-outline')
      wrapper.current?.classList.toggle('hovering', !!hoverable)
    }
    let raf: number
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.10
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.10
      if (ring.current) {
        ring.current.style.left = ringPos.current.x + 'px'
        ring.current.style.top = ringPos.current.y + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', move)
    raf = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf) }
  }, [])

  return (
    <div ref={wrapper} className="cursor">
      <div ref={dot} className="cursor-dot" style={{ position: 'fixed', pointerEvents: 'none' }} />
      <div ref={ring} className="cursor-ring" style={{ position: 'fixed', pointerEvents: 'none' }} />
    </div>
  )
}

/* ───── LOADER ───── */
function Loader({ done }: { done: boolean }) {
  const [pct, setPct] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'complete'>('loading')
  
  useEffect(() => {
    let v = 0
    const id = setInterval(() => {
      v += Math.random() * 6 + 1.5
      if (v >= 100) { 
        v = 100
        clearInterval(id)
        setPhase('complete')
      }
      setPct(Math.floor(v))
    }, 40)
    return () => clearInterval(id)
  }, [])
  
  return (
    <div className={`loader${done ? ' hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          Iman<span>.</span>Andika
        </div>
        <div className="loader-subtitle">
          {phase === 'loading' ? 'Initializing' : 'Ready'}
        </div>
        <div className="loader-progress">
          <div className="loader-bar-wrap">
            <div className={`loader-bar ${phase === 'complete' ? 'complete' : ''}`} style={{ width: pct + '%' }} />
          </div>
          <div className="loader-count">{String(pct).padStart(3, '0')}%</div>
        </div>
        {phase === 'complete' && (
          <div className="loader-complete">
            <span className="loader-check">✓</span>
            <span>Loading Complete</span>
          </div>
        )}
      </div>
      <div className="loader-bg-pattern">
        <div className="loader-particle particle-1" />
        <div className="loader-particle particle-2" />
        <div className="loader-particle particle-3" />
      </div>
    </div>
  )
}

/* ───── NAV ───── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = ['About', 'Skills', 'Projects', 'Certificates', 'Contact']
  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">I<span>.</span>A</a>
        <ul className="nav-links">
          {links.map(l => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>
        <a href="#contact" className="nav-cta">Start a project</a>
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
      </div>
    </>
  )
}

/* ───── REVEAL HOOK ───── */
function useReveal() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.skill-card')
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
      }, { threshold: 0.08 })
      els.forEach(el => obs.observe(el))
      return () => obs.disconnect()
    }, 100)
    return () => clearTimeout(timer)
  }, [])
}

/* ───── HERO ───── */
function Hero() {
  const [typed, setTyped] = useState('')
  const words = ['Developer', 'Designer', 'Creator', 'Builder']
  const [wi, setWi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wi]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && typed.length < word.length) {
      timeout = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 100)
    } else if (!deleting && typed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && typed.length > 0) {
      timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 55)
    } else if (deleting && typed.length === 0) {
      setDeleting(false); setWi((wi + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [typed, deleting, wi])

  return (
    <section className="hero" id="hero">
      <div className="hero-noise" />
      <div className="hero-line" />
      <div className="hero-line-v lv1" />
      <div className="hero-line-v lv2" />
      <div className="hero-eyebrow">
       
        <div className="hero-eyebrow-line" />
      </div>
      <h1 className="hero-title">
        <span className="line-wrap">
          <span className="line">Crafting</span>
        </span>
        <span className="line-wrap">
          <span className="line stroke-word">Digital</span>
        </span>
        <span className="line-wrap">
          <span className="line accent-word">
            {typed}<span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
          </span>
        </span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-sub">
          I build immersive, high-performance web experiences that blend aesthetic beauty with cutting-edge technology.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <span>View Work</span>
            <span>↓</span>
          </a>
          <a href="#contact" className="btn-outline">Let's Talk →</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow" />
        <span>Scroll</span>
      </div>
    </section>
  )
}

/* ───── MARQUEE ───── */
function MarqueeSection() {
  const skillsWithIcons = [
    { name: 'React', icon: <IconReact /> },
    { name: 'HTML', icon: <IconHTML /> },
    { name: 'Node.js', icon: <IconNodeJS /> },
    { name: 'CSS', icon: <IconCSS /> },
    { name: 'PHP', icon: <IconPHP /> },
  ]
  const skillsWithIcons2 = [
    { name: 'Laravel', icon: <IconLaravel /> },
    { name: 'JavaScript', icon: <IconJS /> },
    { name: 'UI/UX', icon: <IconFigma /> },
    { name: 'Figma', icon: <IconFigma /> },
    { name: 'MySQL', icon: <IconMySQL /> },
  ]
  const dup1 = [...skillsWithIcons, ...skillsWithIcons]
  const dup2 = [...skillsWithIcons2, ...skillsWithIcons2]
  return (
    <div className="marquee-section">
      <div className="marquee-row">
        <div className="marquee-track">
          {dup1.map((skill, i) => (
            <div className="marquee-item" key={i}>
              <span className="m-num">{String(i % skillsWithIcons.length + 1).padStart(2, '0')}</span>
              <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-row">
        <div className="marquee-track reverse">
          {dup2.map((skill, i) => (
            <div className="marquee-item" key={i}>
              <span className="m-num">{String(i % skillsWithIcons2.length + 1).padStart(2, '0')}</span>
              <span style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ───── ABOUT ───── */
function About() {
  return (
    <section className="about" id="about">
      <div className="about-left reveal-left">
        <div className="about-number">01</div>
        <div className="about-avatar-wrap">
          <div className="about-avatar-inner">
            <img src="/profile.jpeg" alt="Iman Andika" className="profile-img" />
          </div>
          <div className="about-avatar-caption">
            <div>
              <div className="avatar-name">Iman Andika</div>
              <div className="avatar-role">Full-Stack Developer</div>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--muted)' }}>
              Bogor, ID
            </div>
          </div>
        </div>
      </div>

      <div className="about-right reveal-right">
        <div className="about-tag">About Me</div>
        <h2 className="about-title">
          Hi, I am <em>Iman Andika</em>
        </h2>
        <p className="about-text">
          I am a student at SMKN 1 Ciomas majoring in PPLG. I have an interest in becoming a Full Stack Developer and enjoy learning how applications are built from the user interface to the system behind the scenes. I continue to improve my skills to create modern, responsive, and useful applications, while focusing on clean and user-friendly results..
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-num">5+</div>
            <div className="stat-label">Projects Done</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">1+</div>
            <div className="stat-label">Years Exp.</div>
          </div>
        </div>
        <a href="#contact" className="btn-primary" style={{ display: 'inline-flex' }}>
          <span>Download CV</span><span>↓</span>
        </a>
      </div>
    </section>
  )
}

/* ───── SKILLS ───── */
const SKILLS = [
  { icon: <IconHTML />, name: 'HTML5', desc: 'Semantic, accessible markup — structuring clean and meaningful web content.' },
  { icon: <IconCSS />, name: 'CSS3', desc: 'Responsive layouts, animations, and modern design systems from scratch.' },
  { icon: <IconJS />, name: 'JavaScript', desc: 'Dynamic interactivity, async logic, and modern ES6+ patterns.' },
  { icon: <IconFigma />, name: 'Figma', desc: 'UI/UX design, prototyping, and design system creation for web apps.' },
]

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-divider" style={{ margin: '0 0 0 0' }} />
      <div style={{ padding: 'var(--space-3xl) 0 0' }}>
        <div className="skills-header reveal">
          <h2 className="skills-title">
            Web <em>Developer</em>
          </h2>
          <p className="skills-desc">
            Focused on crafting clean, responsive, and visually stunning websites using core web technologies.
          </p>
        </div>
        <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {SKILLS.map((s, i) => (
            <div key={s.name} className="skill-card">
              <div className="skill-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───── PROJECTS ───── */
const PROJECTS = [
  { num: '01', tags: ['PHP', 'MySQL'], title: 'School Management System', desc: 'Comprehensive school management platform with student records, attendance tracking, grade management, and parent portal access.', accent: true, image: '/school manajemen.png' },
  { num: '02', tags: ['PHP', 'Laravel', 'MySQL'], title: 'Coffee Shop Website', desc: 'Modern coffee shop website with online ordering, menu showcase, reservation system, and responsive design for mobile devices.', accent: false, image: '/website coffe shop.png' },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-divider" />
      <div style={{ paddingTop: 'var(--space-3xl)' }}>
        <div className="projects-header reveal">
          <h2 className="projects-title">
            Featured <em>projects</em>
          </h2>
        </div>
        <div className="projects-list">
          {PROJECTS.map((p) => (
            <a key={p.title} href="#" className="project-card reveal">
              <div className="project-num">{p.num}</div>
              <img src={p.image} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map(t => <span key={t} className={`tag${p.accent ? ' accent' : ''}`}>{t}</span>)}
                </div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
              </div>
              <div className="project-arrow">↗</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───── CERTIFICATES ───── */
const CERTS = [
  {
    idx: '01',
    year: '2024',
    title: 'Dasar Pemrograman web',
    issuer: 'codingcamp',
    desc: 'Learned the fundamentals of web programming, including HTML structure, CSS styling, and responsive design to ensure websites work well across different devices.',
    image: '/serti1.jpg',
  },
  {
    idx: '02',
    year: '2024',
    title: 'dasar pemrograman javascript',
    issuer: 'codingcamp',
    desc: 'Learned the fundamentals of JavaScript, including ES6+, DOM manipulation, event handling, and building interactive features for modern web applications.',
    image: '/serti2.png',
  },
  ]

function Experience() {
  return (
    <section className="experience" id="certificates">
      <div className="section-divider" />
      <div style={{ paddingTop: 'var(--space-3xl)' }}>
        <div className="experience-header reveal">
          <h2 className="experience-title">
            My <em>certificates</em>
          </h2>
        </div>
        <div className="timeline">
          {CERTS.map((c) => (
            <div key={c.title} className="timeline-item reveal">
              <div className="timeline-left">
                <div className="timeline-date">{c.year}</div>
                <div className="timeline-index">{c.idx}</div>
              </div>
              <div className="timeline-right">
                <img src={c.image} alt={c.title} style={{ width: '100%', maxWidth: '300px', height: 'auto', marginBottom: '12px', borderRadius: '8px' }} />
                <div className="timeline-role">{c.title}</div>
                <div className="timeline-company">{c.issuer}</div>
                <div className="timeline-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───── CONTACT ───── */
function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }
  return (
    <section className="contact" id="contact">
      <div className="section-divider" />
      <div style={{ paddingTop: 'var(--space-3xl)' }}>
        <h2 className="contact-title reveal">
          Let's<br />work<br /><em>together</em>
        </h2>
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <p className="contact-sub">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something extraordinary together.
            </p>
            <div className="contact-links">
              {[
                { label: 'GitHub', icon: <IconGithub />, href: '#', meta: '@imanandika' },
                { label: 'LinkedIn', icon: <IconLinkedin />, href: '#', meta: '/in/imanandika' },
                { label: 'Twitter / X', icon: <IconTwitter />, href: '#', meta: '@imandev' },
                { label: 'Instagram', icon: <IconInstagram />, href: '#', meta: '@_imn.and' },
              ].map(s => (
                <a key={s.label} href={s.href} className="social-btn">
                  <span className="social-btn-left">{s.icon}{s.label}</span>
                  <span>{s.meta} ↗</span>
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form reveal-right" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Project Inquiry" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={6} placeholder="Tell me about your project..." required />
            </div>
            <button
              type="submit"
              className="btn-primary"
              style={{ alignSelf: 'flex-start', cursor: 'none', border: 'none', fontFamily: 'var(--font-mono)' }}
            >
              <span>{sent ? '✓ Message Sent!' : 'Send Message'}</span>
              {!sent && <span>→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ───── FOOTER ───── */
function Footer() {
  return (
    <footer>
      <div className="footer-copy">© 2026 Iman Andika. All rights reserved.</div>
      <div className="footer-credit">Built with <span>♥</span> using React + Vite</div>
    </footer>
  )
}

/* ───── MAIN CONTENT ───── */
function MainContent() {
  useReveal()
  return (
    <div style={{ animation: 'fadeIn 0.6s ease' }}>
      <Nav />
      <Hero />
      <MarqueeSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

/* ───── APP ───── */
export default function App() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2600)
    return () => clearTimeout(t)
  }, [])
  return (
    <>
      <Cursor />
      <Loader done={loaded} />
      {loaded && <MainContent />}
    </>
  )
}
