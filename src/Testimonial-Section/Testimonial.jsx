import companylogo from '../assets/Images/Shape.png'
import Avatar from '../assets/Images/Avatar.png'


const Testimonial = () => {
    return(
        <>
        <center >
            <img src={companylogo}></img>
            <span style={{color:'#101828'}}>Sisyphus</span>
        
        <h2>We’ve been using Untitled to kick start every new <br></br>
            project and can’t imagine working without it.</h2>
           <img src={Avatar}></img><br></br>
           <span style={{color:"#101828"}}>Candice Wu</span><br></br>
           <span>Product Manager, Sisyphus</span>
        </center>

        </>
    )
}

export default Testimonial