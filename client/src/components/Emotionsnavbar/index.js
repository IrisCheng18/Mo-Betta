import React from "react";
import "./style.css";
import { stack as Menu } from 'react-burger-menu';

function Emotionsnavbar() {

    var MenuStyles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '95%',
            top: '12%'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#fafafa',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#fff'
        },
        bmItemList: {
            color: '#fff',
            padding: '0.8em'
        },
        bmItem: {
            display: 'block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    return (
        <div>
            <Menu right noOverlay width={'150px'} styles={MenuStyles}>
                <p></p>
                <div className="icon-container text-center">
                    <a className="mood-icon" href="/hungry"><i className="fas fa-grin-tongue ihungry" title="Hungry"></i></a>
                    <p className="icon-text">Hungry</p>
                </div>

                <div className="icon-container text-center">
                    <a className="mood-icon" href="/outdoorsy"><i className="fas fa-laugh-beam ilaugh" title="Outdoorsy"></i></a>
                    <p className="icon-text">Outdoorsy</p>
                </div>

                <div className="icon-container text-center">
                    <a className="mood-icon" href="/productive"><i className="fas fa-smile-beam ismile" title="Productive"></i></a>
                    <p className="icon-text">Productive</p>
                </div>

                <div className="icon-container text-center">
                    <a className="mood-icon" href="/bored"><i className="fas fa-meh ineutral" title="Bored"></i></a>
                    <p className="icon-text">Bored</p>
                </div>

                <div className="icon-container text-center">
                    <a className="mood-icon" href="/uplift"><i className="fas fa-frown isad" title="Uplift"></i></a>
                    <p className="icon-text">Uplift</p>
                </div>

                <div className="icon-container text-center">
                    <a className="mood-icon" href="/relax"><i className="fas fa-angry iangry" title="Relax"></i></a>
                    <p className="icon-text">Relax</p>
                </div>
            </Menu>
        </div>

        //     <nav className="nav navbar-light bg-light emotionsnavbar">
        //         <div className="container-fluid emotionscontainer">
        //             {/* <div className="d-md-flex justify-content-center"> */}
        //             <div className="icon-container text-center ml-5">
        //                 <a className="mood-icon" href="/relax"><i className="fas fa-angry iangry" title="Relax"></i></a>
        //                 <p className="icon-text">Relax</p>
        //             </div>

        //             <div className="icon-container text-center ml-5">
        //                 <a className="mood-icon" href="/uplift"><i className="fas fa-frown isad" title="Uplift"></i></a>
        //                 <p className="icon-text">Uplift</p>
        //             </div>

        //             <div className="icon-container text-center ml-5">
        //                 <a className="mood-icon" href="/bored"><i className="fas fa-meh ineutral" title="Bored"></i></a>
        //                 <p className="icon-text">Bored</p>
        //             </div>

        //             <div className="icon-container text-center ml-5">
        //                 <a className="mood-icon" href="/bored"><i className="fas fa-smile-beam ismile" title="Productive"></i></a>
        //                 <p className="icon-text">Productive</p>
        //             </div>

        //             <div className="icon-container text-center ml-5">
        //                 <a className="mood-icon" href="/outdoorsy"><i className="fas fa-laugh-beam ilaugh" title="Outdoorsy"></i></a>
        //                 <p className="icon-text">Outdoorsy</p>
        //             </div>

        //             <div className="icon-container text-center ml-5">
        //                 <a className="mood-icon" href="/hungry"><i className="fas fa-grin-tongue ihungry" title="Hungry"></i></a>
        //                 <p className="icon-text">Hungry</p>
        //             </div>
        //             {/* </div> */}
        //         </div>
        //     </nav >
    );
}

export default Emotionsnavbar;