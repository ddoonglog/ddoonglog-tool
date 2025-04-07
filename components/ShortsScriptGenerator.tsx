'use client'

import { useState } from 'react'

export default function ShortsScriptGenerator() {
  const [topic, setTopic] = useState('')
  const [script, setScript] = useState('')
  const [scriptEn, setScriptEn] = useState('')

  const generateScript = () => {
    const ko = `한글 대본: ${topic}`
    const en = `English script: ${topic}`
    setScript(ko)
    setScriptEn(en)
  }

  return (
    <div>
      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="주제를 입력하세요"
      />
      <button onClick={generateScript}>생성하기</button>
      <pre>{script}</pre>
      <pre>{scriptEn}</pre>
    </div>
  )
}
