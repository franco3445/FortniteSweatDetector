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

function capitalizeFirstLetter(string) {
    return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}

function formatPercentage(number) {
    return Number(number/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
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
                    {gameModeRowDetails.map((row) => {
                        const gameMode = capitalizeFirstLetter(row.groupName);
                        const winPercentage = formatPercentage(row.winRate);

                        return (
                            <TableRow
                                key={gameMode}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{gameMode}</TableCell>
                                <TableCell align="right">{row.ratio}</TableCell>
                                <TableCell align="right">{winPercentage}</TableCell>
                                <TableCell align="right">{row.kills}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
