import type { Popular } from './popular'

export interface NowPlayingRoot {
    dates: Dates
    page: number
    results: Popular[]
    total_pages: number
    total_results: number
}

export interface Dates {
    maximum: string
    minimum: string
}
