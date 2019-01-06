// W5RW5RW2RW1R
// RRW11RLLW19RRW12LW1
// LLW100W50RW200W10
// LLLLLW99RRRRRW88LLLRL
// W55555RW555555W444444W1
//input = "W2"
const input = process.argv[2]

// Init
face = 'North'
pos = {x: 0, y: 0}


arr = input.match(/R|L|W[0-9]+/g)

for (var i = 0, len = arr.length; i < len; i++) {
	cmd = arr[i]
	
	if (cmd == 'R') {
		switch (face) {
		  case 'North':
			  face = 'East';
			  break;
		  case 'East':
			  face = 'South'
			  break;
		  case 'South':
			  face = 'West'
			  break;
		  case 'West':
			  face = 'North'
			  break;
		}
	}
	
	if (cmd == 'L') {
		switch (face) {
		  case 'North':
			  face = 'West'
			  break;
		  case 'West':
			  face = 'South'
			  break;
		  case 'South':
			  face = 'East'
			  break;
		  case 'East':
			  face = 'North'
			  break;
		}
	}
	
	walk = cmd.match("^W([0-9]+)")
	if (walk) {
		n = walk[1];
		switch (face) {
		  case 'North':
			  pos['y'] = pos['y'] + n
			  break;
		  case 'West':
			  pos['x'] = pos['x'] - n
			  break;
		  case 'South':
			  pos['y'] = pos['y'] - n
			  break;
		  case 'East':
			  pos['x'] = pos['x'] + n
			  break;
		}
		
	}
	
}


console.log("X: " + pos['x'] + " Y: " + pos["y"] + " Direction: " + face)
