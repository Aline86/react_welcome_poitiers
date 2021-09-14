import React, {createContext, useState, useRef, useEffect} from 'react';

export const ThemeContext = createContext();
const ThemeContextProvider = props => {
    const targetRef = useRef()
    const [scroll, setScroll] = useState(false)
  
    useEffect(() => {
     // getTheWidth() 
      window.addEventListener('scroll', actionScroll);
  
      function actionScroll(){
        
        if(props.targetRef.current.offsetTop < window.pageYOffset && window.innerWidth > 800)
        {
            setScroll(true)
        }
        else
        {
            setScroll(false)
        }
      }
      return () => {
        window.removeEventListener('scroll', actionScroll)
      }
    }, [])
    return (
      <div>
        <ThemeContext.Provider value={{scroll}}>
            
            {props.children}
          
        </ThemeContext.Provider>
        </div>
    )
}

export default ThemeContextProvider;