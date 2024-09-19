import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Question=(props)=>{
    
    useEffect(() => {
        AOS.init({
          once: false,
          duration: 650,
          
        });
      }, []);

    const [openIndex,setOpenIndex]=useState(null)
    const question=[
        {
            question:'Is Firebee Safe?',
            answer:`Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission${<br></br>}
            on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average${<br></br>}
            smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The${<br></br>}
            behind Firebee has been rigorously safety tested and has over 300,000 hours tested${<br></br>}
            by users for efficacy and safety.`

        },
        
        {
            question:'How Does Firebee work?',
            answer:`Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.${<br></br>}
                    Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique${<br></br>}
                    one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth${<br></br>}
                    actually has a unique magnetic signature.${<br></br>}
                    Firebee using patented technology is able to take a magnetic signature and play it back through${<br></br>}
                    the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic${<br></br>}
                    signature of caffeine which our bodies already recognize.${<br></br>}
                    Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake.${<br></br>}
                    Firebee signal is 3000 times less powerful than a smartphone and completely safe to use. `

        },
        {
            question:'Will Firebee Fit on My Head? ',
            answer:'Firebee has a fully adjustable headband you can adjust to fit comfortably and snug on your head.'

        },
        {
            question:'What If I want the signal to stop? ',
            answer:'Firebee is designed to be used on command. If you wish to turn off a signal, the effects wear off within minutes.'

        },
        {
            question:'How do you charge Firebee?',
            answer:'Firebee comes with a charging dock and a charging cable. Just set up the charging dock on a nightstand and plug it in. '

        }
    ]
    const handleToggle=(index)=>{
        return setOpenIndex(openIndex==index ? null:index)
    }
    return(
        <div className="mt-12 flex flex-col gap-8">
            <div className="text-center">
                <span className="text-4xl font-poppins">Frequently Asked Questions</span>
            </div>

            <div className="self-center ml-2 mr-2" data-aos='zoom-in'>
                {question.map((item,index)=>{
                    return(    
                    <div className="border-t-2 border-b-2 border-black flex flex-col">
                        <div className="flex justify-between md:gap-96 pt-4 pb-4">
                            <strong>{item.question}</strong>
                            <FontAwesomeIcon onClick={()=>{return handleToggle(index)}}  icon={openIndex===index ?faMinus:faPlus}/>
                        </div>
                        {openIndex===index && 
                            <div className="text-center">
                                <p className="text-small md:text-base">{item.answer}</p>
                            </div>
                        }
                    </div>
                    )
                })}
                {/*** 
                <div className="self-center gap-10 border-t-2 border-b-2">
                    <div className="flex justify-between gap-96 pt-4 pb-4">
                        <strong>Is Firebee Safe?</strong>
                        <FontAwesomeIcon onClick={showHandler}  icon={show?faMinus:faPlus}/>
                    </div>

                    <div className="self-center gap-10 ">
                        <p className={show? 'inline-block' : 'hidden'}>
                            Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission<br></br>
                            on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average<br></br>
                            smartphone. Firebee uses an ultra-low signal that is completely safe for home use. The<br></br>
                            technology behind Firebee has been rigorously safety tested and has over 300,000 hours tested
                            <br></br> by users for efficacy and safety. 
                        </p>
                    </div>
                </div>
                
                <div className="self-center gap-10 border-b-2">
                    <div className="flex justify-between gap-96 pt-4 pb-4">
                        <strong>How Does Firebee work?  </strong>
                        <FontAwesomeIcon icon={show?faMinus:faPlus}/>
                    </div>
                    <div>
                        <p className={show? 'inline-block' : 'hidden'}>
                            Firebee uses safe ultra-low energy magnetic signals to gently nudge you into a different mental state.

                            Every Firebee signal is made by studying real world magnetic signatures. Did you know caffeine has a unique one of a kind magnetic signature? It’s a relatively unknown fact that every molecule on earth actually has a unique magnetic signature.

                            Firebee using patented technology is able to take a magnetic signature and play it back through the Firebee headband. When you use the alert signal with Firebee you are actually playing back the magnetic signature of caffeine which our bodies already recognize. 

                            Within minutes of feeling the ultra-low magnetic signal of caffeine our body begins to feel more alert and awake. 

                            Firebee signal is 3000 times less powerful than a smartphone and completely safe to use. 
                        </p>
                    </div>
                </div>
                <div className="self-center gap-10 border-b-2">
                    <div className="flex justify-between gap-96 pt-4 pb-4">
                        <strong>Is Firebee Safe?</strong>
                        <FontAwesomeIcon icon={show?faMinus:faPlus}/>
                    </div>
                    <div>
                        <p className={show? 'inline-block' : 'hidden'}></p>
                    </div>
                </div>
                <div className="self-center gap-10 border-b-2">
                    <div className="flex justify-between gap-96 pt-4 pb-4">
                        <strong>Is Firebee Safe?</strong>
                        <FontAwesomeIcon icon={show?faMinus:faPlus}/>
                    </div>
                    <div>
                        <p className={show? 'inline-block' : 'hidden'}></p>
                    </div>
                </div>
                <div className="self-center gap-10 border-b-2">
                    <div className="flex justify-between gap-96 pt-4 pb-4">
                        <strong>Is Firebee Safe?</strong>
                        <FontAwesomeIcon icon={show?faMinus:faPlus}/>
                    </div>
                    <div>
                        <p className={show? 'inline-block' : 'hidden'}></p>
                    </div>
                </div>***/}
            </div>
        </div>
    )
}
export default Question;