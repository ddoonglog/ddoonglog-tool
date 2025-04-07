'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { saveAs } from 'file-saver'

export default function ShortsScriptGenerator() {
  const [topic, setTopic] = useState('')
  const [script, setScript] = useState('')
  const [scriptEn, setScriptEn] = useState('')

  const getExpression = (korean: string) => {
    if (korean.includes('놀람') || korean.includes('헐') || korean.includes('충격')) return 'Shocked / Surprised'
    if (korean.includes('분노') || korean.includes('빡침')) return 'Angry / Frustrated'
    if (korean.includes('멍') || korean.includes('한숨')) return 'Blank / Tired'
    if (korean.includes('웃음')) return 'Smiling / Happy'
    if (korean.includes('혼잣말')) return 'Thinking / Curious'
    return 'Neutral'
  }

  const generateScript = () => {
    if (!topic.trim()) return

    const ko = `둥둥로그 쇼츠 영상 제작 템플릿 (40~60초)

영상 제목:
${topic}

타임라인 및 컷 구성:

0~3초
인트로 훅
- 이미지: 둥둥이 놀람, 분노 등 강한 표정 (${getExpression('놀람, 분노')})
- 자막 예시: 이거 듣고도 안 놀랄 수 있음 / 실제 있었던 일임

3~7초
상황 도입
- 이미지: 둥둥이 기본 표정 (${getExpression('기본')}), 배경 없이 또는 간단한 컷
- 자막 예시: 그날은 ${topic} 시작이었어

7~15초
전개 1
- 이미지: 배경 있는 컷, 둥둥이 관찰하는 표정 (${getExpression('관찰')})
- 자막 예시: 근데 뭔가 이상했어 / 싸했달까

15~23초
전개 2
- 이미지: 둥둥이 당황, 움찔 컷 (${getExpression('당황')})
- 자막 예시: 갑자기 이상한 일이 생겼어

23~30초
하이라이트
- 이미지: 둥둥이 충격 컷 (${getExpression('충격')})
- 자막 예시: 헐 진짜 선 넘었다 / 도망치고 싶었음

30~38초
여운
- 이미지: 둥둥이 멍하거나 한숨 컷 (${getExpression('멍, 한숨')})
- 자막 예시: 진짜 고민됐어 / 계속해야 하나...

38~45초
나의 생각 또는 반전
- 이미지: 둥둥이 혼잣말 컷 (${getExpression('혼잣말')})
- 자막 예시: 근데 또 해버렸어 / 생각보다 괜찮았거든

45~50초
참여 유도
- 이미지: 둥둥이 손 흔들기, 윙크 (${getExpression('웃음')})
- 자막 예시: 너라면 어땠을 것 같아 / 댓글 달아줘

50~60초
아웃트로 또는 티저
- 이미지: 몽실이 등장 또는 다음화 예고 컷 (${getExpression('기본')})
- 자막 예시: 다음화 더 대박임 / To be continued`

    const en = `DdoongDdoongLog Shorts Script Template (40–60s)

Video Title:
${topic}

Timeline & Cuts:

0–3s
Intro Hook
- Image: DdoongDdoong with shocked or angry expression (Shocked / Frustrated)
- Subtitle example: You won't believe this / This actually happened

3–7s
Scene Intro
- Image: DdoongDdoong with neutral expression, plain or simple background
- Subtitle example: It all started with my first day ${topic}...

7–15s
Development 1
- Image: Scene background, DdoongDdoong observing something (Curious)
- Subtitle example: Something felt weird / I got a strange vibe

15–23s
Development 2
- Image: DdoongDdoong looking confused or flinching (Confused)
- Subtitle example: Then something totally unexpected happened

23–30s
Highlight
- Image: DdoongDdoong in shock (Shocked)
- Subtitle example: That crossed the line / I wanted to run away

30–38s
Aftermath
- Image: DdoongDdoong blank or sighing (Tired / Blank)
- Subtitle example: I seriously thought about quitting / Should I keep doing this...

38–45s
Reflection or Twist
- Image: DdoongDdoong thinking to self (Thinking)
- Subtitle example: But I went back... / Honestly it wasn’t that bad

45–50s
Engagement (CTA)
- Image: DdoongDdoong waving or winking (Happy)
- Subtitle example: What would you have done? / Tell me in the comments!

50–60s
Outro or Teaser
- Image: Mongshil appears or teaser for next episode (Neutral)
- Subtitle example: Next one’s even crazier / To be continued`

    setScript(ko)
    setScriptEn(en)
  }

  const handleDownload = () => {
    const blob = new Blob([script + '\n\n---\n\n' + scriptEn], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, `ddoonglog_script_${Date.now()}.txt`)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">둥둥로그 쇼츠 대본 생성기</h1>
      <Textarea
        placeholder="예: 사장님이 이상했던 알바 썰"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <div className="flex gap-2">
        <Button onClick={generateScript}>한글/영문 대본 생성</Button>
        {script && <Button onClick={handleDownload}>텍스트 파일 다운로드</Button>}
      </div>
      {script && (
        <>
          <Textarea className="whitespace-pre mt-4 h-[400px]" value={script} readOnly />
          <Textarea className="whitespace-pre mt-4 h-[400px]" value={scriptEn} readOnly />
        </>
      )}
    </div>
  )
}
