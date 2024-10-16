export default function DashboardComponentSet() {
    return (
        <div>
            <div className="fixed bg-[var(--blue)] w-[15vw] h-[100vh] "></div>
            <div className="fixed top-[12vh] left-[18vw] h-[84vh] w-[79vw]">
                <div className="w-[10vw] text-3xl text-white bg-[var(--black)] h-[7vh] mb-[4vh] db-HOME">HOME</div>
                <div className="w-full h-[28vh] mb-[3vh] bg-[var(--blue)]"></div>
                <div className="w-full h-[39vh] flex flex-row">
                    <div className="h-full w-[50vw] mr-[2vw] bg-[var(--blue)]"></div>
                    <div className="h-full w-[27vw] bg-[var(--blue)]"></div>
                </div>
            </div>
        </div>
    )
}

export function Todays() {
    return (
        <div></div>
    )
}