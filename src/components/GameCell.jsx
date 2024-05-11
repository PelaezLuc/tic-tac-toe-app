

export default function GameCell({children}) {
    return (
        <div className="cell" key={children} onClick={children}>
            <span className="cell__content">
                {children}
            </span>
        </div>
    );
}