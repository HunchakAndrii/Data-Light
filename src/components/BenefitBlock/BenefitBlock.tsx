import classNames from 'classnames'
import './BenefitBlock.scss'

type BenefitBlockProps = {
  block: {
    title?: string
    text: string
    type: string
    icon?: string
  }
}

export const BenefitBlock: React.FC<BenefitBlockProps> = ({ block }) => {
  const { title, text, type, icon} = block;

  return (
    <div
      className={classNames(
        'benefit-block',
        { 'benefit-block--transparent': type === 'transparent' },
        { 'benefit-block--dark': type === 'dark' }
      )}
    >
      {title && <h6 className="benefit-block__title">{title}</h6>}
      <p className="benefit-block__text">{text}</p>
      {icon && (
        <img className="benefit-block__icon" src={icon} alt="benefit-icon" />
      )}
    </div>
  )
}
