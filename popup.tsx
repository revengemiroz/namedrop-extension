import { useEffect, useReducer, useState } from "react"

import Header from "./header"

import "./style.css"

function IndexPopup() {
  const [data, setData] = useState("")
  const [count, increase] = useReducer((c) => c + 1, 0)

  useEffect(
    () =>
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true
        },
        function (tabs) {
          const tab = tabs[0]
          if (tab.url) {
            setData(tab.url)
          }
        }
      ),
    [chrome]
  )

  return (
    <div
      style={{
        padding: 16
      }}>
      <Header />

      <button
        onClick={() => increase()}
        type="button"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Count:
        <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          {count}
        </span>
      </button>

      {data}
    </div>
  )
}

export default IndexPopup
