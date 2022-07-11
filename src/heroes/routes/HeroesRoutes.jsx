import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { LoginPage } from '../../auth';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Navigate to='marvel' />} />
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero' element={<HeroPage />} />
        </Routes>
      </div>
    </>
  );
};
