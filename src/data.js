const TYPE = {
    NORMAL: 'normal',
    BRIDGE: 'bridge',
    ROCK: 'rock',
    POND: 'pond',
};

const RAIL_TYPE = {
    UNDEFINED: undefined,
    STRAIGHT: 'straight',
    CURVE: 'curve' 
}

const DIRECTION = {
    UP: 0,
    RIGHT: 90,
    DOWN: 180,
    LEFT: 270,
}

const level_e1 = [
    [
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.ROCK,
            direction: DIRECTION.RIGHT,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.POND,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        }
    ],
    [
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.BRIDGE,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.POND,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        }
    ],
    [
        {
            fieldType: TYPE.BRIDGE,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.ROCK,
            direction: DIRECTION.DOWN,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        }
    ],
    [
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.POND,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        }
    ],
    [
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.ROCK,
            direction: DIRECTION.LEFT,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        },
        {
            fieldType: TYPE.NORMAL,
            direction: DIRECTION.UP,
            tileType: RAIL_TYPE.UNDEFINED
        }
    ]
];

const level_e2 = [
    [
        { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.BRIDGE, direction: DIRECTION.RIGHT, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.ROCK, direction: DIRECTION.DOWN, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.ROCK, direction: DIRECTION.DOWN, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.BRIDGE, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.ROCK, direction: DIRECTION.LEFT, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ]
];


const level_d1 = Array(7).fill().map(() => 
    Array(7).fill({ fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED })
);
level_d1[0][1] = { fieldType: TYPE.ROCK, direction: DIRECTION.RIGHT, tileType: RAIL_TYPE.UNDEFINED };
level_d1[0][2] = { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED };
level_d1[0][3] = { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED };
level_d1[0][5] = { fieldType: TYPE.BRIDGE, direction: DIRECTION.RIGHT, tileType: RAIL_TYPE.UNDEFINED };
level_d1[1][0] = { fieldType: TYPE.BRIDGE, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED };
level_d1[2][2] = { fieldType: TYPE.BRIDGE, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED };
level_d1[3][3] = { fieldType: TYPE.ROCK, direction: DIRECTION.LEFT, tileType: RAIL_TYPE.UNDEFINED };
level_d1[4][0] = { fieldType: TYPE.ROCK, direction: DIRECTION.LEFT, tileType: RAIL_TYPE.UNDEFINED };
level_d1[4][2] = { fieldType: TYPE.ROCK, direction: DIRECTION.RIGHT, tileType: RAIL_TYPE.UNDEFINED };
level_d1[4][4] = { fieldType: TYPE.BRIDGE, direction: DIRECTION.RIGHT, tileType: RAIL_TYPE.UNDEFINED };
level_d1[4][6] = { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED };
level_d1[6][3] = { fieldType: TYPE.BRIDGE, direction: DIRECTION.RIGHT, tileType: RAIL_TYPE.UNDEFINED };

const level_d2 = [
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
    ],
    [
        { fieldType: TYPE.BRIDGE, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.BRIDGE, direction: DIRECTION.LEFT, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.ROCK, direction: DIRECTION.DOWN, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.BRIDGE, direction: DIRECTION.LEFT, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.BRIDGE, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.ROCK, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.ROCK, direction: DIRECTION.RIGHT, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.ROCK, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ],
    [
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.POND, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED },
        { fieldType: TYPE.NORMAL, direction: DIRECTION.UP, tileType: RAIL_TYPE.UNDEFINED }
    ]
];


export { TYPE, RAIL_TYPE, DIRECTION, level_e1, level_e2, level_d1, level_d2 };