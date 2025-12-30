import { FC } from "react"

interface FinishStepProps {
  displayName: string
}

export const FinishStep: FC<FinishStepProps> = ({ displayName }) => {
  return (
    <div className="space-y-4">
      <div>
        {/* TODO: Translate to Persian */}
        Welcome to Chatbot UI
        {displayName.length > 0 ? `, ${displayName.split(" ")[0]}` : null}!
      </div>

      <div>
        {/* TODO: Translate to Persian */}
        Click next to start chatting.
      </div>
    </div>
  )
}
