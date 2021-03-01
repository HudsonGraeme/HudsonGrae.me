import  React, {useState, useEffect} from 'react';
import tw from "twin.macro";

export default React.memo(props => {
    const [isDashVisible, setDashVisible] = useState(false);
    const Dash = tw.span`absolute`;
    useEffect(() => {
      setTimeout(() => {
        setDashVisible(!isDashVisible);
      }, 750);
    }, [isDashVisible])
  
    return (<Dash>{isDashVisible && '_'}</Dash>);
  })