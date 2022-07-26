import  React, {useState, useEffect} from 'react';

export default React.memo(() => {
    const [isDashVisible, setDashVisible] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setDashVisible(!isDashVisible);
      }, 750);
    }, [isDashVisible])
    return (isDashVisible ? '_' : '');
  })