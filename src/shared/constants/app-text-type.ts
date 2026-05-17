import type { TextStyle } from 'react-native'

export const AppFonts = {
  jakartaBold: 'PlusJakartaSans_800ExtraBold',
  jakartaSemiBold: 'PlusJakartaSans_700Bold',
  jakartaMedium: 'PlusJakartaSans_600SemiBold',
  interRegular: 'Inter_400Regular',
  interMedium: 'Inter_500Medium',
  geistSemiBold: 'Geist_600SemiBold',
} as const

export const AppTextType = {
  // ── Design system tokens ──────────────────────────────
  displayLg: {
    fontFamily: AppFonts.jakartaBold,
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -0.8,
  } as TextStyle,

  headlineLg: {
    fontFamily: AppFonts.jakartaSemiBold,
    fontSize: 28,
    lineHeight: 34,
  } as TextStyle,

  headlineLgMobile: {
    fontFamily: AppFonts.jakartaSemiBold,
    fontSize: 24,
    lineHeight: 30,
  } as TextStyle,

  titleMd: {
    fontFamily: AppFonts.jakartaMedium,
    fontSize: 20,
    lineHeight: 26,
  } as TextStyle,

  bodyLg: {
    fontFamily: AppFonts.interRegular,
    fontSize: 16,
    lineHeight: 24,
  } as TextStyle,

  bodySm: {
    fontFamily: AppFonts.interRegular,
    fontSize: 14,
    lineHeight: 20,
  } as TextStyle,

  labelCaps: {
    fontFamily: AppFonts.geistSemiBold,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  } as TextStyle,

  // ── Legacy aliases (mevcut kullanımlar için) ──────────
  boldHeading180: { fontFamily: AppFonts.jakartaBold, fontSize: 80, lineHeight: 80 } as TextStyle,
  boldHeading260: { fontFamily: AppFonts.jakartaBold, fontSize: 60, lineHeight: 60 } as TextStyle,
  boldHeading340: { fontFamily: AppFonts.jakartaBold, fontSize: 40, lineHeight: 48, letterSpacing: -0.8 } as TextStyle,
  boldHeading430: { fontFamily: AppFonts.jakartaSemiBold, fontSize: 28, lineHeight: 34 } as TextStyle,
  boldHeading524: { fontFamily: AppFonts.jakartaSemiBold, fontSize: 24, lineHeight: 30 } as TextStyle,
  boldHeading620: { fontFamily: AppFonts.jakartaMedium, fontSize: 20, lineHeight: 26 } as TextStyle,
  boldBody16: { fontFamily: AppFonts.jakartaMedium, fontSize: 16, lineHeight: 24 } as TextStyle,
  boldCaption14: { fontFamily: AppFonts.jakartaMedium, fontSize: 14, lineHeight: 20 } as TextStyle,
  boldSmall12: { fontFamily: AppFonts.geistSemiBold, fontSize: 12, lineHeight: 16, letterSpacing: 0.6 } as TextStyle,
  boldTiny10: { fontFamily: AppFonts.geistSemiBold, fontSize: 10, lineHeight: 14 } as TextStyle,

  mediumHeading180: { fontFamily: AppFonts.jakartaSemiBold, fontSize: 80, lineHeight: 80 } as TextStyle,
  mediumHeading260: { fontFamily: AppFonts.jakartaSemiBold, fontSize: 60, lineHeight: 60 } as TextStyle,
  mediumHeading340: { fontFamily: AppFonts.jakartaSemiBold, fontSize: 40, lineHeight: 48 } as TextStyle,
  mediumHeading430: { fontFamily: AppFonts.jakartaSemiBold, fontSize: 28, lineHeight: 34 } as TextStyle,
  mediumHeading524: { fontFamily: AppFonts.jakartaSemiBold, fontSize: 24, lineHeight: 30 } as TextStyle,
  mediumHeading620: { fontFamily: AppFonts.jakartaMedium, fontSize: 20, lineHeight: 26 } as TextStyle,
  mediumBody16: { fontFamily: AppFonts.interMedium, fontSize: 16, lineHeight: 24 } as TextStyle,
  mediumCaption14: { fontFamily: AppFonts.interMedium, fontSize: 14, lineHeight: 20 } as TextStyle,
  mediumSmall12: { fontFamily: AppFonts.geistSemiBold, fontSize: 12, lineHeight: 16 } as TextStyle,
  mediumTiny10: { fontFamily: AppFonts.geistSemiBold, fontSize: 10, lineHeight: 14 } as TextStyle,

  regularHeading180: { fontFamily: AppFonts.jakartaMedium, fontSize: 80, lineHeight: 80 } as TextStyle,
  regularHeading260: { fontFamily: AppFonts.jakartaMedium, fontSize: 60, lineHeight: 60 } as TextStyle,
  regularHeading340: { fontFamily: AppFonts.jakartaMedium, fontSize: 40, lineHeight: 48 } as TextStyle,
  regularHeading430: { fontFamily: AppFonts.jakartaMedium, fontSize: 28, lineHeight: 34 } as TextStyle,
  regularHeading524: { fontFamily: AppFonts.jakartaMedium, fontSize: 24, lineHeight: 30 } as TextStyle,
  regularHeading620: { fontFamily: AppFonts.jakartaMedium, fontSize: 20, lineHeight: 26 } as TextStyle,
  regularBody16: { fontFamily: AppFonts.interRegular, fontSize: 16, lineHeight: 24 } as TextStyle,
  regularCaption14: { fontFamily: AppFonts.interRegular, fontSize: 14, lineHeight: 20 } as TextStyle,
  regularSmall12: { fontFamily: AppFonts.interRegular, fontSize: 12, lineHeight: 18 } as TextStyle,
  regularTiny10: { fontFamily: AppFonts.interRegular, fontSize: 10, lineHeight: 14 } as TextStyle,

  thinHeading180: { fontFamily: AppFonts.interRegular, fontSize: 80, lineHeight: 80, fontStyle: 'italic' } as TextStyle,
  thinHeading260: { fontFamily: AppFonts.interRegular, fontSize: 60, lineHeight: 60, fontStyle: 'italic' } as TextStyle,
  thinHeading340: { fontFamily: AppFonts.interRegular, fontSize: 40, lineHeight: 48, fontStyle: 'italic' } as TextStyle,
  thinHeading430: { fontFamily: AppFonts.interRegular, fontSize: 28, lineHeight: 34, fontStyle: 'italic' } as TextStyle,
  thinHeading524: { fontFamily: AppFonts.interRegular, fontSize: 24, lineHeight: 30, fontStyle: 'italic' } as TextStyle,
  thinHeading620: { fontFamily: AppFonts.interRegular, fontSize: 20, lineHeight: 26, fontStyle: 'italic' } as TextStyle,
  thinBody16: { fontFamily: AppFonts.interRegular, fontSize: 16, lineHeight: 24, fontStyle: 'italic' } as TextStyle,
  thinCaption14: { fontFamily: AppFonts.interRegular, fontSize: 14, lineHeight: 20, fontStyle: 'italic' } as TextStyle,
  thinSmall12: { fontFamily: AppFonts.interRegular, fontSize: 12, lineHeight: 18, fontStyle: 'italic' } as TextStyle,
  thinTiny10: { fontFamily: AppFonts.interRegular, fontSize: 10, lineHeight: 14, fontStyle: 'italic' } as TextStyle,
} as const
