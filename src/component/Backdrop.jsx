import css from './backdrop.scss'
function Backdrop(props)
{
    return (<div className='backdrop' onClick={props.onCancel}/>);
}

export default Backdrop;