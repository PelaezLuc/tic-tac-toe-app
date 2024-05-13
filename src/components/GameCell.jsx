export default function GameCell({value, updateGrid}) {
    const handleClick = () => {
        updateGrid();
    }

    return (
        <div className="cell" key={value} onClick={handleClick}>
            <span className="cell__content">
                {value}
            </span>
        </div>
    );
}