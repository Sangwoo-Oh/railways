import { TYPE, DIRECTION, level_e1, level_e2, level_d1, level_d2, RAIL_TYPE } from './data.js';


// Elements
const menuScreen = document.querySelector('.menu_screen');
const nameInput = menuScreen.querySelector('input');
const gameScreen = document.querySelector('.game_screen');
const rule = menuScreen.querySelector('.rule');
const diffButtons = menuScreen.querySelector('.diff_buttons').querySelectorAll('button');
const buttonEasy = document.querySelector('.button_easy');
const buttonHard = document.querySelector('.button_hard');
const buttonRule = document.querySelector('.button_rule');
const buttonStart = document.querySelector('.button_start');
const backToMenuButtons = document.querySelectorAll('.back_to_menu');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

buttonEasy.classList.add('active');

// Event Listeners
buttonStart.addEventListener('click', showGameScreen);
buttonRule.addEventListener('click', showRule);
backToMenuButtons.forEach(button => button.addEventListener('click', showMenuScreen));
diffButtons.forEach(button => button.addEventListener('click', switchDifficulty));

function switchDifficulty(event) {
    const clickedButton = event.target.name;
    if (clickedButton === 'easy') {
        buttonEasy.classList.add('active');
        buttonHard.classList.remove('active');
        difficulty = 5;
    } else {
        buttonEasy.classList.remove('active');
        buttonHard.classList.add('active');
        difficulty = 7;
    }
}

validations();

function validations() {
    window.addEventListener('load', startButtonValidation);
    nameInput.addEventListener('input', startButtonValidation);
}

function startButtonValidation() {
    buttonStart.disabled = nameInput.value.length == 0;
}

function getCoordinatesByEvent(event) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(event.clientX) - Math.floor(rect.left);
    const y = Math.floor(event.clientY) - Math.floor(rect.top);
    return { x, y };
}

const WIDTH = 440;
const HEIGHT = 440;
let TILE_SIZE;
let difficulty = 5;
let map;
let timerId;
let results = localStorage.getItem("results") !== null ? JSON.parse(localStorage.getItem("results")) : [];
let playId = results.length > 0 ? results.length : 0;
let isGameFinished;
// let isGameFinished = true;

function showGameScreen() {
    menuScreen.style.display = 'none';
    rule.style.display = 'none';
    gameScreen.style.display = 'block';
    startGame();
}

function showMenuScreen() {
    menuScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    rule.style.display = 'none';
}

function showRule() {
    rule.style.display = 'block';
}


