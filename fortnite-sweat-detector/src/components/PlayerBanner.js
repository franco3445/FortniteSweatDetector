import React from "react";
import {CardHeader} from '@mui/material';

export function PlayerBanner(props) {
    const {
        playerRecord,
    } = props

    if (!playerRecord){
        return (
            <CardHeader
                title={'Loading...'}
            />
        );
    }

    if (!playerRecord.accountLevelHistory){
        return (
            <CardHeader
                title={playerRecord.error}
            />
        );
    }

    const highestSeasonLevel = Math.max(...playerRecord.accountLevelHistory.map(season => {
        return season.level
    }));

    return (
        <CardHeader
            title={playerRecord.name}
            subheader={`Highest Season Level: ${highestSeasonLevel}`}
        />
    );
}
