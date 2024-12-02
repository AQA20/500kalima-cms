import React from 'react';

interface LogoProps {
  fill: string;
}

export const Logo: React.FC<LogoProps> = ({ fill }) => {
  return (
    <svg
      width="66"
      height="24"
      viewBox="0 0 66 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill }}
    >
      <path
        d="M2.75 2C1.7835 2 1 2.7835 1 3.75C1 4.7165 1.78389 5.5 2.75039 5.5C4.31996 5.5 5.70066 5.5 7.2497 5.5C8.2162 5.5 9 4.7165 9 3.75C9 2.7835 8.2165 2 7.25 2H2.75Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.7733 13.1924C32.6886 13.2008 32.6082 13.205 32.532 13.205C32.2189 13.205 31.9227 13.1627 31.6434 13.0781C31.2879 12.985 30.9748 12.8369 30.7039 12.6338C30.4416 12.4306 30.2342 12.1767 30.0819 11.872C29.9295 11.5674 29.8533 11.2161 29.8533 10.8183V10.6279C29.8533 10.5602 29.8576 10.4967 29.866 10.4375C29.9591 9.91273 30.1369 9.4557 30.3992 9.06638C30.6616 8.66859 30.9536 8.28773 31.2752 7.9238C31.2921 7.88994 31.3175 7.85609 31.3514 7.82224C31.3852 7.77992 31.4149 7.74606 31.4402 7.72067L35.1473 3.44235L37.6356 5.60056L33.9412 9.87888H39.3367C40.0985 9.87888 40.7671 10.0101 41.3426 10.2724C41.9181 10.5348 42.3963 10.8818 42.7772 11.3134C43.1665 11.7451 43.4542 12.236 43.6404 12.7861C43.8351 13.3362 43.9324 13.8948 43.9324 14.4619C43.9324 15.0374 43.8351 15.6002 43.6404 16.1504C43.4542 16.692 43.1665 17.1787 42.7772 17.6103C42.3963 18.0335 41.9181 18.3763 41.3426 18.6386C40.7671 18.901 40.0985 19.0322 39.3367 19.0322H29V19.0312C28.3925 19.0202 27.8262 18.9232 27.301 18.7402C26.7508 18.5371 26.2684 18.262 25.8537 17.915C25.439 18.262 24.9523 18.5371 24.3937 18.7402C23.8523 18.9318 23.2659 19.0292 22.6343 19.0322L17.1441 19.0576C16.5602 19.0576 16.0058 18.956 15.481 18.7529C14.9654 18.55 14.5047 18.2754 14.0988 17.9291C14.0851 17.9405 14.0712 17.9518 14.0573 17.963C13.8239 18.1668 13.579 18.3328 13.3228 18.4609C13.0605 18.5963 12.7854 18.7063 12.4977 18.791C12.4643 18.7998 12.4307 18.8084 12.3969 18.8168C12.183 18.8757 11.9628 18.9195 11.7375 18.947C11.6866 18.9547 11.6353 18.9619 11.5836 18.9687C11.3336 18.995 11.1196 18.9993 10.8337 18.9706C10.5761 18.956 10.3772 18.9245 10.188 18.874C8.13291 18.4219 6.59375 16.5901 6.59375 14.3976V12.164C6.59375 11.9101 6.55143 11.6901 6.4668 11.5039C6.39062 11.3092 6.28906 11.1526 6.16211 11.0341C6.03516 10.9157 5.89128 10.8268 5.73047 10.7675C5.57812 10.7168 5.42578 10.6914 5.27344 10.6914H5.20996C5.03223 10.6998 4.85872 10.7379 4.68945 10.8056C4.52018 10.8733 4.37207 10.9707 4.24512 11.0976C4.11816 11.2161 4.01237 11.3685 3.92773 11.5547C3.85156 11.7324 3.81348 11.9355 3.81348 12.164V14.2968C3.81348 14.5254 3.85156 14.7285 3.92773 14.9062C4.01237 15.084 4.11816 15.2321 4.24512 15.3506C4.37207 15.469 4.52018 15.5621 4.68945 15.6299C4.85872 15.6891 5.03223 15.723 5.20996 15.7314H5.83203L4.75293 19.0068C4.15202 18.9306 3.59342 18.7571 3.07715 18.4863C2.56087 18.2155 2.1123 17.8727 1.73145 17.458C1.35059 17.0433 1.05013 16.5693 0.830078 16.0361C0.610026 15.5029 0.5 14.9401 0.5 14.3476V12.1133C0.5 11.47 0.622721 10.8649 0.868164 10.2978C1.12207 9.7223 1.46061 9.22295 1.88379 8.79977C2.30697 8.3766 2.80208 8.04229 3.36914 7.79684C3.94466 7.54294 4.55404 7.41599 5.19727 7.41599C5.84049 7.41599 6.44564 7.54294 7.0127 7.79684C7.58822 8.04229 8.08756 8.3766 8.51074 8.79977C8.94238 9.22295 9.28092 9.7223 9.52637 10.2978C9.78027 10.8649 9.90723 11.47 9.90723 12.1133V14.4189C9.90723 15.1167 10.4729 15.6824 11.1707 15.6824C11.8685 15.6824 12.4342 15.1167 12.4342 14.4189V12.1133C12.4342 11.47 12.5569 10.8649 12.8023 10.2978C13.0562 9.7223 13.3948 9.22295 13.818 8.79977C14.2411 8.3766 14.7363 8.04229 15.3033 7.79684C15.8788 7.54294 16.4924 7.41599 17.1441 7.41599C17.7874 7.41599 18.3967 7.54294 18.9723 7.79684C19.5478 8.04229 20.0471 8.3766 20.4703 8.79977C20.8935 9.22295 21.2278 9.7223 21.4732 10.2978C21.7271 10.8649 21.8541 11.47 21.8541 12.1133V15.7314H22.6037C22.7984 15.7314 22.9888 15.7018 23.175 15.6425C23.3696 15.5748 23.5432 15.4817 23.6955 15.3633C23.8478 15.2363 23.9706 15.084 24.0637 14.9062C24.1568 14.7285 24.2033 14.5254 24.2033 14.2968V3.92477H27.5168V14.2968C27.5168 14.5254 27.5633 14.7285 27.6564 14.9062C27.7495 15.084 27.868 15.2363 28.0119 15.3633C28.1642 15.4817 28.3335 15.5748 28.5197 15.6425C28.7144 15.7018 28.9133 15.7314 29.1164 15.7314H39.286C39.5229 15.7314 39.7303 15.6976 39.908 15.6299C40.0942 15.5621 40.2466 15.4733 40.3651 15.3633C40.492 15.2448 40.5851 15.1136 40.6444 14.9697C40.7036 14.8174 40.7332 14.6608 40.7332 14.5C40.7332 14.3392 40.6994 14.1826 40.6317 14.0302C40.5724 13.8694 40.4835 13.7298 40.3651 13.6113C40.2466 13.4843 40.0942 13.3828 39.908 13.3066C39.7303 13.2304 39.5229 13.1924 39.286 13.1924H32.7733ZM15.7603 12.164V14.3095C15.7603 14.5381 15.7984 14.7412 15.8746 14.9189C15.9592 15.0966 16.065 15.249 16.192 15.3759C16.3274 15.4944 16.4755 15.5875 16.6363 15.6552C16.8056 15.7145 16.9791 15.7483 17.1568 15.7568H18.5533V12.164C18.5533 11.9101 18.511 11.6901 18.4264 11.5039C18.3502 11.3092 18.2444 11.1526 18.109 11.0341C17.982 10.9157 17.8381 10.8268 17.6773 10.7675C17.525 10.7168 17.3727 10.6914 17.2203 10.6914H17.1568C16.9791 10.6998 16.8056 10.7379 16.6363 10.8056C16.4755 10.8733 16.3274 10.9707 16.192 11.0976C16.065 11.2161 15.9592 11.3685 15.8746 11.5547C15.7984 11.7324 15.7603 11.9355 15.7603 12.164Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66 9.91667C66 14.6111 62.4183 17 58 17C53.5817 17 50 14.6111 50 9.91667C50 5.22225 53.5817 0 58 0C62.4183 0 66 5.22225 66 9.91667ZM62 9.91667C62 11.1431 61.5837 11.7469 61.1245 12.1224C60.5629 12.5817 59.5352 13 58 13C56.4648 13 55.4371 12.5817 54.8755 12.1224C54.4163 11.7469 54 11.1431 54 9.91667C54 8.51448 54.5643 6.87766 55.5201 5.62838C56.4932 4.35633 57.4372 4 58 4C58.5628 4 59.5068 4.35633 60.4799 5.62838C61.4357 6.87766 62 8.51448 62 9.91667Z"
        fill={fill}
      />
      <path
        d="M58 22.5778C57.2309 23.2546 56.0584 24 54.625 24C53.1753 24 52 22.8807 52 21.5C52 20.1193 53.1753 19 54.625 19C56.0584 19 57.2309 19.7454 58 20.4222C58.7691 19.7454 59.9416 19 61.375 19C62.8247 19 64 20.1193 64 21.5C64 22.8807 62.8247 24 61.375 24C59.9416 24 58.7691 23.2546 58 22.5778Z"
        fill={fill}
      />
    </svg>
  );
};
