function Game(){

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (    
        <div>
        <div>다음 숫자 1 (1/18)</div>
        {numbers.map((number) => (
            <button key={number}>{number}</button>
        ))
        }</div>
    )
}
export default Game