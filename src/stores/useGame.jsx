import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'


export default create(subscribeWithSelector((set) =>
{
    return {
        blocksCount: 10,
        blockSeed : 0,

        /* Time */

        startTime : 0,
        endTime : 0,
        
        /* Phases */

        phase : 'ready',

        start : ()=>
        {
            set((state)=>
            {
                if(state.phase == 'ready')
                    return { phase : 'playing', startTime : Date.now() }
                return {}
            })
        },
        restart : ()=>
        {
            set((state)=>
            {
                if(state.phase == 'playing' || state.phase == 'end')
                    return { phase : 'ready', blockSeed :  Math.random()}
                return {}
            })
        },
        end : ()=>
        {
            set((state)=>
            {
                if(state.phase == 'playing')
                    return { phase : 'end', endTime :  Date.now()}
                return {}
            })
        },
    }
}))