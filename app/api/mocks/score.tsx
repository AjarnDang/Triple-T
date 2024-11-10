// Ranking

const rankData = [
  {
    username: "JonSnow",
    mostScore: 1350,
    losses: 3,
    avgWinRate: 88.2,
    region: "NA",
  },
  {
    username: "DaenerysTargaryen",
    mostScore: 1275,
    losses: 6,
    avgWinRate: 83.4,
    region: "EU",
  },
  {
    username: "AryaStark",
    mostScore: 1420,
    losses: 2,
    avgWinRate: 91.0,
    region: "SEA",
  },
  {
    username: "TyrionLannister",
    mostScore: 1200,
    losses: 4,
    avgWinRate: 85.7,
    region: "NA",
  },
  {
    username: "CerseiLannister",
    mostScore: 1150,
    losses: 7,
    avgWinRate: 78.5,
    region: "EU",
  },
  {
    username: "SansaStark",
    mostScore: 1305,
    losses: 5,
    avgWinRate: 82.6,
    region: "SEA",
  },
  {
    username: "BranStark",
    mostScore: 1180,
    losses: 8,
    avgWinRate: 76.2,
    region: "NA",
  },
  {
    username: "JaimeLannister",
    mostScore: 1250,
    losses: 6,
    avgWinRate: 81.5,
    region: "EU",
  },
  {
    username: "TheHound",
    mostScore: 1120,
    losses: 9,
    avgWinRate: 74.9,
    region: "SEA",
  },
  {
    username: "BrienneOfTarth",
    mostScore: 1370,
    losses: 4,
    avgWinRate: 87.1,
    region: "NA",
  },
  {
    username: "SamwellTarly",
    mostScore: 1210,
    losses: 5,
    avgWinRate: 80.3,
    region: "EU",
  },
  {
    username: "Ygritte",
    mostScore: 1195,
    losses: 7,
    avgWinRate: 79.1,
    region: "SEA",
  },
  {
    username: "JorahMormont",
    mostScore: 1160,
    losses: 8,
    avgWinRate: 77.8,
    region: "NA",
  },
  {
    username: "StannisBaratheon",
    mostScore: 1240,
    losses: 6,
    avgWinRate: 82.1,
    region: "EU",
  },
  {
    username: "KhalDrogo",
    mostScore: 1400,
    losses: 3,
    avgWinRate: 89.7,
    region: "SEA",
  },
  {
    username: "LukeSkywalker",
    mostScore: 1450,
    losses: 2,
    avgWinRate: 92.3,
    region: "NA",
  },
  {
    username: "DarthVader",
    mostScore: 1380,
    losses: 5,
    avgWinRate: 87.6,
    region: "EU",
  },
  {
    username: "HanSolo",
    mostScore: 1250,
    losses: 6,
    avgWinRate: 82.4,
    region: "SEA",
  },
  {
    username: "PrincessLeia",
    mostScore: 1300,
    losses: 4,
    avgWinRate: 85.2,
    region: "NA",
  },
  {
    username: "Yoda",
    mostScore: 1500,
    losses: 1,
    avgWinRate: 95.1,
    region: "EU",
  },
  {
    username: "ObiWanKenobi",
    mostScore: 1395,
    losses: 3,
    avgWinRate: 91.0,
    region: "SEA",
  },
  {
    username: "BobaFett",
    mostScore: 1275,
    losses: 7,
    avgWinRate: 80.9,
    region: "NA",
  },
  {
    username: "MaceWindu",
    mostScore: 1340,
    losses: 5,
    avgWinRate: 84.7,
    region: "EU",
  },
  {
    username: "Chewbacca",
    mostScore: 1230,
    losses: 8,
    avgWinRate: 78.5,
    region: "SEA",
  },
  {
    username: "PadmeAmidala",
    mostScore: 1320,
    losses: 4,
    avgWinRate: 86.3,
    region: "NA",
  },
  {
    username: "EmperorPalpatine",
    mostScore: 1410,
    losses: 6,
    avgWinRate: 88.9,
    region: "EU",
  },
  {
    username: "QuiGonJinn",
    mostScore: 1360,
    losses: 5,
    avgWinRate: 89.4,
    region: "SEA",
  },
  {
    username: "AhsokaTano",
    mostScore: 1295,
    losses: 6,
    avgWinRate: 83.2,
    region: "NA",
  },
  {
    username: "DarthMaul",
    mostScore: 1335,
    losses: 7,
    avgWinRate: 81.8,
    region: "EU",
  },
  {
    username: "KyloRen",
    mostScore: 1370,
    losses: 4,
    avgWinRate: 87.5,
    region: "SEA",
  },
  {
    username: "Finn",
    mostScore: 1180,
    losses: 10,
    avgWinRate: 75.4,
    region: "NA",
  },
  {
    username: "Rey",
    mostScore: 1425,
    losses: 3,
    avgWinRate: 90.7,
    region: "EU",
  },
  {
    username: "LandoCalrissian",
    mostScore: 1260,
    losses: 6,
    avgWinRate: 79.8,
    region: "SEA",
  },
  {
    username: "JangoFett",
    mostScore: 1240,
    losses: 8,
    avgWinRate: 77.6,
    region: "NA",
  },
  {
    username: "CountDooku",
    mostScore: 1350,
    losses: 5,
    avgWinRate: 84.9,
    region: "EU",
  },
  {
    username: "IronMan",
    mostScore: 1530,
    losses: 3,
    avgWinRate: 92.5,
    region: "NA",
  },
  {
    username: "CaptainAmerica",
    mostScore: 1400,
    losses: 5,
    avgWinRate: 88.3,
    region: "EU",
  },
  {
    username: "Thor",
    mostScore: 1600,
    losses: 2,
    avgWinRate: 95.0,
    region: "SEA",
  },
  {
    username: "BlackWidow",
    mostScore: 1345,
    losses: 4,
    avgWinRate: 87.1,
    region: "NA",
  },
  {
    username: "Hulk",
    mostScore: 1280,
    losses: 6,
    avgWinRate: 82.0,
    region: "EU",
  },
  {
    username: "SpiderMan",
    mostScore: 1415,
    losses: 3,
    avgWinRate: 90.7,
    region: "SEA",
  },
  {
    username: "DoctorStrange",
    mostScore: 1380,
    losses: 5,
    avgWinRate: 88.5,
    region: "NA",
  },
  {
    username: "ScarletWitch",
    mostScore: 1440,
    losses: 3,
    avgWinRate: 91.9,
    region: "EU",
  },
  {
    username: "BlackPanther",
    mostScore: 1320,
    losses: 6,
    avgWinRate: 85.0,
    region: "SEA",
  },
  {
    username: "AntMan",
    mostScore: 1270,
    losses: 8,
    avgWinRate: 79.8,
    region: "NA",
  },
  {
    username: "Wasp",
    mostScore: 1250,
    losses: 7,
    avgWinRate: 81.3,
    region: "EU",
  },
  {
    username: "Hawkeye",
    mostScore: 1335,
    losses: 5,
    avgWinRate: 84.5,
    region: "SEA",
  },
  {
    username: "Falcon",
    mostScore: 1225,
    losses: 9,
    avgWinRate: 77.5,
    region: "NA",
  },
  {
    username: "WinterSoldier",
    mostScore: 1300,
    losses: 6,
    avgWinRate: 83.1,
    region: "EU",
  },
  {
    username: "Vision",
    mostScore: 1395,
    losses: 4,
    avgWinRate: 89.4,
    region: "SEA",
  },
  {
    username: "Loki",
    mostScore: 1375,
    losses: 4,
    avgWinRate: 87.8,
    region: "NA",
  },
  {
    username: "StarLord",
    mostScore: 1255,
    losses: 8,
    avgWinRate: 80.6,
    region: "EU",
  },
  {
    username: "Gamora",
    mostScore: 1305,
    losses: 7,
    avgWinRate: 82.9,
    region: "SEA",
  },
  {
    username: "Drax",
    mostScore: 1280,
    losses: 9,
    avgWinRate: 78.4,
    region: "NA",
  },
  {
    username: "Groot",
    mostScore: 1265,
    losses: 8,
    avgWinRate: 79.9,
    region: "EU",
  },
];

export default rankData;
