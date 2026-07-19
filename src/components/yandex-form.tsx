import { useEffect, useRef } from 'react'

const RESIZER_SRC = 'https://yastatic.net/s3/forms/_/frame.js'

export function YandexForm({ formId }: { formId: string }) {
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current || document.querySelector(`script[src="${RESIZER_SRC}"]`)) {
      return
    }
    loaded.current = true
    const script = document.createElement('script')
    script.src = RESIZER_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="w-full max-w-full overflow-hidden rounded-lg border border-border bg-surface p-4 shadow-sm sm:p-6">
      <iframe
        src={`https://forms.yandex.ru/u/${formId}/?iframe=1`}
        name={`ya-form-${formId}`}
        title="Форма записи на консультацию"
        frameBorder={0}
        marginWidth={0}
        marginHeight={0}
        // @ts-expect-error allowtransparency is a legacy attribute Yandex's resizer expects
        allowTransparency="true"
        scrolling="no"
        width="100%"
        height={900}
        className="block w-full max-w-full"
      />
    </div>
  )
}
