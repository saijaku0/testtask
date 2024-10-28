import { Box, Pagination } from '@mui/material';

function PaginationControl({ totalPages, currentPage, setCurrentPage }: {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}) {
    return (
        <Box display="flex" justifyContent="center" sx={{ marginTop: 4 }}>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={(_event, value) => setCurrentPage(value)}
                color="primary"
            />
        </Box>
    );
}

export default PaginationControl;
