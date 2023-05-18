import Hero from '../assets/images/4380.jpg'

function Home(){
    return(
    <div className='page'>
        <div className='hero'>
        <img src={Hero}  width='500px' ></img>
        <h1 className='title'>Organize all your <span className='highlight'> Meetings in One place </span> </h1>
        </div>
    </div>
    )
}
export default Home;