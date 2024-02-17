import React, { useState, useEffect } from 'react';
import { TeamCard } from './components/TeamCard';
import arsenal from './assets/arsenal.png'
import astonVilla from './assets/astonVilla.png'
import bournemouth from './assets/bournemouth.png'
import brentford from './assets/brentford.png'
import brighton from './assets/brighton.png'
import burnley from './assets/burnley.png'
import chelsea from './assets/chelsea.png'
import crystal from './assets/crystal.png'
import everton from './assets/everton.png'
import fulham from './assets/fulham.png'
import liverpool from './assets/liverpool.png'
import luton from './assets/luton.png'
import manCity from './assets/manCity.png'
import manUnited from './assets/manUnited.png'
import newCastle from './assets/newCastle.png'
import notForest from './assets/notForest.png'
import sheffield from './assets/sheffield.png'
import spurs from './assets/spurs.png'
import westHam from './assets/westHam.png'
import wolves from './assets/wolves.png'
import { TeamNews } from './components/TeamNews';

function App() {
  const [news, setNews] = useState([]);

  async function RenderNews(teamName) {
    // Check if the app is in production
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? `/api/news/${teamName}` // Use relative URL for production
      : `${import.meta.env.VITE_API_URL}/news/${teamName}`; // Use full URL for development
  
    const response = await fetch(baseUrl);
    const articles = await response.json();
    setNews(articles);
  }
  
  useEffect(() => {
    RenderNews('manchester-united');
  }, []);

  return (
    <div>
      <div className='flex pt-4 mt-2 mx-2 justify-center rounded-md font-extrabold text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500 h-16'>
        Premier League News
      </div>
      <div className='grid grid-cols-1 gap-4 mt-8 mx-12 sm:grid-cols-2 md:grid-cols-5'>
        <TeamCard logo ={arsenal} team ='Arsenal'  bgBottomColor='border-b-red-600' onClick = {()=> RenderNews('arsenal')}></TeamCard>
        <TeamCard logo ={astonVilla} team ='Aston Villa'  bgBottomColor='border-b-pink-800' onClick = {()=> RenderNews('aston-villa')}></TeamCard>
        <TeamCard logo ={bournemouth} team ='Bournemouth'  bgBottomColor='border-b-red-800' onClick = {()=> RenderNews('afc-bournemouth')}></TeamCard>
        <TeamCard logo ={brentford} team ='Brentford'  bgBottomColor='border-b-red-600' onClick = {()=> RenderNews('brentford')}></TeamCard>
        <TeamCard logo ={brighton} team ='Brighton'  bgBottomColor='border-b-sky-600' onClick = {()=> RenderNews('brighton-and-hove-albion')}></TeamCard>
        <TeamCard logo ={burnley} team ='Burnley'  bgBottomColor='border-b-pink-800' onClick = {()=> RenderNews('burnley')}></TeamCard>
        <TeamCard logo ={chelsea} team ='Chelsea'  bgBottomColor='border-b-blue-700' onClick = {()=> RenderNews('chelsea')}></TeamCard>
        <TeamCard logo ={crystal} team ='Crystal Palace' bgBottomColor='border-b-blue-600' onClick = {()=> RenderNews('crystal-palace')}></TeamCard>
        <TeamCard logo ={everton} team ='Everton'  bgBottomColor='border-b-blue-900' onClick = {()=> RenderNews('everton')}></TeamCard>
        <TeamCard logo ={fulham} team ='Fulham'  bgBottomColor='border-b-gray-100' onClick = {()=> RenderNews('fulham')}></TeamCard>
        <TeamCard logo ={liverpool} team ='Liverpool'  bgBottomColor='border-b-red-800' onClick = {()=> RenderNews('liverpool')}></TeamCard>
        <TeamCard logo ={luton} team ='Luton Town'  bgBottomColor='border-b-orange-500' onClick = {()=> RenderNews('luton-town')}></TeamCard>
        <TeamCard logo ={manCity} team ='Manchester City'  bgBottomColor='border-b-sky-400' onClick = {()=> RenderNews('manchester-city')}></TeamCard>
        <TeamCard logo ={manUnited} team ='Manchester United'  bgBottomColor='border-b-red-600' onClick = {()=> RenderNews('manchester-united')}></TeamCard>
        <TeamCard logo ={newCastle} team ='Newcastle United'  bgBottomColor='border-b-stone-700' onClick = {()=> RenderNews('newcastle-united')}></TeamCard>
        <TeamCard logo ={notForest} team ='Nottingham Forest'  bgBottomColor='border-b-red-500' onClick = {()=> RenderNews('nottingham-forest')}></TeamCard>
        <TeamCard logo ={sheffield} team ='Sheffield United'  bgBottomColor='border-b-red-400'onClick = {()=> RenderNews('sheffield-united')} ></TeamCard>
        <TeamCard logo ={spurs} team ='Tottenham Hotspur'  bgBottomColor='border-b-gray-100' onClick = {()=> RenderNews('tottenham-hotspur')}></TeamCard>
        <TeamCard logo ={westHam} team ='West Ham United' bgBottomColor='border-b-pink-800' onClick = {()=> RenderNews('west-ham-united')}></TeamCard>
        <TeamCard logo ={wolves} team ='Wolves' bgBottomColor='border-b-amber-600' onClick = {()=> RenderNews('wolverhampton-wanderers')} ></TeamCard>
      </div>
      <div id='news'>
        <TeamNews articles = {news}></TeamNews>
      </div>
    </div>
  );
}

export default App;