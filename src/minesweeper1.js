const generatePlayerBoard = (numberOfRows, numberOfColums) () => {
    const board = [];

    for (let rowsIndex  = 0; rowsIndex < numberOfRows; rowsIndex++) {
        const row = [];
        for (let columnsIndex = 0; columnsIndex < numberOfColums; columnsIndex++ ) {
            row.push(' ');
        }
    }

};
