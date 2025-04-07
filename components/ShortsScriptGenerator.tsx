'use client'

import { useState } from 'react'

export default function ShortsScriptGenerator() {
  const [topic, setTopic] = useState('')
  const [script, setScript] = useState('')

  const generateScript = () => {
    const ko = `쇼츠 주제: ${topic}\n\n인트로 → 도입 → 전개 → 하이라이트 → 여운 → 반전 → CTA → 티저`
    setScript(ko)
  }

  return (
    <div>
      <h2>쇼츠 대본 생성기</h2>
      <input
        type="text"
        placeholder="썰 주제를 입력하세요"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ padding: '8px', marginBottom: '12px', width: '100%' }}
      />
      <br />
      <button onClick={generateScript}>대본 생성</button>
      <pre style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>{script}</pre>
    </div>
  )
}
