import './hero.css'

export default function Hero() { 
const lumix_url = 'https://github.com/nem0/LumixEngine/releases'


return (
    <>
<section class='heroSection'>
  
<h1 class='forceTitle'>Lumix Engine </h1>
<button  type= "button" onClick={() => window.open(lumix_url, '_blank')}>
    
    
    <span>Download</span>

</button>
</section>
  
    </>



);


}