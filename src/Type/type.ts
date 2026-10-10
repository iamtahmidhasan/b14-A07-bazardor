export interface MarqueeData{
    id: string,
    slug: string,
    nameBn: string,
    category: string,
    categoryNameBn: string,
    categoryIcon: string,
    unit: string,
    image: string,
    today: number,
    yesterday: number,
    lastWeek: number,
    lastMonth: number,
    change: {
      dir: string,
      pct: number
    },
    markets: {
      market: string,
      division: string,
      min: number,
      max: number
    }[]
}
export interface SingleCat{
    id: string,
    slug: string,
    nameBn: string,
    icon: string
}