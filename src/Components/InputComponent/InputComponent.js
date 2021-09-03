import React,{forwardRef} from 'react';

const InputComponent = ({type,placeholder,required},ref) => {
    
    return <input type={type} placeholder={placeholder} required={required} ref={ref}/>
    


}


const UserForword_ref = forwardRef(InputComponent)

export default UserForword_ref;