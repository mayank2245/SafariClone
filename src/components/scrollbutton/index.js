import React from 'react'
import { Disclaimer } from '..'
import { Scroll } from '../../images'
import useDocumentScrollThrottled from '../../helper/useDocumentScrollThrottled';

const ScrollButton = () => {
    useDocumentScrollThrottled(callbackData => {
        const { currentScrollTop, previousScrollTop } = callbackData
        // console.log(currentScrollTop,"currentScrollTop",previousScrollTop);
        if (currentScrollTop > 100) {
            document.getElementById("scroll_button").style.display = "block";
        }
        else if (currentScrollTop > 0 || currentScrollTop <= 100) {
            document.getElementById("scroll_button").style.display = "none";
        }
    })
    return (
        <div className="scroll_top" id="scroll_button">
            <div className="scroll_btn">
                <a href="#header">
                    <Disclaimer atlName='scroll' imgUrl={Scroll} />
                </a>
            </div>
        </div>
    )
}
export default ScrollButton