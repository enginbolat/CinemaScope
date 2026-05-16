import { AppTextType } from "@shared/constants/app-text-type";
import { TextProps as RNTextProps } from "react-native";

export interface TextProps extends RNTextProps {
    type?: keyof typeof AppTextType,
    text: string
    color?: string;
}