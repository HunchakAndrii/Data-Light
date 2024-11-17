import './Tag.scss';

export const Tag = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={`tag ${className}`}>
      <p className="p1">{text}</p>
    </div>
  )
}
