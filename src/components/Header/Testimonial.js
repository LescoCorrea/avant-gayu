import React from 'react'

export default function Testimonial() {
    return (
        <div>
            <div class="cards">
                <div class="testi">
                    <i class="fa fa-quote-left" aria-hidden="true"></i>
                    <span class="maintxt">
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit.
                    </span>
                    <i class="fa fa-quote-right" aria-hidden="true"></i>
                    <div class="d-flex pt-5 test">
                        <div>
                            <img src="https://i.imgur.com/hczKIze.jpg" width="40" class="rounded-circle" />
                        </div>
                        <hr className='brn' />
                        <div class="">
                            <span class="name">Taro Zizo</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
