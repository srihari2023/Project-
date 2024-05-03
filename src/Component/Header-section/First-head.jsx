import React from "react";
import headimage from '../../assets/Images/head-image.png'


const HeaderSection = () => {
    return(
        <center><div>
            <div>
              <p>New feature</p>  
                <div>
                  <p>check out the team dashboard</p>
                </div>
            </div>
                <h1 style={{fontSize:'60px'}}>Beautiful analytics to grow smarter</h1>
                <p style={{fontSize:'20px'}}>powerful,self-serve product and growth analytics to help  you convert,engage,<br></br>
                and retain more user.Trustedby over 4,000 startups.</p>
            <button style={{backgroundColor:"#FFFFFF",color:"black",width:'90px',margin:"10px",borderRadius:'8px',padding:'7px'}}>Demo</button>
            <button style={{backgroundColor:"#7F56D9",color:"white",width:'90px',borderRadius:'8px',padding:'7px'}}>sign up</button>
            <div style={{width:'300px'}}>
              <center><img src={headimage} style={{width:'1200px',marginLeft:'-400px',border:'10px solid black',borderRadius:'10px',borderBottom:'none'}}></img></center>
            </div>
            

           
        
        </div>
        </center>
    )
}
 export default HeaderSection