import { Dispatch, SetStateAction, useState } from 'react'
import './CardsData.scss'
import classNames from 'classnames'

type CardsDataProps = {
  views: number
  likes: number
  onLikeCount: Dispatch<SetStateAction<number>>
}

export const CardsData: React.FC<CardsDataProps> = ({
  views,
  likes,
  onLikeCount,
}) => {
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      onLikeCount(likes - 1)
    } else {
      onLikeCount(likes + 1)
    }

    setIsLiked(!isLiked)
  }

  return (
    <div className="data">
      <div className="view">
        <img src="/src/assets/icons/eye.svg" alt="view" />
        <p>{views}</p>
      </div>
      <div className="likes">
        <button onClick={handleLike}>
          <svg
            height="24"
            width="24"
            className={classNames('heart-icon', { liked: isLiked })}
          >
            <g transform="translate(0 -1028.4)">
              <path
                d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                stroke-width="1.5"
              />
            </g>
          </svg>
        </button>
        <p>{likes}</p>
      </div>
    </div>
  )
}
