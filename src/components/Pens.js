import '../Css/ComponentStyles/Pens.css';
import { PensCard } from './PensCard';
import { PensData } from '../common/constants/CodePens';

const Pens = () => {
    return (
        <div className="pensContainer">
            { PensData.map((pen) => {
                return <PensCard key={pen.title} navLink1 data={pen}/>
            })}
        </div>
    )
}

export default Pens;