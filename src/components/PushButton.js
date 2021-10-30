import '../Css/ComponentStyles/PushButton.css';

function PushButton() {
    return (
        <div>
            <div className="outer"></div>
            <div onMouseDown={btnPress} onMouseUp={btnLift}>
                <div id="inner" className="inner"></div>
                <div id="dip" className="dip"></div>
            </div>
        </div>
    )
}

function btnPress() {
    console.log("In btn click");
    document.getElementById('inner').classList.add('inner-press');
    document.getElementById('dip').classList.add('dip-press');
}

function btnLift() {
    console.log("In btn click");
    document.getElementById('inner').classList.remove('inner-press');
    document.getElementById('dip').classList.remove('dip-press');
}

export default PushButton