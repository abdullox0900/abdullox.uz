import { TechList, TechItem } from './Style'
import technoData from '../../data/technologies'

function Technologies({scrollRef}) {

	return (
		<TechList ref={scrollRef}>
			{technoData?.map(item => {
                return(
                    <TechItem key={item?.id}>

                    </TechItem>
                )
            })}
		</TechList>
	)
}

export default Technologies
