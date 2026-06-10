import { experience } from '../../../data/experience'
import SectionHeading from '../../ui/SectionHeading'
import TimelineItem from './TimelineItem'

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Experience"
          title="Positions of Responsibility"
          description="Leadership and coordination roles I've taken on alongside my technical work."
        />

        <div className="max-w-2xl">
          {experience.map((item, idx) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={idx === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience