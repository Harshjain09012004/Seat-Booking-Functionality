import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [business, setbusiness] = useState(Array(35).fill(false));
  const [economy, seteconomy] = useState(Array(35).fill(false));
  const [general, setgeneral] = useState(Array(35).fill(false));

  function HandleUIBooking(){
    const economySeats = document.getElementsByClassName('Economy')[0].getElementsByTagName('div');

    const businessSeats = document.getElementsByClassName('Business')[0].getElementsByTagName('div');

    const generalSeats = document.getElementsByClassName('General')[0].getElementsByTagName('div');

    Array.from(economySeats).forEach((seat,id)=>{
      seat.addEventListener('click',()=>{
        economy[id] = !economy[id];
        if(economy[id] == true) seat.style.backgroundColor = 'rgb(18, 222, 18)';
        else seat.style.backgroundColor = 'rgb(133, 150, 168)';
      })
    })

    Array.from(businessSeats).forEach((seat,id)=>{
      seat.addEventListener('click',()=>{
        business[id] = !business[id];
        if(business[id] == true) seat.style.backgroundColor = 'rgb(18, 222, 18)';
        else seat.style.backgroundColor = 'rgb(133, 150, 168)';
      })
    })

    Array.from(generalSeats).forEach((seat,id)=>{
      seat.addEventListener('click',()=>{
        general[id] = !general[id];
        if(general[id] == true) seat.style.backgroundColor = 'rgb(18, 222, 18)';
        else seat.style.backgroundColor = 'rgb(133, 150, 168)';
      })
    })
  }

  function bookSeats(){
    let ecSeats = `Economy Seats\n`;
    let buSeats = `Business Seats\n`;
    let geSeats = `General Seats\n`;

    for(let i=0;i<economy.length;i++){
      if(economy[i]==true){
        ecSeats += `\t Row : ${Math.floor(i/5)}  Col : ${i%5}\n`;
      }
    }

    for(let i=0;i<business.length;i++){
      if(business[i]==true){
        buSeats += `\t Row : ${Math.floor(i/5)}  Col : ${i%5}\n`;
      }
    }

    for(let i=0;i<general.length;i++){
      if(general[i]==true){
        geSeats += `\t Row : ${Math.floor(i/5)}  Col : ${i%5}\n`;
      }
    }

    alert(buSeats + `\n` + ecSeats + `\n` + geSeats);
  }

  useEffect(()=>{
    HandleUIBooking();
  },[]);

  return (
    <div className='w-screen h-screen bg-black flex place-items-center justify-evenly '>

      <div className='EconomySection w-[18%] h-[55%] flex flex-col gap-8'>
        <div className='text-white font-medium text-4xl'>Economy Class</div>
        <div className='Economy flex gap-5 flex-wrap '>
          {economy.map(()=>{
            return <div></div>
          })}
        </div>
      </div>
      
       <div className='BusinessSection w-[18%] h-[55%] flex flex-col gap-8'>
        <div className='text-white font-medium text-4xl'>Business Class</div>
        <div className='Business flex gap-5 flex-wrap '>
          {business.map(()=>{
            return <div></div>
          })}
        </div>
      </div>

       <div className='GeneralSection w-[18%] h-[55%] flex flex-col gap-8'>
        <div className='text-white font-medium text-4xl'>General Class</div>
        <div className='General flex gap-5 flex-wrap '>
          {general.map(()=>{
            return <div></div>
          })}
        </div>
      </div>

      <div className='p-3 px-8 shadow-md shadow-gray-500 bg-green-400 rounded-full text-lg text-stone-700 font-medium active:scale-105 transition-all cursor-pointer' onClick={bookSeats}>Book Seats</div>

    </div>
  )
}

export default App
