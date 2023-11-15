import c from 'classnames'

interface Props {
    className?: string
    name: string
    onClick?: (e: React.MouseEvent) => void
}
export const Icon: React.FC<Props> = ({ className, name, onClick }) => {
    return (
        <svg className={c(className, 'j-icon')} onClick={onClick}>
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
}