function startGame() {
    isGameFinished = false;
    hideLeadingBoard();
    const name = nameInput.value;
    gameScreen.querySelector('.info .name').textContent = name;
    results.push({ playId: playId, diff: difficulty ,name: nameInput.value, time: '00:00' });
    timerId = startTimer();
    drawBoard();
    canvas.addEventListener('click', placeTile);
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    canvas.addEventListener('contextmenu', rotateTile);
    document.addEventListener('dblclick', e => e.preventDefault());
    canvas.addEventListener('dblclick', changeTile);
    runGameLoop();


    function startTimer() {
        const timer = gameScreen.querySelector('.info .time');
        timer.textContent = '00:00';
        const startTime = Date.now();
        return setInterval(() => {
            const currentTime = Date.now();
            let elapsedTime = currentTime - startTime;
            const seconds = Math.floor((elapsedTime / 1000) % 60);
            const minutes = Math.floor(((elapsedTime / 1000) / 60) % 60);
            const secondsStr = seconds.toString().padStart(2, '0');
            const minutesStr = minutes.toString().padStart(2, '0');
            timer.textContent = `${minutesStr}:${secondsStr}`;
        }, 1000);
    }
    function drawBoard() {
        TILE_SIZE = WIDTH / difficulty;
        drawMap(difficulty);
    }
    function drawMap(difficulty) {
        const num = Math.floor(Math.random() * 2) + 1;
        const loadedMap = difficulty === 5 ? (num === 1 ? level_e1 : level_e2) : (num === 1 ? level_d1 : level_d2);
        map = loadedMap.map((row, rowIdx) => {
            return row.map((tile, colIdx) => {
                return {
                    x: colIdx,
                    y: rowIdx,
                    fieldType: tile.fieldType,
                    tileType: tile.fieldType === TYPE.NORMAL || tile.fieldType === TYPE.BRIDGE ? RAIL_TYPE.STRAIGHT : RAIL_TYPE.CURVE,
                    direction: tile.direction,
                    fieldImg: createFieldImg(tile.fieldType),
                    tileImg: createTileImg(tile.fieldType),
                    adjacents: [0,0,0,0]
                }
            });
        });
        map.forEach(row => {
            row.forEach(tile => {
                ctx.save();
                ctx.translate(tile.x * TILE_SIZE + TILE_SIZE*0.5, tile.y * TILE_SIZE + TILE_SIZE*0.5);
                ctx.rotate(tile.direction * Math.PI / 180);
                ctx.drawImage(tile.fieldImg, -TILE_SIZE * 0.5, -TILE_SIZE * 0.5, TILE_SIZE, TILE_SIZE);
                ctx.restore();
            });
        })
    }
    function runGameLoop() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        updateMap();
        requestAnimationFrame(runGameLoop);
    }
    function updateMap() {
        map.forEach(row => {
            row.forEach(tile => {
                ctx.save();
                ctx.translate(tile.x * TILE_SIZE + TILE_SIZE*0.5, tile.y * TILE_SIZE + TILE_SIZE*0.5);
                ctx.rotate(tile.direction * Math.PI / 180);
                if (!tile.hasTile) {
                    ctx.drawImage(tile.fieldImg, -TILE_SIZE * 0.5, -TILE_SIZE * 0.5, TILE_SIZE, TILE_SIZE);
                } else {
                    ctx.drawImage(tile.tileImg, -TILE_SIZE * 0.5, -TILE_SIZE * 0.5, TILE_SIZE, TILE_SIZE);
                }
                ctx.restore();
            });
        })
    }
    function createFieldImg(fieldType) {
        const img = new Image();
        switch (fieldType) {
            case TYPE.NORMAL:
                img.src = 'assets/images/tiles/empty.png';
                break;
            case TYPE.BRIDGE:
                img.src = 'assets/images/tiles/bridge.png';
                break;
            case TYPE.ROCK:
                img.src = 'assets/images/tiles/mountain.png';
                break;
            case TYPE.POND:
                img.src = 'assets/images/tiles/oasis.png';
                break;
            default:
                break;
        }
        return img;
    }
    
    function createTileImg(fieldType) {
        const img = new Image();
        switch (fieldType) {
            case TYPE.NORMAL:
                img.src = 'assets/images/tiles/rails/straight_rail.png';
                break;
            case TYPE.BRIDGE:
                img.src = 'assets/images/tiles/rails/bridge_rail.png';
                break;
            case TYPE.ROCK:
                img.src = 'assets/images/tiles/rails/mountain_rail.png';
                break;
            case TYPE.POND:
                // do nothing
                break;
            default:
                break;
        }
        return img;
    }
    function changeTile(event) {
        const coordinates = getCoordinatesByEvent(event);
        const x = coordinates.x;
        const y = coordinates.y;
        const i =  Math.floor(y / TILE_SIZE);
        const j = Math.floor(x / TILE_SIZE);
        let field = map[i][j];
        if (field.fieldType !== TYPE.NORMAL) return;
        if (field.tileImg.src.replace(/^.*[\\\/]/, '') === 'straight_rail.png') {
            const img = new Image();
            img.src = 'assets/images/tiles/rails/curve_rail.png';
            field.tileImg = img;
            field.tileType = RAIL_TYPE.CURVE;
        } else {
            const img = new Image();
            img.src = 'assets/images/tiles/rails/straight_rail.png';
            field.tileImg = img;
            field.tileType = RAIL_TYPE.STRAIGHT;
        }
        updateAdjcents(i, j);
        checkFinishCondition();
    }
    
    function rotateTile(event) {
        const coordinates = getCoordinatesByEvent(event);
        const x = coordinates.x;
        const y = coordinates.y;
        const i =  Math.floor(y / TILE_SIZE);
        const j = Math.floor(x / TILE_SIZE);
        let field = map[i][j];
        if (!field.hasTile) return;
        if (field.fieldType !== TYPE.NORMAL) return;
        field.direction = (field.direction + 90) % 360;
        updateAdjcents(i, j);
        checkFinishCondition();
    }
    
    function placeTile(event) {
        const coordinates = getCoordinatesByEvent(event);
        const x = coordinates.x;
        const y = coordinates.y;
        const i =  Math.floor(y / TILE_SIZE);
        const j = Math.floor(x / TILE_SIZE);
        let field = map[i][j];
        if (field.fieldType === TYPE.POND) return;
        field.hasTile = true;
        updateAdjcents(i, j);
        checkFinishCondition();
    }
    
    function checkFinishCondition() {
        if (isSolved()) {
            clearInterval(timerId);
            isGameFinished = true;
            if (isGameFinished) {
                canvas.removeEventListener('click', placeTile);
                canvas.removeEventListener('contextmenu', rotateTile);
                canvas.removeEventListener('dblclick', changeTile);
                const finishTime = gameScreen.querySelector('.info .time').textContent;
                storeResult(finishTime);
                const result = gameScreen.querySelector('.result');
                result.querySelector('.record').textContent = "Your time: " + finishTime;
                updateLeadingBoard();
                showLeadingBoard();
                playId++; // for next player
            }
        }
    }
    
    function showLeadingBoard() {
        const result = gameScreen.querySelector('.result');
        result.style.display = 'flex';
    }

    function storeResult(finishTime) {
        results.find(result => result.playId === playId).time = finishTime;
        localStorage.setItem("results", JSON.stringify(results));
    }
    
    function hideLeadingBoard() {
        const result = gameScreen.querySelector('.result');
        result.style.display = 'none';
    }
    
    function updateLeadingBoard() {

        const leadingBoard = gameScreen.querySelector('.leading_board');
        const rankingEasy = leadingBoard.querySelector('.easy tbody');
        const rankingHard = leadingBoard.querySelector('.hard tbody');
    
        const easyRanking = results.filter(result => result.diff === 5).sort((a,b) => timeToNum(a.time) - timeToNum(b.time)).slice(0,5);
        while (easyRanking.length < 5) easyRanking.push({diff: difficulty, name: '-', time: '--:--'});
        rankingEasy.innerHTML = ''; 
        easyRanking.forEach((e, idx) => {
            rankingEasy.innerHTML += `<tr><td>${idx+1}</td><td>${e.name}</td><td>${e.time}</td></tr>`
        });
    
        const hardRanking = results.filter(result => result.diff === 7).sort((a,b) => timeToNum(a.time) - timeToNum(b.time)).slice(0,5);
        while (hardRanking.length < 5) hardRanking.push({diff: difficulty, name: '-', time: '--:--'});
        rankingHard.innerHTML = '';
        hardRanking.forEach((e, idx) => {
            rankingHard.innerHTML += `<tr><td>${idx+1}</td><td>${e.name}</td><td>${e.time}</td></tr>`
        });


    
        function timeToNum(time) {
            const [minutes, seconds] = time.split(':');
            return minutes * 60 + seconds;
        }
    }
    
    function updateAdjcents(i, j) {
        let field = map[i][j];
        let arr;
        if (field.tileType === RAIL_TYPE.STRAIGHT) {
            switch(field.direction) {
                case DIRECTION.UP :
                case DIRECTION.DOWN : {
                    arr = [1,0,1,0];
                    break;
                }
                case DIRECTION.RIGHT :
                case DIRECTION.LEFT:  {
                    arr = [0,1,0,1];
                    break;
                }
            }
        } else if (field.tileType === RAIL_TYPE.CURVE) {
            switch(field.direction) {
                case DIRECTION.UP : {
                    arr = [0,1,1,0];
                    break;
                }
                case DIRECTION.RIGHT : {
                    arr = [0,0,1,1];
                    break;
                }
                case DIRECTION.DOWN : {
                    arr = [1,0,0,1];
                    break;
                }
                case DIRECTION.LEFT : {
                    arr = [1,1,0,0];
                    break;
                }
            }
        }
        field.adjacents = arr;
    }
    
    function isSolved() {
        // check if all the tiles are placed
        for (let I=0; I<map.length; I++) {
            for (let J=0; J<map.length; J++) {
                if (!map[I][J].hasTile && map[I][J].fieldType !== TYPE.POND) {
                    return false;
                }
            }
        }
    
        let final_res = true;
        for (let I=0; I<map.length; I++) {
            for (let J=0; J<map.length; J++) {
                // console.log(I, J)
                const x = J;
                const y = I;
                const dx = [0, 1, 0, -1];
                const dy = [-1, 0, 1, 0];
                let res = true;
                for (let i=0; i<4; i++) {
                    const nx = x + dx[i];
                    const ny = y + dy[i];
                    if (0 > nx || nx >= map.length || 0 > ny || ny >= map.length) continue;
                    if (i === 0 && map[y][x].adjacents[0] == 1) { // check adjcency with up
                        if (!map[ny][nx].hasTile || map[ny][nx].adjacents[2] != 1) res = false;
                    } else if (i === 1 && map[y][x].adjacents[1] == 1) { // check adjcency with right
                        if (!map[ny][nx].hasTile || map[ny][nx].adjacents[3] != 1) res = false;
                    } else if (i === 2 && map[y][x].adjacents[2] == 1) { // check adjcency with down
                        if (!map[ny][nx].hasTile || map[ny][nx].adjacents[0] != 1) res = false;
                    } else if (i === 3 && map[y][x].adjacents[3] == 1) { // check adjcency with left
                        if (!map[ny][nx].hasTile || map[ny][nx].adjacents[1] != 1) res = false;
                    }
                }
                // return res;
                final_res = final_res && res;
            }
        }
        return final_res;
    }   
}
