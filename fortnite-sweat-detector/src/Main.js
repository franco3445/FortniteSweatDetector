import * as React from 'react';
import axios from 'axios';

import {Card, CardHeader} from '@mui/material';

import { SearchBar } from './components/SearchBar';
import { PlayerStats } from './components/PlayerStats';

const getPlayerId = async function () {
    try {
        const res = await axios({
            headers: {
                Authorization : '?',
            },
            method: 'get',
            url: 'https://fortniteapi.io/v1/lookup?username=Frank-N-Beanz',
        })
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status)
        }
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
const getPlayerStatsById = async function (userId) {
    try {
        const res = await axios({
            headers: {
                Authorization : '?',
            },
            method: 'get',
            url: `https://fortniteapi.io/v1/stats?account=${userId}`,
        })
        if(res.status == 200){
            // test for status you want, etc
            console.log(res.status)
        }
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

const playerData = await getPlayerId();
// console.log(playerData);
const playerRecord = await getPlayerStatsById(playerData.account_id)
// console.log(playerRecord);

const highestSeasonLevel = Math.max(...playerRecord.accountLevelHistory.map(season => {
    return season.level
}));

function Main() {
    return (
        <div className="Main">
            <SearchBar/>
            <Card sx={{ width : 700 }}>
                <CardHeader
                    title={playerRecord.name}
                    subheader={`Highest Season Level: ${highestSeasonLevel}`}
                />
                <PlayerStats
                    stats={playerRecord.global_stats}
                />
            </Card>
        </div>
    );
}

export default Main;
