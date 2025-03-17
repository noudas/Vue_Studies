import Player from './Player.js';

import { ref, onUnmounted } from 'vue';


export function useIdleSystem(player, enemy) {
    
    
    // Create autoattack Logic
    const isAttacking = red(false);
    function startAutoAttack(){
        if (!isAttacking.value){
            isAttacking.value=true;
            player.startAutoAttack(enemy);
        }
    }
    
    function stopAutoAttack(){
        player.stopAutoAttack();
        isAttacking.value=false;
    }
    

    // Passive Gold Generation
    const goldGenerationInterval = ref(null);
    const isGeneratingGold = ref(false);

    function startPassiveGoldGeneration(){
        if(!isGeneratingGold.value){
            isGeneratingGold.value = true;
                goldGenerationInterval.value = setInterval(() => {
                    player.gainGold(1 * player.multipliers.goldGain);
                }, 1000);
        }
    }
    
    function stopPassiveGoldGeneration(){
        clearInterval(goldGenerationInterval.value);
        isGeneratingGold.value = false;
    }

    onUnmounted(() =>{
        player.stopAutoAttack();
        player.stopPassiveGoldGeneration();
    });

    return { isAttacking, startAutoAttack, stopAutoAttack,
            startPassiveGoldGeneration, stopPassiveGoldGeneration, isGeneratingGold,
            

        
     };
}



// Timed Events

// Handling Idle Updates

// Clear Intervals / Stop Idle Actions