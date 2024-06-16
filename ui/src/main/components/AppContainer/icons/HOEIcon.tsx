import React from 'react';

export const HoeIcon: React.FC<{
    className: any;
}> = (props) => {
    return (
        <svg className={props.className} viewBox='0 0 104 104' fill='none' >
                <g filter='url(#filter0_d_580_48)'>
                    <rect x={4} width={96} height={96} rx={10} fill='#282D37' />
                    <path d='M75.0595 32.6023L52.747 25.4305C52.5871 25.3746 52.4129 25.3746 52.253 25.4305L29.9405 32.6023C29.7807 32.6545 29.6415 32.7557 29.5427 32.8917C29.444 33.0276 29.3908 33.1913 29.3906 33.3594V70.8125C29.3906 71.0238 29.4746 71.2266 29.624 71.376C29.7735 71.5255 29.9762 71.6094 30.1875 71.6094H34.5225C34.7338 71.6094 34.9365 71.5255 35.086 71.376C35.2354 71.2266 35.3194 71.0238 35.3194 70.8125V48.8825H69.6806V70.8125C69.6806 71.0238 69.7646 71.2266 69.914 71.376C70.0634 71.5255 70.2662 71.6094 70.4775 71.6094H74.8125C75.0238 71.6094 75.2266 71.5255 75.376 71.376C75.5254 71.2266 75.6094 71.0238 75.6094 70.8125V33.3594C75.6092 33.1913 75.556 33.0276 75.4573 32.8917C75.3585 32.7557 75.2193 32.6545 75.0595 32.6023ZM35.3194 41.5194H69.6806V43.6072H35.3194V41.5194ZM69.6806 37.8378V39.9256H35.3194V37.8378H69.6806ZM35.3194 47.2887V45.2009H69.6806V47.2887H35.3194Z' fill='white' />
                    <path d='M67.6407 53.9825H64.1902C64.028 53.9854 63.8712 54.0413 63.744 54.1419L63.4969 52.9625C63.2662 52.1287 62.7657 51.395 62.0736 50.8759C61.3815 50.3569 60.537 50.0818 59.6719 50.0938H45.3282C44.461 50.0891 43.6167 50.3719 42.9274 50.8983C42.2382 51.4245 41.743 52.1645 41.5191 53.0024L41.2801 54.1419C41.1527 54.0413 40.996 53.9854 40.8338 53.9825H37.3594C37.148 53.9825 36.9454 54.0664 36.796 54.2159C36.6465 54.3653 36.5626 54.5681 36.5626 54.7794V56.9628C36.5601 57.1538 36.6263 57.3393 36.7492 57.4856C36.8721 57.6319 37.0433 57.7291 37.2319 57.7597L40.4194 58.2856V58.4211C39.7891 58.7513 39.2517 59.2344 38.8563 59.8261C38.461 60.4178 38.2202 61.0991 38.1563 61.8078L37.8615 65.0909C37.8694 65.1142 37.8694 65.1394 37.8615 65.1627V69.5216C37.8592 70.0677 38.072 70.5928 38.4536 70.9834C38.8353 71.3741 39.3554 71.5989 39.9015 71.6094H43.0491C43.348 71.6049 43.6427 71.5376 43.9138 71.4116C44.185 71.2857 44.4266 71.104 44.6228 70.8785C44.8191 70.6529 44.9655 70.3885 45.0528 70.1026C45.14 69.8166 45.1659 69.5154 45.129 69.2188H59.8712C59.8341 69.5154 59.8601 69.8166 59.9473 70.1026C60.0345 70.3885 60.181 70.6529 60.3773 70.8785C60.5735 71.104 60.8151 71.2857 61.0862 71.4116C61.3574 71.5376 61.652 71.6049 61.951 71.6094H65.1385C65.6887 71.6094 66.2165 71.3914 66.6063 71.003C66.9962 70.6147 67.2162 70.0878 67.2184 69.5375V68.4219C67.2184 68.3741 67.2184 65.2344 67.2184 65.1547C67.2184 65.075 66.9235 61.8875 66.9315 61.8397C66.8725 61.1305 66.6366 60.4475 66.2454 59.853C65.8543 59.2585 65.3202 58.7717 64.6923 58.437V58.3016L67.8798 57.7756C68.0683 57.745 68.2396 57.6478 68.3625 57.5015C68.4853 57.3553 68.5515 57.1698 68.5491 56.9788V54.7794C68.5502 54.6646 68.5266 54.551 68.4797 54.4463C68.4329 54.3415 68.364 54.2481 68.2777 54.1725C68.1915 54.0968 68.0899 54.0407 67.98 54.0078C67.87 53.9751 67.7542 53.9664 67.6407 53.9825ZM43.0491 53.3689C43.1887 52.8755 43.4883 52.4425 43.9008 52.1381C44.3135 51.8337 44.8156 51.6752 45.3282 51.6875H59.6719C60.1743 51.6785 60.6658 51.8341 61.0715 52.1305C61.4772 52.4268 61.7749 52.8478 61.9191 53.3291L62.8754 57.8713H42.1407L43.0491 53.3689ZM65.5848 65.2344V69.5614C65.5848 69.6248 65.5721 69.6877 65.5476 69.7462C65.5231 69.8048 65.4871 69.8579 65.4419 69.9023C65.3966 69.9469 65.343 69.9819 65.284 70.0054C65.2251 70.029 65.1621 70.0406 65.0987 70.0395H61.9112C61.449 70.0395 61.3932 69.5933 61.4251 69.2427H62.3973C62.6086 69.2427 62.8112 69.1587 62.9607 69.0093C63.1101 68.8598 63.1941 68.6571 63.1941 68.4458C63.1941 68.2345 63.1101 68.0317 62.9607 67.8823C62.8112 67.7328 62.6086 67.6489 62.3973 67.6489H57.4566V66.1747C57.4566 65.9634 57.3726 65.7606 57.2232 65.6112C57.0737 65.4617 56.8711 65.3778 56.6598 65.3778H48.3404C48.129 65.3778 47.9263 65.4617 47.7769 65.6112C47.6274 65.7606 47.5435 65.9634 47.5435 66.1747V67.625H42.563C42.3516 67.625 42.149 67.7089 41.9996 67.8584C41.8501 68.0078 41.7662 68.2106 41.7662 68.4219C41.7662 68.6332 41.8501 68.8359 41.9996 68.9854C42.149 69.1348 42.3516 69.2188 42.563 69.2188H43.5352C43.5352 69.5853 43.5352 70.0156 43.0491 70.0156H39.9015C39.838 70.0167 39.7749 70.0051 39.716 69.9815C39.6571 69.958 39.6034 69.923 39.5582 69.8784C39.5129 69.8339 39.477 69.7809 39.4525 69.7223C39.428 69.6638 39.4153 69.6009 39.4154 69.5375V65.2344L39.7023 61.9911C39.7565 61.3112 40.066 60.677 40.5686 60.2158C41.0711 59.7547 41.7295 59.5006 42.4116 59.5049H62.5885C63.2706 59.5006 63.9289 59.7547 64.4315 60.2158C64.934 60.677 65.2435 61.3112 65.2979 61.9911L65.5848 65.2344Z' fill='white' />
                    <path d='M62.8116 60.6922L58.6997 61.489C58.4428 61.5394 58.2023 61.6522 57.9993 61.8177C57.7965 61.983 57.6374 62.1959 57.5363 62.4373C56.9546 63.7442 58.2455 65.2423 59.6002 65.2025H63.0825C66.1505 65.1387 65.9035 60.3894 62.8116 60.6922Z' fill='white' />
                    <path d='M46.5871 61.5209L42.4752 60.7241H42.3875C39.3515 60.5647 39.2 65.1945 42.2043 65.2822H45.6866C47.7904 65.2901 48.914 62.1584 46.5871 61.5209Z' fill="white"></path>
                </g>
                <defs>
                    <filter id='filter0_d_580_48' x={0} y={0} filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
                        <feFlood floodOpacity={0} result='BackgroundImageFix' />
                        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                        <feOffset  />
                        <feGaussianBlur />
                        <feComposite in2='hardAlpha' operator='out' />
                        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_580_48' />
                        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_580_48' result='shape' />
                    </filter>
                </defs>
    </svg>
    )
}