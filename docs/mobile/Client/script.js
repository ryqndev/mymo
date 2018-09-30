const DAY_POS = [{}, {}, {}, {}, {}, {}, {}];
let lastSelected;

function load(){
    createCalendar();
    testBounding();
}
function toggleDate(id){
    let curHover = document.getElementById(id);
    if(curHover.style.color == 'black'){
        curHover.style.color = 'white';
    }else{
        curHover.style.color = 'black';
    }
    lastSelected = id;
}

function testBounding(){
    document.getElementById('dates--interactive').addEventListener('touchmove', function(e) {  
        e.preventDefault();
        let cliY = Math.round(e.targetTouches[0].clientY);
        let cliX = Math.round(e.targetTouches[0].clientX);
        for(let e of DAY_POS){
            if(cliX >= e['x1'] && cliX <= e['x2']){
                for(let el of e['yPos']){
                    if(cliY >= el['y1'] && cliY <= el['y2']){
                        if(el['name'] !== lastSelected){
                            toggleDate(el['name']);
                        }
                    }
                }
            }
        }
    }, false);
    for(let i = 0; i < 42; i++){
        let divBox = document.getElementById('day' + i).getBoundingClientRect();
        for(let e of DAY_POS){
            if(i < 7){
                DAY_POS[i]['x1'] = Math.round(divBox.left);
                DAY_POS[i]['x2'] = Math.round(divBox.right);
                DAY_POS[i]['yPos'] = new Array();
                DAY_POS[i]['yPos'].push({
                    'y1' : Math.round(divBox.top),
                    'y2' : Math.round(divBox.bottom),
                    'name': 'day' + i
                });
                break;
            }else{
                if(Math.round(divBox.left) == e['x1']){
                    e['yPos'].push({
                        'y1' : Math.round(divBox.top),
                        'y2' : Math.round(divBox.bottom),
                        'name': 'day' + i
                    });
                }
            }
        };
    }
    console.log(DAY_POS);
}

/**
 * 
 * [
 *      {
 *          y1: 20,
 *          y2: 50,
 *          xPos: [
 *              {
 *                   x1: 20,
 *                   x2: 50,
 *                   name: "day0"
 *               },
 *              {
 *                   x1: 60,
 *                   x2: 90,
 *                   name: "day5"
 *              }
 *          ]
 *      }
 * 
 * 
 * ]
 * 
 * 
 * 
 * 
 */