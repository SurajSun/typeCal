import  StylesS  from './Button.module.scss';

const Button = (props: {btname : string}) =>{

    const btClass= parseInt(props.btname) % 2 ? 'btodd' : 'bteven';
    const callfun = () =>
    {
        console.log('btname',props.btname)
    }

    return(
        <button className={StylesS[btClass]} onClick={callfun}>{props.btname}</button>
    )
}

export default Button;