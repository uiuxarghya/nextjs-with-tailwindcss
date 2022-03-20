import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function HomePage() {
  const [copySuccess, setCopySuccess] = useState("");

  // your function to copy here

  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Copied!");
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <title>Next JS + Tailwind CSS Starter Project.</title>
        <meta
          name="description"
          content="Next JS + Tailwind CSS Starter Project."
        />
        <meta
          property="og:site_name"
          content="Next JS + Tailwind CSS Starter Project."
        />
        <meta
          property="og:title"
          content="Next JS + Tailwind CSS Starter Project."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Next JS + Tailwind CSS Starter Project."
        />
        <meta
          property="og:image"
          content="https://nextjs-plus-tailwindcss.vercel.app/og.png"
        />
        <meta
          property="og:url"
          content="https://nextjs-plus-tailwindcss.vercel.app/"
        />
        <meta
          property="twitter:site_name"
          content="Next JS + Tailwind CSS Starter Project."
        />
        <meta
          property="twitter:title"
          content="Next JS + Tailwind CSS Starter Project."
        />
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:description"
          content="Next JS + Tailwind CSS Starter Project."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://nextjs-plus-tailwindcss.vercel.app/og.png"
        />
        <meta
          property="twitter:url"
          content="https://nextjs-plus-tailwindcss.vercel.app/"
        />
      </Head>
      <main>
        <div className="relative flex h-screen justify-center">
          <div className="absolute top-1/2 left-1/2 m-0 flex -translate-x-1/2 -translate-y-1/2 flex-col text-3xl font-bold">
            <div className="mx-auto flex items-center">
              <Link href="https://nextjs.org/">
                <a>
                  <svg
                    viewBox="0 0 1680 1000"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4 h-16 w-auto hover:opacity-60"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M741.325 260.814H774.977L924.1 466.142L1076.52 260.814L1283.84 0L943.235 487.721L1118.75 727.707H1083.78L924.1 509.301L763.76 727.707H729.448L906.284 487.721L741.325 260.814ZM396.231 260.814H712.952V285.663H425.264V472.681H695.796V497.53H425.264V702.858H716.251V727.707H396.231V260.814ZM1131.29 260.814V285.663L1296.91 285.663V727.707H1325.94V285.663H1492.22V260.814H1131.29Z"
                      fill="black"
                    />
                    <path
                      d="M0 260.814H36.291L536.722 1000L329.918 727.707L30.3524 296.125L29.0328 727.707H0V260.814Z"
                      fill="black"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1639.98 696.616C1617.39 696.616 1602.2 685.1 1601.08 667.093H1616.75C1618.09 676.655 1627.56 682.727 1641.18 682.727C1653.89 682.727 1663.22 676.236 1663.22 667.302C1663.22 659.625 1657.28 655.019 1643.8 651.878L1630.66 648.737C1612.23 644.48 1603.83 635.686 1603.83 620.889C1603.83 602.952 1618.66 591.017 1640.9 591.017C1661.59 591.017 1676.7 602.952 1677.62 619.912H1662.23C1660.74 610.63 1652.55 604.837 1640.69 604.837C1628.19 604.837 1619.86 610.769 1619.86 619.842C1619.86 627.031 1625.23 631.149 1638.5 634.22L1649.73 636.942C1670.63 641.758 1679.25 650.133 1679.25 665.278C1679.25 684.541 1664.13 696.616 1639.98 696.616ZM1517.82 668C1517.82 685.309 1530.46 696.616 1548.89 696.616C1568.52 696.616 1580.39 684.96 1580.39 664.72V593.46H1564.57V664.65C1564.57 675.887 1558.85 681.889 1548.75 681.889C1539.71 681.889 1533.57 676.306 1533.36 668H1517.82ZM1489.29 695.36C1495.29 695.36 1499.67 690.823 1499.67 684.96C1499.67 679.098 1495.29 674.561 1489.29 674.561C1483.36 674.561 1478.91 679.098 1478.91 684.96C1478.91 690.823 1483.36 695.36 1489.29 695.36Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </Link>
              <span>+</span>
              <Link href="https://tailwindcss.com/">
                <a>
                  <svg
                    viewBox="0 0 248 31"
                    className="ml-4 h-6 w-auto hover:opacity-60"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                      fill="#38bdf8"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="space-y-4 text-center ">
              <Link href="https://github.com/uiuxarghya/nextjs-with-tailwindcss">
                <a className="hover:underline">Starter Project</a>
              </Link>
              <div className="flex items-center rounded bg-zinc-200 px-4 py-2 ">
                <pre className="mr-2 font-mono text-sm">
                  <code>gh repo clone uiuxarghya/nextjs-with-tailwindcss</code>
                </pre>
                <button
                  onClick={() =>
                    copyToClipBoard(
                      "gh repo clone uiuxarghya/nextjs-with-tailwindcss"
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
                <p className="text-sm font-medium">{copySuccess}</p>
              </div>
              <p className="text-xs font-medium text-zinc-400">
                Copy &amp; Paste it in your terminal to get strated. Read the{" "}
                <Link href="https://github.com/uiuxarghya/nextjs-with-tailwindcss#readme">
                  <a className="text-zinc-800 hover:underline font-semibold">README</a>
                </Link>{" "}
                for more info.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
