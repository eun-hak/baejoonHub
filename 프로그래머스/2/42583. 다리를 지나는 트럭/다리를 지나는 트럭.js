function solution(bridge_length, weight, truck_weights) {
    
    let time = 0 ;
    let bridge = []
    let current_weight = 0
    
     while (truck_weights.length > 0 || bridge.length > 0) {
        time++; 


        if (bridge.length > 0 && bridge[0][1] >= bridge_length) {
            const [truck_weight] = bridge.shift(); 
            current_weight -= truck_weight; 
        }

        if (truck_weights.length > 0) {
            const next_truck = truck_weights[0];

            if (current_weight + next_truck <= weight && bridge.length < bridge_length) {
                truck_weights.shift();
                bridge.push([next_truck, 0]); 
                current_weight += next_truck; 
            }
        }

        for (let i = 0; i < bridge.length; i++) {
            bridge[i][1]++;
        }
        
    }
    return time;
}