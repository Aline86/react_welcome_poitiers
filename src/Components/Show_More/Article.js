import React, {useState, useEffect, useRef}from 'react'
import Text from './Text'
import './Show.css'

export default function Article(){
   
    const [toggle, setToggle] = useState(false)
    const [toggle_1, setToggle_1] = useState(false)
    const [toggle_2, setToggle_2] = useState(false)

    const showMore_art_1 = () => {
       
        setToggle(!toggle)
    

     
    }
    const showMore_art_2 = () => {
       
        setToggle_1(!toggle_1)
        
    }
    const showMore_art_3 = () => {
       
        setToggle_2(!toggle_2)
        
    }

  
  
 
    
    return (
        <div  className="texte">
            <div>
           
                    <div className="card">
                        <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint odit accusamus excepturi dolor rem! Omnis quas magnam facilis? Eveniet accusantium quae expedita sapiente provident architecto distinctio nulla corporis velit autem.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil eius odit ipsam corrupti optio quae nemo ab, culpa dolorem repellendus alias saepe aperiam aliquid perspiciatis? Possimus numquam ullam cupiditate?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio asperiores quasi explicabo facilis dolor excepturi pariatur commodi? Possimus ullam qui, maxime minima dolores magni voluptate, culpa quod sapiente voluptas molestiae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque labore, dolores possimus repellendus exercitationem debitis nemo veniam placeat nisi deserunt? Expedita eveniet aliquid accusantium ad inventore distinctio iusto officiis blanditiis!</Text>
                        {
                            toggle && <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda, non numquam quisquam maxime necessitatibus dolorem fugiat perferendis temporibus delectus, ab, animi sequi. Debitis, quam iure! Mollitia a animi deserunt!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur autem ullam repudiandae, ipsam odio, a vero sint doloremque perferendis hic amet esse neque quaerat cum expedita voluptas delectus nulla.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam facilis ratione, facere, sapiente atque laboriosam rerum sed, doloribus aut dicta molestiae ab laudantium delectus minus. Impedit aspernatur perspiciatis velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente nam fugiat veniam quos, quod quam iste perspiciatis repellendus velit distinctio minus assumenda. Pariatur delectus deleniti aperiam neque laboriosam ipsam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur autem ullam repudiandae, ipsam odio, a vero sint doloremque perferendis hic amet esse neque quaerat cum expedita voluptas delectus nulla.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam facilis ratione, facere, sapiente atque laboriosam rerum sed, doloribus aut dicta molestiae ab laudantium delectus minus. Impedit aspernatur perspiciatis velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente nam fugiat veniam quos, quod quam iste perspiciatis repellendus velit distinctio minus assumenda. Pariatur delectus deleniti aperiam neque laboriosam ipsam?
                                
                                </Text>
                        }
                        <button 
                            onClick={showMore_art_1}
                            className="show-more">
                            {toggle ? 'Hide' : 'Show More'}
                        </button>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aperiam iste dolores, voluptates exercitationem id nisi nihil veniam dolorem obcaecati? Adipisci ab esse quod cumque molestias maiores enim voluptatem! Quam!</Text>
                        {
                            toggle_1 && <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur autem ullam repudiandae, ipsam odio, a vero sint doloremque perferendis hic amet esse neque quaerat cum expedita voluptas delectus nulla.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam facilis ratione, facere, sapiente atque laboriosam rerum sed, doloribus aut dicta molestiae ab laudantium delectus minus. Impedit aspernatur perspiciatis velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur autem ullam repudiandae, ipsam odio, a vero sint doloremque perferendis hic amet esse neque quaerat cum expedita voluptas delectus nulla.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam facilis ratione, facere, sapiente atque laboriosam rerum sed, doloribus aut dicta molestiae ab laudantium delectus minus. Impedit aspernatur perspiciatis velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente nam fugiat veniam quos, quod quam iste perspiciatis repellendus velit distinctio minus assumenda. Pariatur delectus deleniti aperiam neque laboriosam ipsam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente nam fugiat veniam quos, quod quam iste perspiciatis repellendus velit distinctio minus assumenda. Pariatur delectus deleniti aperiam neque laboriosam ipsam?                                
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente nam fugiat veniam quos, quod quam iste perspiciatis repellendus velit distinctio minus assumenda. Pariatur delectus deleniti aperiam neque laboriosam ipsam?</Text>
                        }
                        <button 
                            onClick={showMore_art_2}
                            className="show-more">
                            {toggle_1 ? 'Hide' : 'Show More'}
                        </button>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, a fugiat. Perspiciatis, sunt illo! Officiis tempore quam eos, pariatur quisquam aspernatur eligendi numquam mollitia id quos earum cumque maxime laborum!</Text>
                        {
                            toggle_2 && <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur autem ullam repudiandae, ipsam odio, a vero sint doloremque perferendis hic amet esse neque quaerat cum expedita voluptas delectus nulla.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam facilis ratione, facere, sapiente atque laboriosam rerum sed, doloribus aut dicta molestiae ab laudantium delectus minus. Impedit aspernatur perspiciatis velit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente nam fugiat veniam quos, quod quam iste perspiciatis repellendus velit distinctio minus assumenda. Pariatur delectus deleniti aperiam neque laboriosam ipsam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente nam fugiat veniam quos, quod quam iste perspiciatis repellendus velit distinctio minus assumenda. Pariatur delectus deleniti aperiam neque laboriosam ipsam?</Text>
                        }
                        <button 
                            onClick={showMore_art_3}
                            className="show-more">
                            {toggle_2 ? 'Hide' : 'Show More'}
                        </button>
                    </div>
                </div>
            </div>
       
    )
}