import  Styless  from "./input.module.css"


const Input = () =>{

    const onchangeinput = (e:any) =>{
            console.log('event',e)
    }
    return(
        <h1> <input className={Styless["inputclass"]} value={1} onChange={(e)=> onchangeinput(e)} /></h1>
    )
}
export default Input;