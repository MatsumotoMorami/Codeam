import BasicTimeline from "./history-timeline"

export default function DashboardComponentSet() {
    return (
        <div>
            <div className="fixed bg-[var(--blue)] w-[15vw] h-[100vh] "></div>
            <div className="fixed top-[12vh] left-[18vw] h-[84vh] w-[79vw]">
                <div className="w-[12vw] text-4xl text-white bg-[var(--black)] h-[7vh] mb-[4vh] db-HOME">HOME</div>
                <div className="w-full h-[28vh] mb-[3vh] bg-[var(--aoi)]"><History /></div>
                <div className="w-full h-[39vh] flex flex-row">
                    <div className="h-full w-[50vw] mr-[2vw] bg-[var(--aoi)]"></div>
                    <div className="h-full w-[27vw] bg-[var(--aoi)]"></div>
                </div>
            </div>
        </div>
    )
}

export function History() {
    return (
        <div className="w-full h-full p-[2vw] flex flex-row">
            <div className="text-[var(--blue)] text-3xl mr-[4vw] w-[10vw]  text-center">History</div>
            <div className="absolute left-[10vw] h-[calc(28vh-4vw)] w-[3px]"><BasicTimeline></BasicTimeline></div>
        </div>
    )
}