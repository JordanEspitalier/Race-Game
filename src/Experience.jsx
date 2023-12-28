
import Lights from './Lights.jsx'
import {Level} from './Level.jsx'
import { Physics } from '@react-three/rapier'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'

export default function Experience()
{
    const blockCount = useGame((state)=> state.blocksCount )
    const blockSeed = useGame((state)=> state.blockSeed )

    return <>
        <color args={['#bdedfc']} attach="background" />
        <Physics>
            <Lights />
            <Level count={blockCount} seed={blockSeed}/>
            <Player />
        </Physics>

    </>
}