import config from '@/lib/config'

export default function () {
  return (
    <>
      <span className="text-xs font-semibold uppercase -tracking-extra-tight">Follow us</span>
      <ul className="mt-4 flex flex-wrap gap-4">
        <li className="flex items-center">
          <a className="group flex items-center justify-center rounded-full" aria-label="X" href={config.x} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="none"
              viewBox="0 0 16 16"
              className="h-4 w-auto text-gray-new-70 transition-colors duration-200 group-hover:text-green-45"
            >
              <g clipPath="url(#x_inline_svg__a)">
                <g clipPath="url(#x_inline_svg__b)">
                  <path
                    fill="currentColor"
                    d="M9.508 6.776 15.46 0h-1.41L8.88 5.882 4.753 0h-4.76l6.24 8.895L-.006 16h1.41l5.456-6.213L11.218 16h4.76M1.912 1.04h2.166L14.05 15.01h-2.166"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="x_inline_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
                <clipPath id="x_inline_svg__b">
                  <path fill="#fff" d="M-.008 0H15.98v16H-.008z" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li className="flex items-center">
          <a className="group flex items-center justify-center rounded-full" aria-label="LinkedIn" href={config.lnkd} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="none"
              viewBox="0 0 16 16"
              className="h-4 w-auto text-gray-new-70 transition-colors duration-200 group-hover:text-green-45"
            >
              <g clipPath="url(#linkedin-sm_inline_svg__a)">
                <path
                  fill="currentColor"
                  d="M15.3 0H.7C.3 0 0 .3 0 .7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V.7c-.1-.4-.4-.7-.8-.7M4.7 13.6H2.4V6h2.4v7.6zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4S5 2.8 5 3.6C4.9 4.3 4.3 5 3.6 5m10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2z"
                />
              </g>
              <defs>
                <clipPath id="linkedin-sm_inline_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </li>
        <li className="flex items-center">
          <a className="group flex items-center justify-center rounded-full" aria-label="YouTube" href={config.yt} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={16}
              fill="none"
              viewBox="0 0 18 16"
              className="h-4 w-auto text-gray-new-70 transition-colors duration-200 group-hover:text-green-45"
            >
              <path
                fill="currentColor"
                d="M17.775 4.65c-.225-1.463-.9-2.475-2.475-2.7C12.825 1.5 9 1.5 9 1.5s-3.825 0-6.3.45C1.125 2.175.337 3.188.225 4.65 0 6.112 0 8.25 0 8.25s0 2.137.225 3.6.9 2.475 2.475 2.7C5.175 15 9 15 9 15s3.825 0 6.3-.45c1.575-.338 2.25-1.238 2.475-2.7S18 8.25 18 8.25s0-2.137-.225-3.6M6.75 11.625v-6.75l5.625 3.375z"
              />
            </svg>
          </a>
        </li>
        <li className="flex items-center">
          <a className="group flex items-center justify-center rounded-full" aria-label="Discord" href={config.discord} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={16}
              fill="none"
              viewBox="0 0 18 16"
              className="h-4 w-auto text-gray-new-70 transition-colors duration-200 group-hover:text-green-45"
            >
              <path
                fill="currentColor"
                d="M15.235 2.132A15.2 15.2 0 0 0 11.523 1c-.16.276-.35.653-.473.957a14 14 0 0 0-4.11 0A10 10 0 0 0 6.457 1c-1.307.22-2.548.607-3.712 1.132C.396 5.574-.238 8.932.075 12.236A15 15 0 0 0 4.628 14.5c.37-.488.691-1.012.976-1.555a9 9 0 0 1-1.535-.727c.133-.092.256-.194.38-.286 2.963 1.344 6.174 1.344 9.1 0 .123.102.246.194.378.286-.483.285-1.003.524-1.534.727.284.543.606 1.067.976 1.555a14.9 14.9 0 0 0 4.555-2.264c.369-3.837-.635-7.16-2.67-10.104zm-9.233 8.08c-.89 0-1.62-.801-1.62-1.786 0-.984.711-1.785 1.62-1.785s1.63.8 1.62 1.785c0 .976-.71 1.786-1.62 1.786m5.976 0c-.89 0-1.62-.801-1.62-1.786 0-.984.71-1.785 1.62-1.785.909 0 1.628.8 1.619 1.785 0 .976-.71 1.786-1.62 1.786"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  )
}
