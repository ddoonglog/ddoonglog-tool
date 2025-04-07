'use client'

import { useState } from 'react'

export default function ShortsScriptGenerator() {
  const [topic, setTopic] = useState('')
  const [script, setScript] = useState('')

  const generateScript = () => {
    const result = `주제: ${topic}\n\n인트로 → 전개 → 하이라이트 → 마무리`
    setScript(result)
  }

  return (
    <div>
      <h2>쇼츠 대본 생성기</h2>
      <input
        type="text"
        placeholder="주제를 입력하세요"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={generateScript}>대본 생성</button>
      <pre>{script}</pre>
    </div>
  )
}
