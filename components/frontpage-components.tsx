export default function FrontpageComponentSet() {
    return (
        <div>
            <img className="fixed w-[100vw] " src="/texture/frontpage/pic.png"></img>
            <img className="fixed w-[80vw] -translate-y-1/2 top-[20vw] left-[10vw]" src="/texture/frontpage/pattern2.png"></img>
            <img className="fixed -translate-x-1/2 -translate-y-1/2 top-[20vw] left-[50vw] fc-codeam rounded-3xl w-[35vw] " src="/texture/frontpage/codeam.png"></img>
            <input className="fixed w-[35vw] top-[38.5vw] left-[26.5vw] h-[4vw] text-center rounded-3xl fc-signup" placeholder="Sign up"></input>
            <div className="fixed w-[8vw] top-[38.5vw] left-[65.5vw] h-[4vw] text-center rounded-3xl fc-signin">Sign in</div>
        </div >
    )
}