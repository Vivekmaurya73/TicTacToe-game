



import  { useState } from 'react';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (index) => {
        if (board[index] || winner) return; 

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
        checkWinner(newBoard);
    };

    const checkWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]             
        ];
        
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return;
            }
        }
    };

    const handleReset = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
        setWinner(null);
    };

    return (
        <div className="container">
            <h1 className="title">Tic Tac Toe</h1>
            <div className="board">
                {board.map((value, index) => ( 
                    <div 
                        key={index} 
                        className="box" 
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </div>
                ))}
            </div>
            {winner && <h2 className="winner">{`Winner: ${winner}`}</h2>}
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    );
};

export default TicTacToe;