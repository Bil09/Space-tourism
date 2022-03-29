import img1 from '../../img/destination/image-moon.png';
const SelectDest = () => {
   return(
      <section>
        <h5 className='destination_title'>01 SELECT YOUR DESTINATION</h5>
        <img src={img1} className='destination_img'/>
        <ul className='destination_option'>
           <li className='destination_li'>MOON</li>
           <li className='destination_li'>MARS</li>
           <li className='destination_li'>EUROPA</li>
           <li className='destination_li'>TITAN</li>
        </ul>
      </section>
   );
}

export default SelectDest;