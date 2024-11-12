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
    return Number(number).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2});
}

export function PlayerStats(props) {
    const {
        playerRecord,
    } = props;

    if (!playerRecord){
        return(
            <TableContainer>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No Record Provided</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        );
    }

    if (!playerRecord.global_stats){
        return(
            <TableContainer>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{playerRecord.error}</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        )
    }

    const gameModeRowDetails = Object.keys(playerRecord.global_stats).map(groupName => {
        const {
            kd,
            winrate,
            kills,
        } = playerRecord.global_stats[groupName];
        return createData(groupName, kd, winrate, kills);
    });

    const generateRatioRowColor = function (ratio) {
        let color = 'green';
        if (ratio > 4) {
            color = 'red';
        } else if (ratio > 2) {
            color = 'yellow';
        }

        return color
    };

    const generateWinRateRowColor = function (percentage) {
        let color = 'green';
        if (percentage > .20) {
            color = 'red';
        } else if (percentage > .10) {
            color = 'yellow';
        }

        return color
    }

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
                        const ratioRowColor = generateRatioRowColor(row.ratio);
                        const winRateRowColor = generateWinRateRowColor(row.winRate);

                        return (
                            <TableRow
                                key={gameMode}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell>{gameMode}</TableCell>
                                <TableCell align="right" style={{backgroundColor: ratioRowColor}}>{row.ratio}</TableCell>
                                <TableCell align="right" style={{backgroundColor: winRateRowColor}}>{winPercentage}</TableCell>
                                <TableCell align="right">{row.kills}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
