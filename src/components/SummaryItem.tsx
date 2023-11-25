import IconReaction from '@/assets/images/icon-reaction.svg';
import IconMemory from '@/assets/images/icon-memory.svg';
import IconVerbal from '@/assets/images/icon-verbal.svg';
import IconVisual from '@/assets/images/icon-visual.svg';

import Image from 'next/image';

interface SummaryItemProps {
  value: number;
  type: 'reaction' | 'memory' | 'verbal' | 'visual';
}

export default function SummaryItem(props: SummaryItemProps) {

  function getIcon() {
    switch (props.type) {
      case 'reaction':
        return <Image src={IconReaction} alt="Reaction" width={24} height={24} />
      case 'memory':
        return <Image src={IconMemory} alt="Memory" width={24} height={24} />
      case 'verbal':
        return <Image src={IconVerbal} alt="Verbal" width={24} height={24} />
      case 'visual':
        return <Image src={IconVisual} alt="Visual" width={24} height={24} />
    }
  }

  function getBackgroundColor() {
    switch (props.type) {
      case 'reaction':
        return 'bg-light-red/5';
      case 'memory':
        return 'bg-orange-yellow/5';
      case 'verbal':
        return 'bg-green-teal/5';
      case 'visual':
        return 'bg-cobalt-blue/5';
    }
  }

  function getTextColor() {
    switch (props.type) {
      case 'reaction':
        return 'text-light-red';
      case 'memory':
        return 'text-orange-yellow';
      case 'verbal':
        return 'text-green-teal';
      case 'visual':
        return 'text-cobalt-blue';
    }
  }


  return (
    <div className={`rounded-xl flex justify-between p-4 gap-20 ${getBackgroundColor()}`}>
      <div className="flex items-center gap-1">
        {getIcon()}
        <span className={`capitalize ${getTextColor()}`}>{props.type}</span>
      </div>
      <div>
        <span className="text-[#303B59]">{props.value}</span>
        <span className="opacity-50">/</span>
        <span className="opacity-50">100</span>
      </div>
    </div>
  )
}