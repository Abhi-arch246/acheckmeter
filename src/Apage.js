import React from 'react'
import Background from './images/background.jpg'
import huggingface from './images/huggingface.png'
import noemoji from './images/noemoji.png'
import kissemoji from './images/kissemoji.png'
import breakin from './images/break.png'
import loveable from './images/loveable.png'
import { useHistory } from 'react-router'

function Apage() {

    let log = useHistory()
    const back = {
        height: "100vh",
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflowX: "hidden"
    }
    return (
        <div style={back}>
            <h2 className="text-white text-center p-3">Hello A's ... </h2>
            <h6 className="text-white text-center">Here is your meter</h6>
            <div className="mt-5 container">

                <div className="row">
                    <div className="mx-auto text-center col-md-4 rounded">
                        <h2 className="p-2 text-white">AB</h2>
                        <img className="p-1 mt-4" src={breakin} alt="" width="300" />
                    </div>
                    <div className="mx-auto text-center col-md-4 rounded">
                        <h2 className="text-white p-2">AK</h2>
                        <img className="p-1 mt-4" src={kissemoji} alt="" width="300" />

                    </div>
                </div>
            </div>
            <div className="mt-5 text-center">
                <button onClick={() => log.push('./')} className="mt-5 btn btn-danger">Logout</button>

            </div>
        </div>
    )
}

export default Apage
