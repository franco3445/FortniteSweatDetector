import { Card } from '@mui/material';
import * as React from 'react';
import axios from 'axios';

import { SearchBar } from './components/SearchBar';
import { PlayerBanner } from './components/PlayerBanner';
import { PlayerStats } from './components/PlayerStats';

const getPlayerId = async function (userName) {
    try {
        const res = await axios({
            headers: {
                Authorization : '08dd4e98-ac9ba46a-ea3a85bc-e8e28194',
            },
            method: 'get',
            url: `https://fortniteapi.io/v1/lookup?username=${userName}`,
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
}
const getPlayerStatsById = async function (userId) {
    try {
        const res = await axios({
            headers: {
                Authorization : '08dd4e98-ac9ba46a-ea3a85bc-e8e28194',
            },
            method: 'get',
            url: `https://fortniteapi.io/v1/stats?account=${userId}`,
        })
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

// const DATA = {
//     "result": true,
//     "name": "Frank-N-Beanz",
//     "account": {
//         "season": 32,
//         "level": 55,
//         "process_pct": 48
//     },
//     "accountLevelHistory": [
//         {
//             "season": 11,
//             "level": 19,
//             "process_pct": 60
//         },
//         {
//             "season": 13,
//             "level": 59,
//             "process_pct": 30
//         },
//         {
//             "season": 14,
//             "level": 36,
//             "process_pct": 85
//         },
//         {
//             "season": 16,
//             "level": 22,
//             "process_pct": 50
//         },
//         {
//             "season": 17,
//             "level": 41,
//             "process_pct": 56
//         },
//         {
//             "season": 18,
//             "level": 2,
//             "process_pct": 66
//         },
//         {
//             "season": 19,
//             "level": 65,
//             "process_pct": 30
//         },
//         {
//             "season": 20,
//             "level": 100,
//             "process_pct": 65
//         },
//         {
//             "season": 21,
//             "level": 51,
//             "process_pct": 49
//         },
//         {
//             "season": 22,
//             "level": 46,
//             "process_pct": 5
//         },
//         {
//             "season": 23,
//             "level": 121,
//             "process_pct": 15
//         },
//         {
//             "season": 24,
//             "level": 128,
//             "process_pct": 96
//         },
//         {
//             "season": 25,
//             "level": 100,
//             "process_pct": 42
//         },
//         {
//             "season": 26,
//             "level": 161,
//             "process_pct": 13
//         },
//         {
//             "season": 27,
//             "level": 67,
//             "process_pct": 73
//         },
//         {
//             "season": 28,
//             "level": 200,
//             "process_pct": 79
//         },
//         {
//             "season": 29,
//             "level": 133,
//             "process_pct": 33
//         },
//         {
//             "season": 30,
//             "level": 172,
//             "process_pct": 92
//         },
//         {
//             "season": 31,
//             "level": 235,
//             "process_pct": 61
//         },
//         {
//             "season": 32,
//             "level": 55,
//             "process_pct": 48
//         }
//     ],
//     "global_stats": {
//         "duo": {
//             "placetop1": 112,
//             "kd": 2.46,
//             "winrate": 0.1,
//             "placetop3": 0,
//             "placetop5": 334,
//             "placetop6": 0,
//             "placetop10": 0,
//             "placetop12": 533,
//             "placetop25": 0,
//             "kills": 2592,
//             "matchesplayed": 1165,
//             "minutesplayed": 9436,
//             "score": 244527,
//             "playersoutlived": 57443,
//             "lastmodified": 1730861873
//         },
//         "solo": {
//             "placetop1": 46,
//             "kd": 1.91,
//             "winrate": 0.05,
//             "placetop3": 0,
//             "placetop5": 0,
//             "placetop6": 0,
//             "placetop10": 237,
//             "placetop12": 0,
//             "placetop25": 396,
//             "kills": 1754,
//             "matchesplayed": 966,
//             "minutesplayed": 4603,
//             "score": 117957,
//             "playersoutlived": 29719,
//             "lastmodified": 1730933000
//         },
//         "squad": {
//             "placetop1": 453,
//             "kd": 3.05,
//             "winrate": 0.17,
//             "placetop3": 886,
//             "placetop5": 0,
//             "placetop6": 1230,
//             "placetop10": 0,
//             "placetop12": 0,
//             "placetop25": 0,
//             "kills": 6566,
//             "matchesplayed": 2609,
//             "minutesplayed": 23988,
//             "score": 648484,
//             "playersoutlived": 127752,
//             "lastmodified": 1731161861
//         },
//         "trio": {
//             "placetop1": 145,
//             "kd": 6.29,
//             "winrate": 0.25,
//             "placetop3": 260,
//             "placetop5": 0,
//             "placetop6": 333,
//             "placetop10": 0,
//             "placetop12": 0,
//             "placetop25": 0,
//             "kills": 2760,
//             "matchesplayed": 584,
//             "minutesplayed": 8339,
//             "score": 228106,
//             "playersoutlived": 41893,
//             "lastmodified": 1730940922
//         }
//     },
//     "per_input": {
//         "keyboardmouse": {
//             "duo": {
//                 "placetop1": 104,
//                 "kd": 2.53,
//                 "winrate": 0.1,
//                 "placetop3": 0,
//                 "placetop5": 305,
//                 "placetop6": 0,
//                 "placetop10": 0,
//                 "placetop12": 486,
//                 "placetop25": 0,
//                 "kills": 2430,
//                 "matchesplayed": 1065,
//                 "minutesplayed": 9336,
//                 "score": 242264,
//                 "playersoutlived": 56794,
//                 "lastmodified": 1730861873
//             },
//             "solo": {
//                 "placetop1": 27,
//                 "kd": 1.88,
//                 "winrate": 0.03,
//                 "placetop3": 0,
//                 "placetop5": 0,
//                 "placetop6": 0,
//                 "placetop10": 185,
//                 "placetop12": 0,
//                 "placetop25": 322,
//                 "kills": 1510,
//                 "matchesplayed": 830,
//                 "minutesplayed": 4427,
//                 "score": 113146,
//                 "playersoutlived": 28554,
//                 "lastmodified": 1730933000
//             },
//             "squad": {
//                 "placetop1": 448,
//                 "kd": 3.11,
//                 "winrate": 0.18,
//                 "placetop3": 856,
//                 "placetop5": 0,
//                 "placetop6": 1187,
//                 "placetop10": 0,
//                 "placetop12": 0,
//                 "placetop25": 0,
//                 "kills": 6423,
//                 "matchesplayed": 2514,
//                 "minutesplayed": 23843,
//                 "score": 644475,
//                 "playersoutlived": 126968,
//                 "lastmodified": 1731161861
//             },
//             "trio": {
//                 "placetop1": 144,
//                 "kd": 6.23,
//                 "winrate": 0.25,
//                 "placetop3": 259,
//                 "placetop5": 0,
//                 "placetop6": 332,
//                 "placetop10": 0,
//                 "placetop12": 0,
//                 "placetop25": 0,
//                 "kills": 2733,
//                 "matchesplayed": 583,
//                 "minutesplayed": 8320,
//                 "score": 227201,
//                 "playersoutlived": 41893,
//                 "lastmodified": 1730940922
//             }
//         },
//         "gamepad": {
//             "duo": {
//                 "placetop1": 8,
//                 "kd": 1.78,
//                 "winrate": 0.08,
//                 "placetop3": 0,
//                 "placetop5": 29,
//                 "placetop6": 0,
//                 "placetop10": 0,
//                 "placetop12": 47,
//                 "placetop25": 0,
//                 "kills": 162,
//                 "matchesplayed": 99,
//                 "minutesplayed": 97,
//                 "score": 2218,
//                 "playersoutlived": 612,
//                 "lastmodified": 1712718783
//             },
//             "solo": {
//                 "placetop1": 19,
//                 "kd": 2.09,
//                 "winrate": 0.14,
//                 "placetop3": 0,
//                 "placetop5": 0,
//                 "placetop6": 0,
//                 "placetop10": 52,
//                 "placetop12": 0,
//                 "placetop25": 74,
//                 "kills": 244,
//                 "matchesplayed": 136,
//                 "minutesplayed": 176,
//                 "score": 4811,
//                 "playersoutlived": 1165,
//                 "lastmodified": 1569690739
//             },
//             "squad": {
//                 "placetop1": 5,
//                 "kd": 1.59,
//                 "winrate": 0.05,
//                 "placetop3": 30,
//                 "placetop5": 0,
//                 "placetop6": 43,
//                 "placetop10": 0,
//                 "placetop12": 0,
//                 "placetop25": 0,
//                 "kills": 143,
//                 "matchesplayed": 95,
//                 "minutesplayed": 145,
//                 "score": 4009,
//                 "playersoutlived": 784,
//                 "lastmodified": 1664744330
//             },
//             "trio": {
//                 "placetop1": 1,
//                 "kd": 0,
//                 "winrate": 1,
//                 "placetop3": 1,
//                 "placetop5": 0,
//                 "placetop6": 1,
//                 "placetop10": 0,
//                 "placetop12": 0,
//                 "placetop25": 0,
//                 "kills": 27,
//                 "matchesplayed": 1,
//                 "minutesplayed": 19,
//                 "score": 905,
//                 "playersoutlived": 0,
//                 "lastmodified": 1599950762
//             }
//         },
//         "touch": {
//             "duo": {
//                 "placetop1": 0,
//                 "kd": 0,
//                 "winrate": 0,
//                 "placetop3": 0,
//                 "placetop5": 0,
//                 "placetop6": 0,
//                 "placetop10": 0,
//                 "placetop12": 0,
//                 "placetop25": 0,
//                 "kills": 0,
//                 "matchesplayed": 1,
//                 "minutesplayed": 3,
//                 "score": 45,
//                 "playersoutlived": 37,
//                 "lastmodified": 1564632418
//             }
//         }
//     },
//     "seasons_available": [
//         32
//     ]
// }
//
// const highestSeasonLevel = Math.max(...DATA.accountLevelHistory.map(season => {
//     return season.level
// }));

function Main() {
    const [ searchName, setSearchName ] = React.useState('');
    const [ playerRecord, setPlayerRecord ] = React.useState(null);

    React.useEffect(() => {
        async function startPage(){
            const playerData = await getPlayerId('Frank-n-Beanz');
            const playerStats = await getPlayerStatsById(playerData.account_id);
            setPlayerRecord(playerStats);
        }
        startPage();
    }, []);


    const handleSearchChange = (event) => {
       setSearchName(event.target.value)
    }

    const handleSearch = async (event) => {
        const playerData = await getPlayerId(searchName);
        const playerStats = await getPlayerStatsById(playerData.account_id);
        if (playerStats.result === false) {
            return;
        }
        setPlayerRecord(playerStats);
    }

    return (
        <div className="Main">
            <SearchBar
                handleSearch={handleSearch}
                handleSearchChange={handleSearchChange}
            />
            <Card sx={{ width : 700 }}>
                <PlayerBanner
                    playerRecord={playerRecord}
                />
                <PlayerStats
                    playerRecord={playerRecord}
                />
            </Card>
        </div>
    );
}

export default Main;
