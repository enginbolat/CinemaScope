import type { IconType } from '@shared/assets/icons'
import type { AppTextType } from '@shared/constants/app-text-type'

export type IHeaderProps = {
    isHaveHeader?: boolean;
    title?: string;
    titleType?: keyof typeof AppTextType;
    leftIconName?: string;
    leftIconShown?: boolean;
    leftIconOnPress?: () => void;
    rightIconName?: IconType;
    rightIconOnPress?: () => void;
};
