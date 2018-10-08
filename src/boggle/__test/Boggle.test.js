describe('given a board of characters', () => {
    let board;
    beforeEach(() => {
        board = [
            ['g', 'i', 'z'],
            ['u', 'e', 'k'],
            ['q', 's', 'e'],
        ];
    });

    describe('when searching for a character in the board', () => {
        fit('should return the row and column pair', () => {
            expect(findPointInBoard({ board, char: 'e' }))
                .toEqual([1,1]);
        });
    });

    describe('when searching for a word that exists', () => {
        it('should return true', () => {
            const word = 'geeks';
            expect(find({ board, word })).toBe(true);
        });
    });
});

// model the problem
// 1. find first character
// start at row 0 column 0
// loop rows then columns and return first char in [row, column] pair

// 2. Look for next char
// starting at [row,column]
// look E, SE, S, SW, W, NW, N, NE
// if not found, terminate with not found
// nextChar with new starting point

const findPointInBoard = ({ board, char }) => {
    for(let rowIndex in board) {
        for(let columnIndex in board[rowIndex]) {
            const value = board[rowIndex][columnIndex];
            if (value === char) {
                return [Number(columnIndex), Number(rowIndex)];
            }
        }
    }
    return [];
};

const searchNeighbors = ({ board, start, char }) => {
    const rightPoint = start[1]
};

const find = ({ board, word }) => {
    let wordIndex = 0;
    const start = findPointInBoard({ board, char: word[wordIndex] });
    wordIndex++;


};