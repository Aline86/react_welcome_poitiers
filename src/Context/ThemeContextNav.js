import React, {createContext, useState, useRef, useEffect} from 'react';

export const ThemeContextNav = createContext();
const ThemeContextNavProvider = props => {
    
    const [scroll, setScroll] = useState(false)
  
    useEffect(() => {
     // getTheWidth() 
      window.addEventListener('scroll', actionScroll);
  
      function actionScroll(){
        
        if(props.targetRef.current.offsetTop <= window.pageYOffset)
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
        <ThemeContextNav.Provider value={{scroll}}>
            
            {props.children}
          
        </ThemeContextNav.Provider>
        </div>
        
    )
}

export default ThemeContextNavProvider;