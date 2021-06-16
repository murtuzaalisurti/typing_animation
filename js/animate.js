function typing_animation() {
    // document.querySelector('.text').style.opacity = 1;
    document.querySelector('.text_hide').style.left = '0%';
    let text_element = document.querySelector(".text");
    let text_array = text_element.innerHTML.split("");
    let text_array_slice = text_element.innerHTML.split(" ");
    let text_len = text_array.length;

    const word_len = text_array_slice.map((word) => {
        return word.length;
    })

    console.log(word_len);

    let timings = {
        easing: `steps(${Number(word_len[0] + 1)}, end)`,
        delay: 2000,
        duration: 2000,
        fill: 'forwards'
    }

    let cursor_timings = {
        duration: 700,
        iterations: Infinity,
        easing: 'cubic-bezier(0,.26,.44,.93)'
    }

    document.querySelector(".text_cursor").animate([
        {
            opacity: 0
        },
        {
            opacity: 0, offset: 0.7
        },
        {
            opacity: 1
        }
    ], cursor_timings);

    if (text_array_slice.length == 1) {
        timings.easing = `steps(${Number(word_len[0])}, end)`;

        let reveal_animation = document.querySelector(".text_hide").animate([
            { left: '0%' },
            { left: `${(100 / text_len) * (word_len[0])}%` }
        ], timings);

        document.querySelector(".text_cursor").animate([
            { left: '0%' },
            { left: `${(100 / text_len) * (word_len[0])}%` }
        ], timings);

        reveal_animation.onfinish = () => {
            // console.log(1);
            setTimeout(() => {
                // typing_animation();
                document.querySelector('.text_hide').animate([
                    {left: '0%'}
                ], {
                    duration: 2000,
                    // easing: 'cubic-bezier(1,.04,.85,-0.18)'
                    easing: 'cubic-bezier(.73,0,.38,.88)'
                });
                document.querySelector('.text_cursor').animate([
                    {left: '0%'}
                ], {
                    duration: 2000,
                    // easing: 'cubic-bezier(1,.04,.85,-0.18)'
                    easing: 'cubic-bezier(.73,0,.38,.88)'
                });
                // document.querySelector('.text').innerHTML = "Typing Animation";
                typing_animation();
            }, 1000);
        }
    } else {
        document.querySelector(".text_hide").animate([
            { left: '0%' },
            { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
        ], timings);

        document.querySelector(".text_cursor").animate([
            { left: '0%' },
            { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
        ], timings);
    }


    for (let i = 1; i < text_array_slice.length; i++) {
        console.log(word_len);
        console.log(text_array_slice.length);
        const single_word_len = word_len[i];
        console.log(single_word_len);

        if (i == 1) {
            var left_instance = (100 / text_len) * (word_len[i - 1] + 1);
            console.log(left_instance);
        }

        let timings_2 = {
            // id: 2,
            easing: `steps(${Number(single_word_len + 1)}, end)`,
            delay: (2 * (i + 1) + (2 * i)) * (1000),
            // delay: ((i*2)-1)*1000,
            duration: 2000,
            fill: 'forwards'
        }

        if (i == (text_array_slice.length - 1)) {
            timings_2.easing = `steps(${Number(single_word_len)}, end)`;
            let reveal_animation = document.querySelector(".text_hide").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i]))}%` }
            ], timings_2);

            document.querySelector(".text_cursor").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i]))}%` }
            ], timings_2);

            reveal_animation.onfinish = () => {
                // console.log(1);
                setTimeout(() => {
                    // typing_animation();
                    document.querySelector('.text_hide').animate([
                        {left: '0%'}
                    ], {
                        duration: 2000,
                        // easing: 'cubic-bezier(1,.04,.85,-0.18)'
                        easing: 'cubic-bezier(.73,0,.38,.88)'
                    });
                    document.querySelector('.text_cursor').animate([
                        {left: '0%'}
                    ], {
                        duration: 2000,
                        // easing: 'cubic-bezier(1,.04,.85,-0.18)'
                        easing: 'cubic-bezier(.73,0,.38,.88)'
                    });
                    // document.querySelector('.text').innerHTML = "Typing Animation";
                    typing_animation();
                }, 1000);
            }
            // document.getAnimations().forEach((animation) => {
            //     animation.onfinish = () => {
            //         if(animation.effect.target.classList.contains('text_hide')){
            //             document.querySelector('.text').innerHTML = "Typing Animation";
            //         }
            //     }
            // })
        } else {
            document.querySelector(".text_hide").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
            ], timings_2);

            document.querySelector(".text_cursor").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
            ], timings_2);
        }

        left_instance = left_instance + ((100 / text_len) * (word_len[i] + 1));
    }
}
typing_animation();
// const animation_count;
// setInterval(() => {
    // document.getAnimations().forEach((animation) => {
    //     // if(animation.effect.getTiming().duration == 700){
    //     //     console.log('cursor animation');
    //     // }
    //     // if(animation.effect.getTiming().duration == 2000){
    //     //     console.log('text_animation');
    //     // }
    //     // console.log(animation.effect.getComputedTiming());

    //     animation.onfinish = () => { 
    //         console.log(animation.effect.target)

    //         // document.querySelector('.text').innerHTML = "Typing Animation";
    //         // typing_animation();
    //     }
    //     // console.log(animation.effect.getTiming().duration);
    // })

    // console.log(document.querySelector('.text_cursor').getAnimations());
// }, 2000);
// document.getAnimations().forEach((animation) => {
//     console.log(animation.playState);
// })
// console.log(document.getAnimations());