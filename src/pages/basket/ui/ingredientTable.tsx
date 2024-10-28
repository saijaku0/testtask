import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper,
} from '@mui/material';

function IngredientTable({
    ingredientEntries,
    page,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
}: {
    ingredientEntries: [string, number][];
    page: number;
    rowsPerPage: number;
    onPageChange: (event: unknown, newPage: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Інгридіенти</TableCell>
                        <TableCell>Кількість</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ingredientEntries
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map(([ingredient, amount]) => (
                            <TableRow key={ingredient}>
                                <TableCell>{ingredient}</TableCell>
                                <TableCell>{amount}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={ingredientEntries.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </TableContainer>
    );
}

export default IngredientTable;
