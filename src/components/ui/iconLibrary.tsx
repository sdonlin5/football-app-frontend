import { Icon } from 'lucide-react'
import {
    football,
    footballHelmet, 
    footballGoal
} from '@lucide/lab'

export function GoalPostIcon(props: Omit<React.ComponentProps<typeof Icon>, 'iconNode'>) {
    return <Icon iconNode={footballGoal} {...props} />
}

export function HelmetIcon(props: Omit<React.ComponentProps<typeof Icon>, 'iconNode'>) {
    return <Icon iconNode={footballHelmet} {...props} />
}

export function FootballIcon(props: Omit<React.ComponentProps<typeof Icon>, 'iconNode'>) {
    return <Icon iconNode={football} {...props} />
}

