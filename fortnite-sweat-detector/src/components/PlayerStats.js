import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    groupName,
    ratio,
    winRate,
    kills,
) {
    return {
        groupName,
        ratio,
        winRate,
        kills,
    };
}

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function PlayerStats(props) {
    const {
        stats,
    } = props;
    console.log(stats);

    const gameModeRowDetails = Object.keys(stats).map(groupName => {
        const {
            kd,
            winrate,
            kills,
        } = stats[groupName];
        return createData(groupName, kd, winrate, kills);
    });

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Game Mode</TableCell>
                        <TableCell align="right">K/D Ratio</TableCell>
                        <TableCell align="right">Win Rate</TableCell>
                        <TableCell align="right">Kills</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gameModeRowDetails.map((row) => (
                        <TableRow
                            key={capitalizeFirstLetter(row.groupName)}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{capitalizeFirstLetter(row.groupName)}</TableCell>
                            <TableCell align="right">{row.ratio}</TableCell>
                            <TableCell align="right">{row.winRate}</TableCell>
                            <TableCell align="right">{row.kills}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
