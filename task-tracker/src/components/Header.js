import Button from './Button.js';

const Header = ({title}) => {
    const onClick = (e) => {
        console.log(`X Psition: ${e.pageX}, Y Position: ${e.pageY}`);
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Empty',
}

export default Header
