import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface MarqueeData{
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
    markets: string[]
}
export default async function Marquee() {
    const res = await fetch(`${process.env.API_URL}/api/bazardor/products`)
    const data = await res.json();
    console.log(data)
  return (
    <div className="ticker overflow-hidden border-b border-base-300 bg-base-100" role="marquee" aria-label="আজকের দাম পরিবর্তনের তালিকা">
        <div className="ticker-track">
            <ul className="flex shrink-0 items-center">
                <MarqueeText direction="right" duration={10} pauseOnHover={true}>
                    {
                        data?.map((item:MarqueeData)=>{
                            return(
                                <li key={item.id} className="flex items-center gap-1.5 border-e border-base-200 px-4 py-2 text-sm whitespace-nowrap">
                                    <span aria-hidden="true">{item.image}</span>
                                    <span className="font-medium">{item.nameBn}</span>
                                    <span className="text-base-content/70">{item.today} টাকা/{item.unit}</span>
                                    <span className="font-semibold price-up">
                                        {
                                            item.change.dir === "up" ? <span className="text-red-600">▲ {item.change.pct} %</span> : <span className="text-green-600">▼ {item.change.pct} %</span>
                                        }
                                    </span>    
                                </li>
                            )
                        })
                    }
                </MarqueeText>
                
            </ul>
        </div>
    </div>
  )
}
